import { phylums } from "@/utils/phylums";
import { useState } from "react";

interface props {
  phylum: string;
}

interface response {
  accuracyPercentage: number;
  prediction: string;
}

export function Result({ phylum }: props) {
  const [identified, setIdentified] = useState<number>(0);

  const consultIA = async (answers: number[]) => {
    const body = JSON.stringify({ answers: answers });
    try {
      console.log(body);
      const result = await fetch(
        "https://phylum-recognition-api.onrender.com/phylum",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: body,
        }
      );
      const data: response = await result.json();
      const accuracyPercentage = data.accuracyPercentage * 100;
      setIdentified(accuracyPercentage);

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const finded = phylums.find((element) => element.title === phylum);
  const list = finded?.answers;

  list ? consultIA(list) : 0;

  const handleClickMore = () => {
    location.href = `/explore/${finded?.title}`;
  };

  const handleClickIdentify = () => {
    location.href = `/`;
  };

  return (
    <section className="flex flex-col w-[70%] min-h-[466px] rounded-[45px] shadow-stable mb-[40px] py-8 items-center justify-center">
      <p className="flex self-center text-lg mb-4 px-8">
        El organismo que se identificó fue...
      </p>

      <h2 className="flex self-center font-bold text-3xl text-[#156703] drop-shadow-md">
        {finded?.title}
      </h2>

      <p className="flex self-center text-xs mb-16 px-8">
        (Y la lógica lo confirma al
        <span className=" text-[#156703] ml-1">
          {identified != 0 ? `${identified} %` : "cargando..."}
        </span>
        )
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {finded?.tags.map((t) => (
          <p className="rounded-[45px] w-[175px] text-center py-2 bg-[#156703] text-white font-bold select-none">
            {t}
          </p>
        ))}
      </div>

      <footer className="flex flex-wrap items-center gap-5 justify-center w-full p-8">
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
