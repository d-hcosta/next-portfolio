export function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <h2 className="flex items-center font-titleFont text-2xl font-semibold">
      <span className="mr-2 text-base text-textGreen md:text-lg">{number}.</span>
      {title}
      <span className="bg-gray700 ml-6 hidden h-[.5px] md:inline-flex md:w-60 lgl:w-72"></span>
    </h2>
  )
}
