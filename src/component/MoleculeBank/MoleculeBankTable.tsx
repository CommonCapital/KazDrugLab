"use client";
import React, { useState, useEffect } from "react";
import MoleculeStructure from "../MoleculeStructure/index";

const moleculeBank = [
  {
    moleculeName: "Aspirin",
    smilesStructure: "CC(=O)OC1=CC=CC=C1C(O)=O",
    molecularWeight: 180.16,
    categoryUsage: "Pain reliever/NSAID",
  },
  {
    moleculeName: "Caffeine",
    smilesStructure: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",
    molecularWeight: 194.19,
    categoryUsage: "Stimulant",
  },
  {
    moleculeName: "Benzene",
    smilesStructure: "C1=CC=CC=C1",
    molecularWeight: 78.11,
    categoryUsage: "Industrial solvent",
  },
  {
    moleculeName: "Glucose",
    smilesStructure: "C(C1C(C(C(C(O1)O)O)O)O)O",
    molecularWeight: 180.16,
    categoryUsage: "Energy source/sugar",
  },
  {
    moleculeName: "Penicillin",
    smilesStructure: "CC1(C2C(C(C(O2)N1C(=O)COC(=O)C)C)S)C=O",
    molecularWeight: 334.39,
    categoryUsage: "Antibiotic",
  },
  {
    moleculeName: "Ibuprofen",
    smilesStructure: "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O",
    molecularWeight: 206.28,
    categoryUsage: "Pain reliever/NSAID",
  },
  {
    moleculeName: "Acetaminophen",
    smilesStructure: "CC(=O)NC1=CC=C(O)C=C1",
    molecularWeight: 151.16,
    categoryUsage: "Pain reliever/Antipyretic",
  },
  {
    moleculeName: "Morphine",
    smilesStructure: "CN1CCC23C4C1CC(C2C3O)OC5=CC=CC=C45",
    molecularWeight: 285.34,
    categoryUsage: "Pain reliever/Opiate",
  },
  {
    moleculeName: "Nicotine",
    smilesStructure: "CN1CCCC1C2=CN=CC=C2",
    molecularWeight: 162.23,
    categoryUsage: "Stimulant",
  },
  {
    moleculeName: "Ethanol",
    smilesStructure: "CCO",
    molecularWeight: 46.07,
    categoryUsage: "Alcohol/Disinfectant",
  },
  {
    moleculeName: "Methane",
    smilesStructure: "C",
    molecularWeight: 16.04,
    categoryUsage: "Fuel/Natural Gas",
  },
  {
    moleculeName: "Water",
    smilesStructure: "O",
    molecularWeight: 18.02,
    categoryUsage: "Solvent/Life necessity",
  },
  {
    moleculeName: "Dopamine",
    smilesStructure: "NCCc1cc(O)c(O)cc1",
    molecularWeight: 153.18,
    categoryUsage: "Neurotransmitter",
  },
  {
    moleculeName: "Folic Acid",
    smilesStructure: "Nc1cnc(N)c2cnc(Cc3ccc(C(=O)N[C@@H](CCC(=O)O)C(=O)O)cc3)nc12",
    molecularWeight: 441.40,
    categoryUsage: "Vitamin/Supplement",
  },
  {
    moleculeName: "Teflon (Monomer)",
    smilesStructure: "C(=C(F)F)(F)F", // Tetrafluoroethylene
    molecularWeight: 100.02,
    categoryUsage: "Polymer precursor",
  },
  {
    moleculeName: "Cholesterol",
    smilesStructure: "CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C",
    molecularWeight: 386.66,
    categoryUsage: "Steroid/Cell membrane component",
  },
  {
    moleculeName: "TNT",
    smilesStructure: "CC1=C(C=C(C=C1[N+](=O)[O-])[N+](=O)[O-])[N+](=O)[O-]", // Trinitrotoluene
    molecularWeight: 227.13,
    categoryUsage: "Explosive",
  },
  {
    moleculeName: "Ammonia",
    smilesStructure: "N",
    molecularWeight: 17.03,
    categoryUsage: "Industrial feedstock/Cleaner",
  },
  {
    moleculeName: "Vitamin C",
    smilesStructure: "OC[C@H](O)[C@H]1OC(=O)C(=C1O)O", // Ascorbic Acid
    molecularWeight: 176.12,
    categoryUsage: "Vitamin/Antioxidant",
  },
  {
    moleculeName: "Diazepam",
    smilesStructure: "CN1C(=O)C(C(c2ccccc2)=NC3=C1C=CC(=C3)Cl)C4=CC=CC=C4",
    molecularWeight: 284.74,
    categoryUsage: "Sedative/Anxiolytic",
  },
  {
    moleculeName: "Sucrose",
    smilesStructure: "C(C1C(C(C(C(O1)OC2(C(C(C(O2)CO)O)O)CO)O)O)O)O",
    molecularWeight: 342.30,
    categoryUsage: "Sweetener/Sugar",
  },
  {
    moleculeName: "Sildenafil",
    smilesStructure: "CCCC1=NN(C(=O)C1=C(N2C=NC3=C2N=C(C(=N3)NCCS(=O)(=O)C)C)S(=O)(=O)C)C",
    molecularWeight: 474.58,
    categoryUsage: "Erectile dysfunction treatment",
  },
  {
    moleculeName: "Insulin (A-Chain Terminal)",
    smilesStructure: "NC(CO)C(=O)NC(CC(N)=O)C(=O)N", // Partial (Gly-Ile-Val-Glu-Gln) would be massive
    molecularWeight: 75.07, // Using glycine, the simplest amino acid, as a placeholder
    categoryUsage: "Hormone/Protein",
  },
  {
    moleculeName: "Chloroform",
    smilesStructure: "C(Cl)(Cl)Cl",
    molecularWeight: 119.38,
    categoryUsage: "Solvent/Refrigerant precursor",
  },
  {
    moleculeName: "LSD",
    smilesStructure: "CN(C)C(=O)[C@H]1CN(C)[C@H]2Cc3c(C=CC=C3)C=C12", // Simplified
    molecularWeight: 323.44,
    categoryUsage: "Psychedelic",
  },
  {
    moleculeName: "Ammonium Nitrate",
    smilesStructure: "N.[N+](=O)[O-]",
    molecularWeight: 80.04,
    categoryUsage: "Fertilizer/Explosive",
  },
  {
    moleculeName: "Sulfuric Acid",
    smilesStructure: "OS(=O)(=O)O",
    molecularWeight: 98.08,
    categoryUsage: "Industrial chemical/Battery acid",
  },
  {
    moleculeName: "Acetone",
    smilesStructure: "CC(=O)C",
    molecularWeight: 58.08,
    categoryUsage: "Solvent/Nail polish remover",
  },
  {
    moleculeName: "Methanol",
    smilesStructure: "CO",
    molecularWeight: 32.04,
    categoryUsage: "Solvent/Antifreeze",
  },
  {
    moleculeName: "Propane",
    smilesStructure: "CCC",
    molecularWeight: 44.10,
    categoryUsage: "Fuel/Refrigerant",
  },
  {
    moleculeName: "Formaldehyde",
    smilesStructure: "C=O",
    molecularWeight: 30.03,
    categoryUsage: "Preservative/Industrial chemical",
  },
  {
    moleculeName: "Hydrogen Peroxide",
    smilesStructure: "OO",
    molecularWeight: 34.01,
    categoryUsage: "Antiseptic/Bleaching agent",
  },
  // --- Pharmaceuticals & Drugs ---
  {
    moleculeName: "Atorvastatin",
    smilesStructure: "CC(C)c1ccc(cc1)C(O)CC(Cc1ccc(F)cc1)C(=O)NC2=CC(=C(C=C2)C)c3ccccc3",
    molecularWeight: 558.64,
    categoryUsage: "Statin/Cholesterol lowering",
  },
  {
    moleculeName: "Metformin",
    smilesStructure: "CN(C)C(=N)N=C(N)N",
    molecularWeight: 129.16,
    categoryUsage: "Anti-diabetic",
  },
  {
    moleculeName: "Omeprazole",
    smilesStructure: "COc1cc2nc(C)c(CS(=O)c3nccc4n3C(=C4)OC)n2c1",
    molecularWeight: 345.42,
    categoryUsage: "Proton pump inhibitor/Antacid",
  },
  {
    moleculeName: "Lisinopril",
    smilesStructure: "O=C(O)C(CCCNC(=O)[C@H](CCCCN)C(=O)O)N1CCCC[C@H]1C(=O)O",
    molecularWeight: 405.49,
    categoryUsage: "ACE inhibitor/Antihypertensive",
  },
  {
    moleculeName: "Gabapentin",
    smilesStructure: "NC(CC(=O)O)C1(CCCCCC1)C",
    molecularWeight: 171.24,
    categoryUsage: "Anticonvulsant/Nerve pain",
  },
  {
    moleculeName: "Cocaine",
    smilesStructure: "COC(=O)[C@@H]1C[C@H]2CC[C@@H]1N2C(=O)c3ccccc3",
    molecularWeight: 303.35,
    categoryUsage: "Local anesthetic/Illicit stimulant",
  },
  {
    moleculeName: "Warfarin",
    smilesStructure: "CC(=O)CC(c1ccccc1)c2c(O)c3ccccc3oc2=O",
    molecularWeight: 308.33,
    categoryUsage: "Anticoagulant/Blood thinner",
  },
  {
    moleculeName: "Fentanyl",
    smilesStructure: "CCC(=O)N(c1ccccc1)C2CCN(CCC2)Cc3ccccc3",
    molecularWeight: 336.47,
    categoryUsage: "Opioid analgesic",
  },
  // --- Vitamins & Biomolecules ---
  {
    moleculeName: "Serotonin",
    smilesStructure: "NCCc1c[nH]c2ccc(O)cc12",
    molecularWeight: 176.22,
    categoryUsage: "Neurotransmitter/Mood regulator",
  },
  {
    moleculeName: "Adrenaline",
    smilesStructure: "CN[C@@H](CO)c1cc(O)c(O)cc1",
    molecularWeight: 183.20,
    categoryUsage: "Hormone/Neurotransmitter",
  },
  {
    moleculeName: "Retinol (Vitamin A)",
    smilesStructure: "CC1=C(C(C)(C)CCC1=CC=C(C)C=CC=C(C)CO)C",
    molecularWeight: 286.46,
    categoryUsage: "Vitamin/Vision health",
  },
  {
    moleculeName: "Glycerol",
    smilesStructure: "OCC(O)CO",
    molecularWeight: 92.09,
    categoryUsage: "Triol/Sweetener/Moisturizer",
  },
  {
    moleculeName: "Lactic Acid",
    smilesStructure: "CC(O)C(=O)O",
    molecularWeight: 90.08,
    categoryUsage: "Metabolite/Food acidulant",
  },
  {
    moleculeName: "Taurine",
    smilesStructure: "NCCS(=O)(=O)O",
    molecularWeight: 125.15,
    categoryUsage: "Amino acid derivative/Energy drink additive",
  },
  {
    moleculeName: "Urea",
    smilesStructure: "NC(=O)N",
    molecularWeight: 60.06,
    categoryUsage: "Fertilizer/Metabolic waste",
  },
  // --- Industrial & Environmental ---
  {
    moleculeName: "Toluene",
    smilesStructure: "Cc1ccccc1",
    molecularWeight: 92.14,
    categoryUsage: "Industrial solvent/Precursor",
  },
  {
    moleculeName: "DDT",
    smilesStructure: "ClC(Cl)(Cl)C(c1ccc(Cl)cc1)c2ccc(Cl)cc2",
    molecularWeight: 354.49,
    categoryUsage: "Pesticide (historical)",
  },
  {
    moleculeName: "Methylene Chloride",
    smilesStructure: "ClCCl", // Dichloromethane
    molecularWeight: 84.93,
    categoryUsage: "Solvent/Paint stripper",
  },
  {
    moleculeName: "Phosgene",
    smilesStructure: "O=C(Cl)Cl",
    molecularWeight: 98.92,
    categoryUsage: "Toxic gas/Industrial reagent",
  },
  {
    moleculeName: "Styrene",
    smilesStructure: "C=Cc1ccccc1",
    molecularWeight: 104.15,
    categoryUsage: "Polymer precursor (Polystyrene)",
  },
  {
    moleculeName: "Trichloroethylene",
    smilesStructure: "ClC=C(Cl)Cl",
    molecularWeight: 131.39,
    categoryUsage: "Solvent/Degreaser",
  },
  // --- Amino Acids & Building Blocks ---
  {
    moleculeName: "Glycine",
    smilesStructure: "NCC(=O)O",
    molecularWeight: 75.07,
    categoryUsage: "Amino acid/Protein building block",
  },
  {
    moleculeName: "Alanine",
    smilesStructure: "CC(N)C(=O)O",
    molecularWeight: 89.09,
    categoryUsage: "Amino acid/Protein building block",
  },
  {
    moleculeName: "L-Lysine",
    smilesStructure: "NCCCC[C@H](N)C(=O)O",
    molecularWeight: 146.19,
    categoryUsage: "Essential amino acid",
  },
  {
    moleculeName: "Adenine",
    smilesStructure: "Nc1ncnc2[nH]cnc12",
    molecularWeight: 135.13,
    categoryUsage: "Nucleobase/DNA/RNA component",
  },
  {
    moleculeName: "Cytosine",
    smilesStructure: "Nc1ncc(=O)[nH]c1=O",
    molecularWeight: 111.10,
    categoryUsage: "Nucleobase/DNA/RNA component",
  },
  // --- Flavors and Fragrances ---
  {
    moleculeName: "Vanillin",
    smilesStructure: "COc1cc(C=O)ccc1O",
    molecularWeight: 152.15,
    categoryUsage: "Flavoring agent (Vanilla)",
  },
  {
    moleculeName: "Limonene",
    smilesStructure: "CC1=CCC(C(C)C)CC1",
    molecularWeight: 136.24,
    categoryUsage: "Flavor/Fragrance (Citrus)",
  },
  {
    moleculeName: "Eugenol",
    smilesStructure: "COc1cc(CCC)ccc1O",
    molecularWeight: 164.20,
    categoryUsage: "Flavor/Fragrance (Clove)",
  },
  {
    moleculeName: "Menthol",
    smilesStructure: "CC1CCC(C(C)C)C1O",
    molecularWeight: 156.27,
    categoryUsage: "Flavor/Cooling agent (Mint)",
  },
  {
    moleculeName: "Capsaicin",
    smilesStructure: "COc1cc(O)c(CCC=C(C)C)cc1NC(=O)CCCC(C)C",
    molecularWeight: 305.41,
    categoryUsage: "Spiciness/Pain relief",
  },
];

const MoleculeBankTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMolecules, setFilteredMolecules] = useState(moleculeBank);

  useEffect(() => {
    const filteredData = moleculeBank.filter((molecule) =>
      molecule.moleculeName.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredMolecules(filteredData);
  }, [searchQuery]);

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-[#181818] dark:bg-[#181818] sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black ">
        Molecules
      </h4>

      <input
        type="search"
        placeholder="Search molecule"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-gray-300 text-gray-700 placeholder-gray-400 dark:border-gray-600 dark:placeholder-gray-500 text-md mb-4 w-full rounded-lg border bg-white px-4 py-3 shadow-sm outline-none focus:border-primary focus:ring-primary dark:bg-[#181818] dark:text-white"
      />
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-lg bg-gray-2 dark:bg-[#121212] sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm text-black font-medium uppercase xsm:text-base">
              Molecule name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm text-black font-medium uppercase xsm:text-base">
              Smile Structure Image
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm text-black font-medium uppercase xsm:text-base">
              Molecular Weights (g/mol)
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm text-black font-medium uppercase xsm:text-base">
              Category Usage
            </h5>
          </div>
        </div>

        {filteredMolecules.map((molecule, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              key === filteredMolecules.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {molecule.moleculeName}
              </p>
            </div>

            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <MoleculeStructure
                  id={`${key}`}
                  structure={molecule.smilesStructure}
                />
              </div>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {molecule.molecularWeight}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {molecule.categoryUsage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoleculeBankTable;