'use client';

import useScript from '@/lib/useScript';

const ScriptManager = () => {
  console.log('[ScriptManager]: Initializing script manager.');
  useScript(
    'https://js-na1.hs-scripts.com/48918185.js',
    'hs-script-loader-chat'
  ); // Ensure HTTPS

  return null; // No UI; just loads the script
};

export default ScriptManager;
