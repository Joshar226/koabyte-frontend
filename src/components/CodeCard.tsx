export default function CodeCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-night-soft p-6 font-mono text-[13px] leading-7 shadow-2xl lg:p-8 lg:text-sm">
      <div className="mb-5 flex gap-2">
        <span className="size-3 rounded-full bg-orange-400" />
        <span className="size-3 rounded-full bg-yellow-400" />
        <span className="size-3 rounded-full bg-koa" />
      </div>
      <p className="text-slate-500">{'// koabyte.app'}</p>
      <p><span className="text-purple-400">const</span> <span className="text-slate-200">proyecto</span> = <span className="text-sky-300">crear</span>({'{'}</p>
      <p className="pl-4">cliente: <span className="text-koa">"Tu negocio"</span>,</p>
      <p className="pl-4">plataformas: [<span className="text-koa">"web"</span>, <span className="text-koa">"móvil"</span>, <span className="text-koa">"desktop"</span>],</p>
      <p className="pl-4">diseño: <span className="text-koa">"a la medida"</span>,</p>
      <p className="pl-4">soporte: <span className="text-purple-400">true</span></p>
      <p>{'});'}</p>
      <p><span className="text-sky-300">lanzar</span>(proyecto); <span className="text-slate-500">{'//'} 🚀</span></p>
    </div>
  )
}
