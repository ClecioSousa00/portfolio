import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type LinkGenericProps = {
  children: ReactNode
} & LinkProps

export const LinkGeneric = ({ children, ...rest }: LinkGenericProps) => {
  return (
    <div className="group  relative md:w-44">
      <div className="absolute -inset-0.5 rounded-lg bg-border-gradient opacity-50 blur transition-all group-hover:opacity-100"></div>
      <Link
        className="relative flex items-center justify-center gap-2 rounded bg-primary px-8 py-3 text-sm font-medium transition-all 
          group-hover:text-secondaryLigth md:px-2 md:text-base"
        target="_blank"
        {...rest}
      >
        {children}
        Visualizar
      </Link>
    </div>
  )
}
