
type CardSliderProps ={
  name:string
  icon: React.ComponentType
}

export const CardSlider=({icon:Icon,name}:CardSliderProps)=>{
  return(
    <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[258px]
        md:w-[248px] md:h-[318px] rounded-md border-2 border-[#6518b4] border-opacity-10 bg-primary hover:border-none hover:bg-[#292929]">
      <Icon />
      <p>{name}</p>
    </div>
  )
}