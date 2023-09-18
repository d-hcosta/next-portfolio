export function Skills({ name, icon }: SkillsProps) {
  const IconComponent = icon

  return (
    <div
      title={name}
      className="flex h-20 w-24 items-center justify-center rounded-lg bg-[#232323] text-textGreen hover:text-textGreen/80"
    >
      <IconComponent className="h-14 w-14" />
    </div>
  )
}
