import React from "react";
import Script from "next/script";

const BoostrapScripts = () => {
  return (
    <>
      {/* Popper.js */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        strategy="beforeInteractive" // Ensures the script is loaded before the page is interactive
      />

      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        strategy="beforeInteractive" // Same for Bootstrap
      />
    </>
  );
};

export default BoostrapScripts;
