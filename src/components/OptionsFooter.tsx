import { oneHandleClickNext, oneHandleClickBack } from "@/utils/OnehandleClick";

export interface props {
  selected: string;
  phase: string;
  setPhase: (newPhase: string) => void;
}

export function OptionsFooter({ selected, phase, setPhase }: props) {
  const handleClickNext = () => {
    oneHandleClickNext({ selected, phase, setPhase });
  };

  const handleClickBack = () => {
    oneHandleClickBack({ phase, setPhase });
  };

  return (
    <footer className="flex flex-row gap-[102px] justify-center w-full">
      <button
        className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
        onClick={handleClickBack}
      >
        ATRÁS
      </button>
      <button
        className={
          selected === "none"
            ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
            : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
        }
        onClick={handleClickNext}
        disabled={selected === "none" ? true : false}
      >
        SIGUIENTE
      </button>
    </footer>
  );
}
