import type { IconType } from 'react-icons'

interface Props { title: string; text: string; tags: string[]; icon: IconType }

function Tags({ tags, className }: { tags: string[]; className: string }) {
  return (
    <div className={`flex-wrap gap-2 ${className}`}>
      {tags.map((t) => <span key={t} className="chip chip-taller">{t}</span>)}
    </div>
  )
}

export default function RepairCard({ title, text, tags, icon: Icon }: Props) {
  return (
    <article className="rounded-3xl bg-taller-soft p-4 md:p-6 lg:p-7">
      <div className="flex items-center gap-4 lg:gap-6">
        <span className="icon-box size-14 bg-white text-2xl text-sky-500 shadow-sm lg:size-24 lg:text-5xl">
          <Icon />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold lg:text-xl">{title}</h3>
          {/* Celular: precio bajo el título */}
          <p className="text-xs text-slate-500 md:hidden">Desde <b className="text-night">$ —</b></p>
          {/* Tablet/desktop: descripción + chips junto al icono */}
          <p className="mt-1 hidden text-sm text-slate-500 md:block">{text}</p>
          <Tags tags={tags} className="mt-3 hidden md:flex" />
        </div>

        <div className="hidden text-right md:block">
          <p className="text-xs text-slate-500">Desde</p>
          <p className="font-display text-xl font-bold">$ —</p>
        </div>
      </div>

      {/* Celular: descripción y chips debajo */}
      <p className="mt-4 text-sm text-slate-500 md:hidden">{text}</p>
      <Tags tags={tags} className="mt-3 flex md:hidden" />
    </article>
  )
}
