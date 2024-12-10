import { phylums } from "@/utils/phylums";

interface props {
  phylum: string;
}

export function Result({ phylum }: props) {
  const finded = phylums.find((element) => element.title === phylum);

  const handleClickMore = () => {
    location.href = `/explore/${finded?.title}`;
  };

  const handleClickIdentify = () => {
    location.href = `/`;
  };

  return (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] p-8 items-center justify-center">
      <p className="flex self-center text-lg mb-4">
        El organismo que se identificó fue...
      </p>

      <h2 className="flex self-center font-bold text-3xl mb-8 text-[#156703] drop-shadow-md">
        {finded?.title}
      </h2>

      <div className="flex gap-4 mb-20">
        {finded?.tags.map((t) => (
          <p className="rounded-[45px] w-[175px] text-center py-2 bg-[#156703] text-white font-bold select-none">
            {t}
          </p>
        ))}
      </div>

      <footer className="flex flex-row items-center gap-5 justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] hover:bg-[#156703] hover:text-white duration-500 transition"
          onClick={handleClickMore}
        >
          Saber más
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] hover:bg-[#156703] hover:text-white duration-500 transition"
          onClick={handleClickIdentify}
        >
          Volver a identificar
        </button>
      </footer>
    </section>
  );
}
