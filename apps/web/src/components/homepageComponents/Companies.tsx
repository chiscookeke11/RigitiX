import { growingCompanyData } from "../../data/GrowingCompaniesData";


export default function Companies() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-8 bg-white py-12 my-14  " >
            <h5 className="text-[#737373] font-medium text-base " >Join 4,000+ companies already growing</h5>

            <div className="w-[90%] grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center justify-between justify-items-center gap-10  " >
                {growingCompanyData.map((data, i) => (
                    <div key={i} title={data.name} className="w-full h-full flex items-center justify-center" >
                        <img src={data.image} alt={`${data.name}-logo`} />
                    </div>
                ))}
            </div>

        </section>
    )
}