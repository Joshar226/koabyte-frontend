import Logo from './ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-night py-8">
      <div className="container-page flex flex-col items-center gap-3 text-center text-sm text-slate-400 lg:flex-row lg:justify-between lg:text-left">
        <Logo onlyText />
        <p>Desarrollo · Reparaciones · Soporte</p>
        <p>© {new Date().getFullYear()} KoaByte. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
