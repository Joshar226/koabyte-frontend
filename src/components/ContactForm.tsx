import { useState, type FormEvent } from 'react'
import { projectTypes } from '../data/content'
import Button from './ui/Button'

export default function ContactForm() {
  const [type, setType] = useState(projectTypes[0])
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = { ...Object.fromEntries(new FormData(form)), type }
    console.log(data) // TODO: enviar a tu backend, Formspree, EmailJS, etc.
    setSent(true)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold">Cuéntanos qué necesitas</h3>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input name="nombre" required placeholder="Nombre" className="field" />
        <input name="telefono" type="tel" placeholder="Teléfono" className="field" />
      </div>
      <input name="correo" type="email" required placeholder="Correo electrónico" className="field mt-4" />

      <div className="mt-4 flex flex-wrap gap-2">
        {projectTypes.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
              type === t ? 'border-night bg-night text-white' : 'border-slate-200 text-slate-600 hover:border-slate-400'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <textarea name="mensaje" rows={4} required placeholder="Describe tu proyecto o el problema de tu equipo" className="field mt-4 resize-none" />

      <Button type="submit" className="mt-6 w-full !py-4">Enviar mensaje</Button>
      {sent && <p className="mt-3 text-center text-sm text-koa-dark">¡Mensaje enviado! Te responderemos pronto.</p>}
    </form>
  )
}
