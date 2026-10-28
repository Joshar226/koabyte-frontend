import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function HomeView() {

  
  return (
    <>
      <Helmet>
        <title>KoaByte | Desarrollo de software y soluciones tecnológicas en Costa Rica</title>
        <meta name="description" content="En KoaByte creamos el diseño y desarrollo de tu sitio web, con dominio, hosting, soporte y más. Potenciá tu negocio en línea"/>
        <link rel="canonical" href="https://www.nucleostudiocr.com/" />
      </Helmet>

      <div className="bg-primary h-screen">
        {/* HEADER */}
        <header className="flex items-center justify-around text-white">
          {/* LOGO */}
          <img src="/logo.webp" alt="KoaByte logo" srcSet="/logo.webp 1x, /logo@2x.webp 2x"/>

          {/* NAV */}
          <nav className="flex gap-15">
            <Link to={""}>Inicio</Link>
            <Link to={""}>Desarrollo</Link>
            <Link to={""}>Reparaciones</Link>
            <Link to={""}>Proceso</Link>
          </nav>

          {/* BTN */}
          <motion.div
            initial={{scale: 1}}
            whileHover={{scale: 1.2}}
            transition={{ duration: 0.25, ease: "easeInOut"}}
            
          >
          <Link to={""} className="btn-base text-primary bg-secondary font-bold">Cotizar Proyecto</Link>
          </motion.div>
        </header>
      
        {/* BODY */}
        <body>

          <section>
            <div>
              <p>Soluciones Tecnológicas</p>
              <h1>Creamos el software que impulsa tu negocio.</h1>
              <p>Desarrollamos páginas web, apps móviles y aplicaciones de escritorio a la medida. Y si tu equipo falla, reparamos tu celular, laptop o PC.</p>

              {/* BOTONES */}
              <div>
                <Link to={""}>Iniciar un proyecto</Link>
                <Link to={""}>Reparar mi equipo</Link>
              </div>

              <div>
                <div>
                  <p>Web</p>
                  <p>Sitios y tiendas</p>
                </div>

                <div>
                  <p>Móvil</p>
                  <p>iOS y Android</p>
                </div>

                <div>
                  <p>Desktop</p>
                  <p>Windows y macOS</p>
                </div>
              </div>
            </div>

            <div>
              
            </div>
          </section>

        </body>

      </div>

      
    </>
  );
}
