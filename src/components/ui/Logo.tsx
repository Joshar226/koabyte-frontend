interface Props { onlyText?: boolean }

export default function Logo({ onlyText = false }: Props) {
  return (
    <a href="#inicio" className="flex items-center gap-3 font-display text-xl font-bold text-white">
      {!onlyText && (
        <span className="grid size-10 place-items-center rounded-xl bg-koa text-base text-night">K</span>
      )}
      <span>
        Koa<span className="ml-0.5 text-koa">Byte</span>
      </span>
    </a>
  )
}
