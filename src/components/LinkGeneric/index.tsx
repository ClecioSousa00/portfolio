import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type LinkGenericProps = {
  children: ReactNode
  target?: string
} & LinkProps

export const LinkGeneric=({target,children, ...rest}:LinkGenericProps)=>{
  return(
    <div className="relative w-40 md:w-44 group">
      <div className="absolute -inset-0.5 rounded-lg blur opacity-50 bg-border-gradient group-hover:opacity-100 transition-all"></div>
      <Link
      className="relative flex bg-primary rounded items-center justify-center gap-4 px-1 py-3 text-sm md:text-base font-semibold transition-all group-hover:text-secondaryLigth"
      target={target}
      {...rest}
      >
        {children}
      </Link>
    </div>





    // <div className="p-1 bg-border-gradient rounded">
    //   <Link
    //   className="flex bg-primary items-center gap-4  px-8 py-3 text-sm md:text-base font-semibold "
    //   target={target}
    //   {...rest}
    //   >
    //     {children}
    //   </Link>
    // </div>
  )
}