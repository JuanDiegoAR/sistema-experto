import { useEffect, useState } from "react";
import { Options } from "@/components/Options";
import { Result } from "./Result";
import { phases } from "@/utils/phases";
import { OptionsFooter } from "./OptionsFooter";

export function Content() {
  const [selected, setSelected] = useState("none");
  const [phase, setPhase] = useState("none");
  const result = phase.toLocaleUpperCase();

  useEffect(() => {
    console.log(selected);
    console.log(phase);
  }, [selected]);

  useEffect(() => {
    setSelected("none");
  }, [phase]);

  const handleClickNone = () => {
    setPhase("celulas");
  };

  const finded = phases.find((t) => phase === t.title);

  return phase === "none" ? (
    <section className="flex flex-col w-[70%] min-h-[466px] rounded-[45px] shadow-stable mb-[40px] py-8">
      <button
        className="m-auto w-80 h-16 rounded-2xl text-2xl font-semibold shadow-stable hover:shadow-emphasis hover:scale-110 transition duration-700 max-[600px]:w-40 max-[600px]:text-lg"
        onClick={handleClickNone}
      >
        ¡EMPECEMOS!
      </button>
    </section>
  ) : finded ? (
    <section className="flex flex-col w-[70%] min-h-[465px] rounded-[45px] shadow-stable mb-[40px] py-5 px-10">
      <h2 className="flex self-center font-bold text-xl text-pretty mb-2">
        {finded?.question}
      </h2>
      <p className="flex self-center text-sm text-pretty max-[890px]:mb-8">
        {finded?.questionDescription}
      </p>
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <OptionsFooter selected={selected} phase={phase} setPhase={setPhase} />
    </section>
  ) : (
    <Result phylum={result} />
  );
}
