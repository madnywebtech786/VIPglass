'use client';

import { useEffect } from 'react';

export default function GlassBillerForm() {
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[shop-id="1633"]');
    if (existingScript) return;

    const src = "https://web-form.glassbiller.com/index.js";
    const script = document.createElement("script");
    script.setAttribute("src", `${src}?${Date.now()}`);
    script.setAttribute("shop-id", "1633");
    script.setAttribute("button-type", "regular");
    script.setAttribute("button-position", "right");
    script.setAttribute("button-bg-color", "#bc1622");
    script.setAttribute("button-border-color", "#bc1622");
    script.setAttribute("button-text-color", "#ffffff");
    script.setAttribute("modal-position", "dialog");
    script.setAttribute("submit-text", "Get a quote");
    script.setAttribute("redirect-url", "https://");
    script.setAttribute("fields", "%5B%7B%22id%22%3A%22gb_first_name%22%2C%22name%22%3A%22First%20Name%22%2C%22show%22%3Atrue%2C%22required%22%3Atrue%7D%2C%7B%22id%22%3A%22gb_last_name%22%2C%22name%22%3A%22Last%20Name%22%2C%22show%22%3Atrue%2C%22required%22%3Afalse%7D%2C%7B%22id%22%3A%22gb_phone%22%2C%22name%22%3A%22Phone%22%2C%22show%22%3Atrue%2C%22required%22%3Atrue%7D%2C%7B%22id%22%3A%22gb_email%22%2C%22name%22%3A%22Email%20Address%22%2C%22show%22%3Atrue%2C%22required%22%3Atrue%7D%2C%7B%22id%22%3A%22gb_address%22%2C%22name%22%3A%22Address%22%2C%22show%22%3Atrue%2C%22required%22%3Afalse%7D%2C%7B%22id%22%3A%22gb_vin%22%2C%22name%22%3A%22Vin%22%2C%22show%22%3Atrue%2C%22required%22%3Afalse%7D%2C%7B%22id%22%3A%22gb_vehicle%22%2C%22name%22%3A%22Vehicle%22%2C%22show%22%3Atrue%2C%22required%22%3Atrue%7D%2C%7B%22id%22%3A%22gb_referral%22%2C%22name%22%3A%22Referral%22%2C%22show%22%3Atrue%2C%22required%22%3Afalse%7D%2C%7B%22id%22%3A%22gb_description%22%2C%22name%22%3A%22Description%22%2C%22show%22%3Atrue%2C%22required%22%3Afalse%7D%5D");

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[shop-id="1633"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

// Helper function to trigger the GlassBiller form programmatically
export function openGlassBillerForm() {
  console.log("Opening GlassBiller form...");

  // Try multiple possible selectors for the GlassBiller button
  const selectors = [
    '[data-glassbiller-button]',
    'button[class*="glassbiller"]',
    'div[class*="glassbiller"]',
    '#glassbiller-button',
    '[id*="glassbiller"]',
    'button[onclick*="glassbiller"]',
    'a[class*="glassbiller"]',
    // Common GlassBiller class names
    '.gb-button',
    '.glassbiller-trigger',
    '.gb-trigger',
    // Try finding by position attribute
    '[button-position="right"]'
  ];

  // Try each selector
  for (const selector of selectors) {
    const button = document.querySelector(selector);
    if (button) {
      console.log(`Found GlassBiller button with selector: ${selector}`, button);
      button.click();
      return;
    }
  }

  // If no button found, check if there's a global function
  if (typeof window !== 'undefined') {
    // Try common global function names
    const globalFunctions = ['openGlassBiller', 'showGlassBiller', 'glassBillerOpen', 'GlassBiller'];
    for (const funcName of globalFunctions) {
      if (typeof window[funcName] === 'function') {
        console.log(`Found global function: ${funcName}`);
        window[funcName]();
        return;
      }
    }
  }

  console.warn('GlassBiller button not found. Available buttons:', document.querySelectorAll('button'));
  console.warn('Try inspecting the page to find the correct selector.');
}
