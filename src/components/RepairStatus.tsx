export default function RepairStatus() {
  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-xl md:w-72">
      <p className="text-xs text-slate-500">Reparación en curso</p>
      <p className="mt-1 text-sm font-bold text-night">Laptop · Cambio de pantalla</p>
      <div className="mt-3 h-2 rounded-full bg-slate-100">
        <div className="h-full w-4/5 rounded-full bg-koa" />
      </div>
    </div>
  )
}
