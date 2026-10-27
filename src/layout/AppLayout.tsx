import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <img
        src="logo.webp"
        srcSet="logo.webp 1x, logo@2x.webp 2x"
        alt="KoaByte logo"
        className="py-3.5 pl-10 w-25 h-25
          
          
          md:w-37.5 md:h-37.5
        "
      />


      <Outlet/>

      <footer 
        className="border-t-3 border-t-[#181818]
          mt-10 py-3
          md:py-5
        "
      >
        <div className="flex
          flex-col items-center gap-4
          md:gap-6
          lg:grid lg:grid-cols-3 place-items-center
        ">
          <Link to={'/'}> 
            <img
              src="logo.webp"
              srcSet="logo.webp 1x, logo@2x.webp 2x"
              alt=" KoaByte logo"
              className=" w-28.5 h-25
                max-w-20 max-h-17
                md:max-w-25 md:max-h-22
                xl:max-w-28.5 xl:max-h-25
                
              "
            />
          </Link>

          <div className="flex
            gap-5
            md:gap-10

            *:hover:scale-125 *:duration-300
          ">
            <a
              href="https://www.facebook.com/profile.php?id=61578946692939"
              target="_blank"
              className="
                  w-8 
                  md:w-10
              "
            >
              <FaFacebookF className="w-full h-full" />
            </a>

            <a
              href="https://www.instagram.com/nucleostudiocr"
              target="_blank"
              className="
                  w-8 
                  md:w-10
                
              "
            >
              <FaInstagram className="w-full h-full" />
            </a>
          </div>
          
          <div
            className="flex items-center
              flex-col gap-2 mt-2.5
              lg:flex-row lg:gap-7
            "  
          >
            <Link to={'about'}>Sobre Nosotros</Link> 
            <Link to={'privacy-policy'}>Politica de Privacidad</Link> 
          </div>
        </div>
        
        <p className="text-center mt-5 text-sm">&#169; {new Date().getFullYear()} KoaByte. Todos los derechos reservados.</p>
      </footer>


      <a
        href="https://wa.me/50662830706"
        target="_blank"
        className="fixed bottom-5 right-5 
          transition-transform hover:scale-110 duration-300 active:scale-110
        "
      >
        <img
          src="whatsapp.webp"
          srcSet="whatsapp.webp 1x, whatsapp@2x.webp 2x"
          alt="Whatsapp"
          className="bg-[#343434] rounded-full
            w-12 h-12
            md:w-14 md:h-14
          "
        />
      </a>
    </div>
  );
}
