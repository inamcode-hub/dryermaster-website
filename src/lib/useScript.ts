import { useEffect } from 'react';

const useScript = (src: string, id: string): void => {
  useEffect(() => {
    // Check if the script is already loaded
    if (document.getElementById(id)) {
      console.log(`[useScript]: Script with ID "${id}" already loaded.`);
      return;
    }

    // Create and add the script
    console.log(`[useScript]: Adding script with ID "${id}" from "${src}".`);
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.async = true;
    script.defer = true;

    // Handle success and errors
    script.onload = () => {
      console.log(`[useScript]: Script with ID "${id}" successfully loaded.`);
    };
    script.onerror = (e) => {
      console.error(`[useScript]: Failed to load script with ID "${id}".`, e);
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      console.log(`[useScript]: Cleaning up script with ID "${id}".`);
      const existingScript = document.getElementById(id);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [src, id]);
};

export default useScript;
