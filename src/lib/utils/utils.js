export const initRDKit = (() => {
  let rdkitLoadingPromise;

  return () => {
    if (!rdkitLoadingPromise) {
      rdkitLoadingPromise = new Promise((resolve, reject) => {
        // If already loaded globally
        if (window.RDKit) {
          resolve(window.RDKit);
          return;
        }

        // Otherwise load the script dynamically
        const script = document.createElement("script");
        script.src = "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js";
        script.async = true;

        script.onload = () => {
          if (window.initRDKitModule) {
            window.initRDKitModule()
              .then((RDKit) => {
                window.RDKit = RDKit;
                resolve(RDKit);
              })
              .catch(reject);
          } else {
            reject(new Error("initRDKitModule not found"));
          }
        };

        script.onerror = () => reject(new Error("Failed to load RDKit script"));

        document.head.appendChild(script);
      });
    }
    return rdkitLoadingPromise;
  };
})();