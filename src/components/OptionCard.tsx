interface Props {
  option?: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  updateSelected: (newSelected: string) => void;
  selected: string;
}

export function OptionCard({
  image,
  imageAlt,
  title,
  description,
  updateSelected,
  selected,
}: Props) {
  const handleClick = () => {
    updateSelected(title);
  };
  return (
    <button
      className={
        selected === title
          ? "flex flex-col w-[225px] h-[250px] items-center justify-center p-3 gap-2 rounded-2xl shadow-emphasis min-[890px]:my-10 select-none cursor-pointer duration-500 transition"
          : "flex flex-col w-[225px] h-[250px] items-center justify-center p-3 gap-2 rounded-2xl shadow-stable min-[890px]:my-10 select-none cursor-pointer"
      }
      onClick={handleClick}
    >
      <img src={image} alt={imageAlt} className="h-[75px]" />
      <h1 className="font-semibold text-lg text-center">{title}</h1>
      <p className="text-left text-sm text-pretty ">{description}</p>
    </button>
  );
}
