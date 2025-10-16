
import App from "@/component/App/App";
import DefaultLayout from "@/component/Layout/DefaultLayout";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "KazDrugLab is an advanced AI-powered biomedical research platform.",
  description: 'Designed to accelerate molecular and protein-binding discoveries. It leverages NVIDIA’s AI infrastructure to derive protein structures, molecular formulas, CRISPR sequences, and SMILES data efficiently. The platform also features a built-in messenger system that enables seamless communication and collaboration among researchers worldwide — fostering teamwork, data exchange, and real-time scientific discussion.',
  
}
export default function Home() {
   
  return (
    <>
      
        <DefaultLayout>
          <App metadata={metadata} />
        </DefaultLayout>
      
    </>
  );
}
