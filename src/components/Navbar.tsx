import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import Button from './ui/Button'
import Logo from './ui/Logo'
import MobileMenu from './MobileMenu'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-night/85 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between lg:h-[88px]">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-[15px] transition hover:text-white ${active === l.id ? 'text-white' : 'text-slate-400'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contacto" className="hidden !py-3 md:inline-flex">Cotizar proyecto</Button>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="grid size-11 place-items-center rounded-xl border border-white/15 text-xl text-white lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <MobileMenu open={open} active={active} onClose={() => setOpen(false)} />
    </header>
  )
}
