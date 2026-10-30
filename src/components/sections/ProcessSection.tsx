import { steps } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import StepCard from '../StepCard'

export default function ProcessSection() {
  return (
    <section id="proceso" className="section-y bg-night">
      <div className="container-page">
        <SectionHeader
          dark
          eyebrow="Cómo trabajamos"
          title="De la idea al lanzamiento en 4 pasos"
          text="Un proceso transparente: siempre sabrás en qué etapa está tu proyecto."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 md:gap-x-5 md:gap-y-8 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StepCard key={s.title} index={i} isLast={i === steps.length - 1} {...s} />
          ))}
        </ol>
      </div>
    </section>
  )
}
