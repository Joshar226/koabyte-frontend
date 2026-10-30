import { FiMessageCircle, FiPhone } from 'react-icons/fi'
import { contactInfo } from '../../data/content'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import ContactForm from '../ContactForm'

export default function ContactSection() {
  return (
    <section id="contacto" className="section-y bg-paper">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Hablemos"
            title="¿Tienes un proyecto o un equipo dañado?"
            text="Escríbenos y te respondemos en menos de 24 horas."
          />

          {/* Celular: accesos directos */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:hidden">
            <Button href="https://wa.me/0000000000"><FiMessageCircle className="mr-2" />WhatsApp</Button>
            <Button href="tel:+0000000000" variant="light"><FiPhone className="mr-2" />Llamar</Button>
          </div>

          <div className="mt-4 grid gap-3 md:mt-8 md:grid-cols-3 lg:grid-cols-1">
            {contactInfo.map(({ label, value, icon: Icon, href, mobileHidden }) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Tag key={label} href={href}
                  className={`items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 ${mobileHidden ? 'hidden md:flex' : 'flex'}`}>
                  <span className="icon-box size-11 bg-emerald-50 text-koa-dark"><Icon /></span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">{label}</span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                </Tag>
              )
            })}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
