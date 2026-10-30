import { repairBenefits, repairs } from '../../data/content'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import RepairCard from '../RepairCard'

export default function RepairsSection() {
  return (
    <section id="reparaciones" className="section-y bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeader
            taller
            eyebrow="Servicio técnico"
            title="Reparamos tus equipos sin complicaciones"
            text="Diagnóstico claro, repuestos de calidad y garantía en cada reparación."
          />

          <ul className="mt-8 flex flex-wrap gap-3 lg:flex-col lg:gap-4">
            {repairBenefits.map(({ icon: Icon, text, short }) => (
              <li key={text} className="flex items-center gap-3 text-sm font-semibold lg:text-base">
                <span className="icon-box size-9 bg-taller-soft text-taller lg:size-11">
                  <Icon />
                </span>
                <span className="md:hidden lg:inline">{text}</span>
                <span className="hidden md:inline lg:hidden">{short}</span>
              </li>
            ))}
          </ul>

          <Button href="#contacto" variant="taller" className="mt-8 hidden lg:inline-flex">Agendar reparación</Button>
        </div>

        <div className="space-y-4">
          {repairs.map((r) => <RepairCard key={r.title} {...r} />)}
          {/* Celular: botón fijo abajo · Tablet: ancho completo al final */}
          <Button href="#contacto" variant="taller" className="sticky bottom-4 z-10 w-full shadow-lg md:static md:shadow-none lg:hidden">
            Agendar reparación
          </Button>
        </div>
      </div>
    </section>
  )
}
