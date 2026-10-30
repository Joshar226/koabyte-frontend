import type { ReactNode } from 'react'

type Variant = 'koa' | 'taller' | 'ghost' | 'light'

interface Props {
  children: ReactNode
  variant?: Variant
  href?: string
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export default function Button({ children, variant = 'koa', href, type = 'button', className = '', onClick }: Props) {
  const cls = `btn btn-${variant} ${className}`
  return href ? (
    <a href={href} className={cls} onClick={onClick}>{children}</a>
  ) : (
    <button type={type} className={cls} onClick={onClick}>{children}</button>
  )
}
