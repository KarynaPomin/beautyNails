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
          <div className="w-full rounded-xl h-14 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
            <h2 className="text-white text-lg font-bold uppercase tracking-wide">
              {category}
            </h2>
          </div>

          <div> 
            {services.map((service, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-300 transition"
              >

                <div>
                  <p className="font-medium text-gray-800">{service.name}</p>
                  {service.details && (
                    <p className="text-sm text-gray-500 italic">
                      {service.details}
                    </p>
                  )}
                </div>

                <div className="text-right font-semibold text-gray-900">
                  <p>{service.price}</p>
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
