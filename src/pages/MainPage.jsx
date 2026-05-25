import { Link } from "react-router-dom";
import jellyfish_icon from "/src/assets/logo/meduza_white.png";
import manicure_icon from "/src/assets/icons/manicure.png";
import pedicure_icon from "/src/assets/icons/pedicure.png";
import gift_card_icon from "/src/assets/icons/gift-card.png";
import logo from "../assets/logo/Logo.png";
import UseSelectedPhoto from "../hooks/UseSelectedPhoto";
import { useEffect, useState } from "react";

function MainPage() {
    const [galleryPhotos, setGalleryPhotos] = useState([]);
    const { selectedPhoto, openPhoto, closePhoto } = UseSelectedPhoto();

    useEffect(() => {
        fetch("/json/gallery.json")
        .then((res) => res.json())
        .then((data) => {
            const shuffled = data.sort(() => 0.5 - Math.random());
            const randomThree = shuffled.slice(0, 3);
            setGalleryPhotos(randomThree);
        });
    }, [])

    return (
        <main className="border-1 border-[#c0d0dd00]">
            <div className="h-300px flex flex-wrap justify-center text-center gap-5 mt-[5%] mb-[5%]">
                <Link to="/price-list#priceList-0" className="main-service-icon">
                        <div className="icon-main-jellyfish">
                            <img src={jellyfish_icon} alt="meduza" className="jellyfish_icon" />
                            <img src={manicure_icon} alt="manicure icon" className="service_icon" />
                        </div>
                        <h2>Manicure</h2>
                </Link>

                <Link to="/price-list#priceList-1" className="main-service-icon">
                        <div className="icon-main-jellyfish">
                            <img src={jellyfish_icon} alt="meduza" className="jellyfish_icon" />
                            <img src={pedicure_icon} alt="manicure icon" className="service_icon" />
                        </div>
                        <h2>Pedicure</h2>
                </Link>
                

                <Link to="/price-list#priceList-2" className="main-service-icon">
                    <div className="icon-main-jellyfish">
                        <img src={jellyfish_icon} alt="meduza" className="jellyfish_icon" />
                        <img src={gift_card_icon} alt="manicure icon" className="service_icon" />
                    </div>
                    <h2>Karty Podarunkowe</h2>
                </Link>
            </div>

            <div className="text-black bg-[#b8b8ff57] flex flex-wrap justify-around mt-[5%] mb-[5%] p-[2%]">
                <div className="bg-[#fafafa98] w-full h-full min-w-[200px] min-h-[200px] max-w-[550px] max-h-[550px]  rounded-full flex justify-center items-center shadow-md">
                    <img src={logo} alt="logo" height="100px" />
                </div>

                <div className="pt-[5%] text-center p-15">
                    <h1 className="mt-10 mb-10">O Salonie</h1>
                    <p>Tworzymy piękne paznokcie z dbałością o każdy szczegół. Pracujemy spokojnie, w przyjaznej atmosferze, używając sprawdzonych produktów i technik. U nas liczy się jakość, precyzja i Twój komfort.</p>
                </div>
            </div>

            <div className="mt-[5%] mb-[5%] flex flex-col justify-center items-center">
                <h1 className="text-black text-center" id="div-gallery">Galeria</h1>

                <div
                    className="block-gallery-images"
                >
                    {galleryPhotos.map((photo, index) => (
                        <img
                            src={`gallery/${photo}`}
                            alt="manicure"
                            className="w-full h-full object-cover"
                            onClick={() => openPhoto(`gallery/${photo}`)}
                        />
                    ))}
                </div>

                {selectedPhoto && (
                    <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
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

                <Link to="/gallery" className="btn-primary">
                    <button>Zobacz całą galerię</button>
                </Link>
            </div>
        </main>
    )
}

export default MainPage;