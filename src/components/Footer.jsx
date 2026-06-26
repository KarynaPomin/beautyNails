import bg_footer from "/uploads/bg_footer.png"
import instagram_icon from "/src/assets/icons/instagram.png";
import facebook_icon from "/src/assets/icons/facebook.png";
import tik_tok_icon from "/src/assets/icons/tik-tok.png";

function Footer() {
    return (
        <footer className="relative w-full min-h-[30vh] md:h-[50vh] mt-[10vh] flex items-center justify-center text-indigo-950 overflow-hidden">
            <img 
                src={bg_footer} 
                alt="background" 
                className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
            />

            <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="font-bold text-lg">KONTAKT</h3>
                    <h3 className="font-bold text-lg mt-1">MEDUZA OLENA POMIN</h3>
                    <p className="mt-2">ul. Twoja Ulica 1</p>
                    <p>62-300 Września</p>
                    <p>tel. +48 123 456 789</p>
                </div>

                <div className="
                    flex gap-6 
                    sm:relative sm:bottom-auto sm:right-auto sm:mt-6 
                    md:absolute md:bottom-20 md:right-20
                ">
                    <a href="https://www.instagram.com" target="blank" className="hover:scale-110 transition">
                        <img src={instagram_icon} alt="instagram" className="w-7 h-7" />
                    </a>
                    <a href="https://www.facebook.com" target="blank" className="hover:scale-110 transition">
                        <img src={facebook_icon} alt="facebook" className="w-7 h-7" />
                    </a>
                    <a href="https://www.tiktok.com" target="blank" className="hover:scale-110 transition">
                        <img src={tik_tok_icon} alt="tik-tok" className="w-7 h-7" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
