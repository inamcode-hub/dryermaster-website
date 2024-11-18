# Nginx Configuration for Next.js Application with Static Files and Modular Structure

This documentation outlines the configuration and setup used to serve a Next.js application (`dryermaster_website`) with Nginx. It includes instructions for setting up static files, caching, and modular configuration files for a clean and maintainable structure.

## Folder Structure

### Nginx Configuration Folder (`/etc/nginx`)

```
/etc/nginx
|-- conf.d/
|   |-- caching.conf        # Caching configuration
|   |-- static-assets.conf  # Static assets handling
|   |-- additional.conf     # Additional custom configurations
|-- sites-available/
|   |-- dryersmaster.com    # Main server configuration for the website
|-- sites-enabled/
|   |-- dryersmaster.com    # Symlink to sites-available/dryersmaster.com
|-- nginx.conf              # Main Nginx configuration file
```

### Next.js Application Folder (`/home/ubuntu/dryermaster_website`)

```
/home/ubuntu/dryermaster_website
|-- .next/
|   |-- static/             # Contains static files (CSS, JS, etc.)
|-- other application files and folders
```

---

## Nginx Configuration

### Main Nginx Configuration (`/etc/nginx/nginx.conf`)

This is the primary Nginx configuration file. Ensure it includes the following:

```nginx
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 768;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    sendfile on;
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Include additional configuration files
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
```

### Server Configuration (`/etc/nginx/sites-available/dryersmaster.com`)

This file defines the main server settings for the site.

```nginx
server {
    listen 443 ssl;
    server_name dryersmaster.com www.dryersmaster.com;

    ssl_certificate /etc/letsencrypt/live/dryersmaster.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dryersmaster.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    client_max_body_size 15M;

    # Include modular configurations
    include /etc/nginx/conf.d/static-assets.conf;
    include /etc/nginx/conf.d/caching.conf;
    include /etc/nginx/conf.d/additional.conf;

    # Proxy requests to the Next.js server
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name dryersmaster.com www.dryersmaster.com;
    return 301 https://$host$request_uri;
}
```

### Static Assets Configuration (`/etc/nginx/conf.d/static-assets.conf`)

Handles caching and serving of static files.

```nginx
# Cache static assets (images, CSS, JS, fonts)
location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|otf|svg|webp)$ {
    root /home/ubuntu/dryermaster_website/.next;
    expires 6M;
    add_header Cache-Control "public, max-age=15552000, immutable";
    access_log off;
}

# Cache Next.js static assets
location ~* ^/_next/static/ {
    root /home/ubuntu/dryermaster_website/.next;
    expires 6M;
    add_header Cache-Control "public, max-age=15552000, immutable";
    access_log off;
}
```

### Caching Configuration (`/etc/nginx/conf.d/caching.conf`)

Defines caching policies for dynamic content.

```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=100m inactive=1m use_temp_path=off;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 1m;
    proxy_cache_bypass $http_cache_control;
    proxy_pass http://localhost:3000;
}
```

---

## Deployment Instructions

### Step 1: Configure Nginx

1. Place the configuration files in their respective locations.
2. Ensure the `sites-enabled` directory contains a symlink to the `sites-available/dryersmaster.com` file:
   ```bash
   sudo ln -s /etc/nginx/sites-available/dryersmaster.com /etc/nginx/sites-enabled/
   ```

### Step 2: Adjust Permissions

Ensure the Next.js static directory has appropriate permissions:

```bash
sudo chown -R www-data:www-data /home/ubuntu/dryermaster_website/.next/static/
sudo chmod -R 755 /home/ubuntu/dryermaster_website/.next/static/
```

### Step 3: Validate and Restart Nginx

1. Test the Nginx configuration:
   ```bash
   sudo nginx -t
   ```
2. Reload Nginx:
   ```bash
   sudo systemctl reload nginx
   ```

---

## Notes

- Ensure the `dryermaster_website` folder contains the built Next.js files (`npm run build`).
- Update the domain names and paths as necessary for new servers.
