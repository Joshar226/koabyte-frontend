import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FiX } from 'react-icons/fi'
import { navLinks } from '../data/content'
import Button from './ui/Button'
import Logo from './ui/Logo'

interface Props { open: boolean; active: string; onClose: () => void }

export default function MobileMenu({ open, active, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-night lg:hidden"
        >
          <div className="container-page flex h-[72px] items-center justify-between border-b border-white/10">
            <Logo />
            <button aria-label="Cerrar menú" onClick={onClose}
              className="grid size-11 place-items-center rounded-xl bg-night-soft text-xl text-white">
              <FiX />
            </button>
          </div>

          <nav className="container-page flex-1 pt-6">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={onClose}
                className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-bold">
                <span className={active === l.id ? 'text-koa' : 'text-white'}>{l.label}</span>
                <span className={`text-xs font-medium ${l.taller ? 'text-taller' : 'text-slate-500'}`}>
                  <span className="md:hidden">{l.num}</span>
                  <span className="hidden md:inline">{l.hint || l.num}</span>
                </span>
              </a>
            ))}
          </nav>

          <div className="container-page flex flex-col gap-3 pb-8">
            <Button href="#contacto" onClick={onClose} className="!py-4 !text-lg">Cotizar proyecto</Button>
            <Button href="#contacto" variant="ghost" onClick={onClose} className="!py-4 !text-lg">Reparar mi equipo</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
