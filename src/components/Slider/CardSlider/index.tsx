type CardSliderProps = {
  name: string
  icon: React.ComponentType
}

export const CardSlider = ({ icon: Icon, name }: CardSliderProps) => {
  return (
    <div
      className="flex h-[258px] w-[200px] flex-col items-center justify-center gap-2
        rounded-md border-2 border-blueLinear border-opacity-10 bg-primary hover:border-opacity-30  hover:bg-primaryDark md:h-[318px] md:w-[248px]"
    >
      <Icon />
      <p>{name}</p>
    </div>
  )
}
