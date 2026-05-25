import { useEffect, useState } from "react";
import UseSelectedPhoto from "../hooks/UseSelectedPhoto";

function GalleryPage() {
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const { selectedPhoto, openPhoto, closePhoto } = UseSelectedPhoto();

  useEffect(() => {
    fetch("/json/gallery.json")
      .then((res) => res.json())
      .then((data) => setGalleryPhotos(data));
  }, []);

  return (
    <main>
      <h1 className="text-center mt-[10%]">Galeria</h1>
      
      <div className="grid 
        grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 
        gap-[10px] md:gap-[2%]
        grid-flow-dense mt-[5%] mx-[10%] mb-[10%]"
      >
        {galleryPhotos.map((photo, index) => (
          <div
            key={index}
            className={`relative w-full h-full ${
              index === 0 || index === 11 ? "row-span-2 col-span-2" : ""
            }`}
          >
            <img
              src={`gallery/result_${photo}`}
              alt="manicure"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-[#5b768437] opacity-0 hover:opacity-100 transition"
              onClick={() => openPhoto(`gallery/result_${photo}`)}
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#262a2db3]"
          onClick={closePhoto}
        >
          <img
            src={selectedPhoto}
            alt="manicure"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default GalleryPage;
