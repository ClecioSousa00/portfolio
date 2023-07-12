import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

export const Container=({children}:ContainerProps)=>{
  return(
    <div className="relative px-4 md:px-20">
      {children}
    </div>
  )
}