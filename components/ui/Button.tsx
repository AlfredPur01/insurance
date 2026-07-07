import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-sm transition-colors'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-red text-white hover:bg-brand-red-hover shadow-sm',
  outline:
    'border border-brand-red bg-transparent text-brand-red hover:bg-brand-red hover:text-white',
  ghost: 'border border-white/30 text-white hover:bg-white/10',
}

interface ButtonProps {
  href?: string
  variant?: Variant
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
}

export function Button({
  href,
  variant = 'primary',
  children,
  className,
  type = 'button',
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(classes, 'disabled:opacity-60')}
    >
      {children}
    </button>
  )
}
