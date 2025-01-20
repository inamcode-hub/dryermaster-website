# Dryer Master Website

Welcome to the **Dryer Master Website** project documentation. This project is designed to provide an SEO-friendly platform for showcasing products, publishing blogs, and delivering high-performance user experiences.

---

## **Project Scope**

This document outlines the roadmap for building a static website using **Next.js** with the following features:

- Hosting the static site with **Nginx**.
- Uploading static files to **Amazon S3** for scalable storage.
- Using **AWS CloudFront** as a CDN for global content delivery.
- Integrating **Strapi** as a headless CMS for dynamic content management.
- Adding **HubSpot Live Chat** for customer engagement.
- Leveraging **HubSpot** and **Google Analytics** for traffic analysis and user behavior insights.

---

## **Project Goals**

1. **SEO-Friendly Setup**: Optimize website for search engines using proper headers, caching, and content structure.
2. **Content Management**: Easily add and manage products and blogs using Contentful.
3. **Customer Engagement**: Provide live chat for instant user interaction through HubSpot Live Chat.
4. **Traffic Analysis**: Track user activity using HubSpot and Google Analytics.
5. **Maintainable Infrastructure**: Structured documentation for seamless setup and scaling on different servers.

---

## **Documentation**

Below are the links to detailed system documentation:

- [Nginx Configuration](./doc/system/nginx.md): Learn about the Nginx setup for serving the Next.js application, caching, and static file handling.
- [AWS S3 and CloudFront Setup](./doc/system/aws.md): Steps to configure AWS S3 for static file storage and CloudFront as a CDN.
- [Contentful Integration](./doc/system/contentful.md): Guide to integrating Contentful as the headless CMS.
- [HubSpot Live Chat and Analytics](./doc/system/hubspot.md): Setup HubSpot Live Chat and track analytics using HubSpot tools.
- [Google Analytics Integration](./doc/system/google-analytics.md): Add Google Analytics to monitor traffic and user behavior.

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your server:

- Node.js (version compatible with the Next.js app)
- PM2 for managing the application process
- Nginx for reverse proxying and static file serving
- AWS CLI for managing S3 and CloudFront
- Git for version control

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/inamcode-hub/dryermaster-website.git
   cd dryermaster-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the Next.js application:

   ```bash
   npm run build
   npm run export
   ```

4. Sync the static files to AWS S3:

   ```bash
   aws s3 sync out/ s3://your-bucket-name --acl public-read
   ```

5. Configure Nginx:
   - Follow the [Nginx Configuration](./doc/system/nginx.md) guide to set up Nginx for serving the application.

---

## **Future Enhancements**

1. **SEO Optimization**:

   - Use Next.js `<Head>` component for dynamic metadata.
   - Add Open Graph and Twitter meta tags for better social sharing.

2. **Image Optimization**:

   - Use the Next.js `<Image>` component for Contentful-hosted images.
   - Add caching policies for S3 and CloudFront.

3. **Scalability**:
   - Add CI/CD pipeline to automate deployment of new builds.
   - Use AWS Lambda@Edge for serverless functions if needed.

---

## **Conclusion**

This roadmap provides a structured approach to building a high-performance static website with Next.js, Contentful for CMS, HubSpot for live chat and analytics, and AWS services for hosting and content delivery. By following these steps, you can create a scalable, user-friendly, and SEO-optimized web application.
