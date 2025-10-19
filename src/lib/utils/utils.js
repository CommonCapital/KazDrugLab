import initRDKitModule from "@rdkit/rdkit";

 const initRDKit = (() => {
  let rdkitLoadingPromise;
  return () => {
    if (!rdkitLoadingPromise) {
      rdkitLoadingPromise = new Promise((resolve, reject) => {
        initRDKitModule()
          .then((RDKit) => {
            resolve(RDKit);
          })
          .catch((e) => {
            reject(e);
          });
      });
    }
    return rdkitLoadingPromise;
  };
})();

export default initRDKit