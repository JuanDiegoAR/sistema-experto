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
    <footer className="flex flex-row gap-16 items-center justify-center max-[890px]:mt-8 max-[560px]:flex-col max-[560px]:gap-5 ">
      <button
        className="flex justify-center items-center w-[225px] h-[40px] text-lg font-medium shadow-stable rounded-[12.5px] opacity-85 max-[560px]:w-[200px]"
        onClick={handleClickBack}
      >
        ATRÁS
      </button>
      <button
        className={
          selected === "none"
            ? "flex justify-center items-center w-[225px] h-[40px] text-lg font-medium shadow-stable rounded-[12.5px] text-gray-400 max-[560px]:w-[200px]"
            : "flex justify-center items-center w-[225px] h-[40px] text-lg font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition max-[560px]:w-[200px]"
        }
        onClick={handleClickNext}
        disabled={selected === "none" ? true : false}
      >
        SIGUIENTE
      </button>
    </footer>
  );
}
