import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type LinkGenericProps = {
  children: ReactNode
  target?: string
} & LinkProps



export const LinkGeneric=({target,children, ...rest}:LinkGenericProps)=>{
  return(
    <div className="relative  md:w-44 group">
      <div className="absolute -inset-0.5 rounded-lg blur opacity-50 bg-border-gradient group-hover:opacity-100 transition-all"></div>
      <Link
        className="relative flex bg-primary rounded items-center justify-center gap-2 px-8 py-3 text-sm md:px-2 md:text-base 
          font-medium transition-all group-hover:text-secondaryLigth"
        target={target}
        {...rest}
      >
        {children}
      </Link>
    </div>
  )
}