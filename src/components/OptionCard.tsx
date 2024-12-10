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
    <article
      className={
        selected === title
          ? "flex flex-col w-[270px] h-[290px] items-center p-5 gap-4 rounded-2xl shadow-emphasis my-10 select-none cursor-pointer duration-500 transition"
          : "flex flex-col w-[270px] h-[290px] items-center p-5 gap-4 rounded-2xl shadow-stable my-10 select-none cursor-pointer"
      }
      onClick={handleClick}
    >
      <img src={image} alt={imageAlt} className="h-[100px]" />
      <h1 className="font-semibold text-xl text-center">{title}</h1>
      <p className="text-left text-pretty">{description}</p>
    </article>
  );
}
