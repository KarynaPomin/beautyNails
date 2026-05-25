import { useEffect, useState } from "react";

function PriceListPage() {
  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    fetch("/json/priceList.json")
      .then((res) => res.json())
      .then((data) => setPriceList(Object.entries(data)));
  }, []);

  return (
    <main className="flex flex-col items-center gap-10 p-6 mt-[7%]">
      {priceList.map(([category, services], index) => (
        <div
          id={`priceList-${index}`}
          key={index}
          className="w-[75%] max-w-[900px] rounded-xl overflow-hidden mb-[5%]"
        >
          <div className="w-full rounded-xl h-14 flex justify-center items-center bg-gradient-to-r from-[#B8B8FF] to-[#9381FF]">
            <h2 className="text-white text-lg font-bold uppercase tracking-wide">
              {category}
            </h2>
          </div>

          <div> 
            {services.map((service, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 p-4 hover:bg-[#b8b8ffa9] transition"
              >
                <div className="min-w-4/5 w-11/12">
                  <p className="font-medium text-gray-800">{service.name}</p>
                </div>

                <div className="text-right font-semibold text-gray-900">
                  <p>{service.price}</p>
                </div>

                <div className="min-w-2xs w-11/12">
                  {service.details && (
                    <p className="text-sm text-gray-500 italic">
                      {service.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}

export default PriceListPage;
