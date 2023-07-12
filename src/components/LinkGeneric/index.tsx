import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type LinkGenericProps = {
  children: ReactNode
  target?: string
} & LinkProps

export const LinkGeneric=({target,children, ...rest}:LinkGenericProps)=>{
  return(
    <Link 
    className="flex items-center gap-4 border-2 px-8 py-3 text-sm md:text-base font-semibold rounded"
    target={target}
    {...rest}
    >
      {children}
    </Link>
  )
}