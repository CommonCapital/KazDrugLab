import ComponentHeader from "@/component/Header/ComponentHeader"
import DefaultLayout from "@/component/Layout/DefaultLayout"
import MoleculeBankTable from "@/component/MoleculeBank/MoleculeBankTable"

const Page = () => {
    return (
        <DefaultLayout>
            <ComponentHeader pageName="Molecule Bank" />
            <div className="flex flex-col gap-10">
                <MoleculeBankTable />
            </div>
        </DefaultLayout>
    )
}

export default Page