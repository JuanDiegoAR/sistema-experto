import { phylums } from "@/utils/phylums";

interface props {
  phylum: string;
}

export function Result({ phylum }: props) {
  const finded = phylums.find((element) => element.title === phylum);

  return (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <p className="flex self-center text-lg">
        El organismo que se identificó fue...
      </p>
      <h2 className="flex self-center font-bold text-3xl mb-3">
        {finded?.title}
      </h2>
      {finded?.description.map((p) => (
        <p className="text-xl text-left text-pretty">{p}</p>
      ))}
      <footer className="flex flex-row gap-20 justify-center w-full"></footer>
    </section>
  );
}
