import { ButtonHTMLAttributes } from 'react'

type ToogleMenuProps = {
  menuIsOpen: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ToogleMenu = ({ menuIsOpen, ...rest }: ToogleMenuProps) => {
  return (
    <button
      {...rest}
      className=" z-10 flex cursor-pointer flex-col gap-1 md:hidden "
    >
      <span
        className={`h-[2px] w-7 rounded bg-white transition-all ${
          menuIsOpen && 'translate-y-[6px] -rotate-45 transform'
        }`}
      ></span>
      <span
        className={`h-[2px] w-7 rounded bg-white transition-all ${
          menuIsOpen && 'w-0 opacity-0'
        }`}
      ></span>
      <span
        className={`h-[2px] w-3 rounded bg-white transition-all ${
          menuIsOpen && 'w-[28px] -translate-y-[5px]  rotate-45 transform'
        }`}
      ></span>
    </button>
  )
}
