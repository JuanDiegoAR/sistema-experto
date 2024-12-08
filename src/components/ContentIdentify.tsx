import { useEffect, useState } from "react";
import { Options } from "@/components/Options";

export function Content() {
  const [selected, setSelected] = useState("none");
  const [phase, setPhase] = useState("none");

  useEffect(() => {}, [phase]);

  const handleClickNone = () => {
    setPhase("celulas");
    setSelected("none");
  };

  const handleClickCelulaUnicelular = () => {
    setPhase("protozoario");
    setSelected("none");
  };

  const handleClickCelulaMulticelular = () => {
    setPhase("tejidos");
    setSelected("none");
  };

  const handleClickTejidoNoVerdadero = () => {
    setPhase("porifero");
    setSelected("none");
  };

  const handleClickTejidoVerdadero = () => {
    setPhase("simetria");
    setSelected("none");
  };
  const handleClickRadial = () => {
    setPhase("radiados");
    setSelected("none");
  };
  const handleClickBilateral = () => {
    setPhase("celoma");
    setSelected("none");
  };
  const handleClickSecundaria = () => {
    setPhase("equinodermos");
    setSelected("none");
  };
  const handleClickCelomaNulo = () => {
    setPhase("acelomados");
    setSelected("none");
  };
  const handleClickCelomaParcial = () => {
    setPhase("pseudocelomados");
    setSelected("none");
  };
  const handleClickCelomaCompleto = () => {
    setPhase("celomados");
    setSelected("none");
  };
  const handleClickCuerpo = () => {
    setPhase("hendiduras");
    setSelected("none");
  };
  const handleClickSDCompleto = () => {
    setPhase("nemertinos");
    setSelected("none");
  };
  const handleClickSDIncompleto = () => {
    setPhase("platelmintos");
    setSelected("none");
  };
  const handleClickSDExistente = () => {
    setPhase("acantocefalos");
    setSelected("none");
  };
  const handleClickSDCarente = () => {
    setPhase("asquelmintos");
    setSelected("none");
  };
  const handleClickCordados = () => {
    setPhase("cordados");
    setSelected("none");
  };
  const handleClickMoluscos = () => {
    setPhase("moluscos");
    setSelected("none");
  };
  const handleClickAnelidos = () => {
    setPhase("anelidos");
    setSelected("none");
  };
  const handleClickArtropodos = () => {
    setPhase("artropodos");
    setSelected("none");
  };
  const handleClickCnidario = () => {
    setPhase("artropodos");
    setSelected("none");
  };
  const handleClickCtenoforo = () => {
    setPhase("artropodos");
    setSelected("none");
  };

  return phase === "none" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <button
        className="m-auto w-80 h-16 rounded-2xl text-2xl font-semibold shadow-stable hover:shadow-emphasis hover:scale-110  transition duration-700"
        onClick={handleClickNone}
      >
        ¡EMPECEMOS!
      </button>
    </section>
  ) : phase === "celulas" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué nivel de organización celular posee el organismo?
      </h2>
      <p className="flex self-center text-lg">
        El nivel de organización celular se refiere a la complejidad de los
        organismos en relación con sus células
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "unicelular"
              ? handleClickCelulaUnicelular
              : handleClickCelulaMulticelular
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "tejidos" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué nivel de organización tisular posee el organismo?
      </h2>
      <p className="flex self-center text-lg">
        La organización tisular se refiere a la manera en la cual las células se
        agrupan para formar tejidos en organismos multicelulares
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "verdaderos"
              ? handleClickTejidoVerdadero
              : handleClickTejidoNoVerdadero
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "simetria" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué tipo de simetría posee el organismo?
      </h2>
      <p className="flex self-center text-lg">
        La simetría de un organismo se refiere a cómo las partes de su cuerpo
        están organizadas en relación con un eje o plano central
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "radial"
              ? handleClickRadial
              : selected === "bilateral"
              ? handleClickBilateral
              : handleClickSecundaria
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "celoma" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué tipo de revestimiento posee el organismo?
      </h2>
      <p className="flex self-center text-lg text-pretty">
        El celoma es una cavidad corporal llena de líquido, completamente
        revestida por tejido derivado del mesodermo
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "celomado"
              ? handleClickCelomaCompleto
              : selected === "pseudocelomado"
              ? handleClickCelomaParcial
              : handleClickCelomaNulo
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "acelomados" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué tipo de sistema digestivo posee el organismo?
      </h2>
      <p className="flex self-center text-lg text-pretty">
        El sistema digestivo es el conjunto de órganos encargados de procesar
        los alimentos para extraer y absorber los nutrientes necesarios para el
        cuerpo
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "completo"
              ? handleClickSDCompleto
              : handleClickSDIncompleto
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "pseudocelomados" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué tipo de sistema digestivo posee el organismo?
      </h2>
      <p className="flex self-center text-lg text-pretty">
        El sistema digestivo es el conjunto de órganos encargados de procesar
        los alimentos para extraer y absorber los nutrientes necesarios para el
        cuerpo
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "existente"
              ? handleClickSDExistente
              : handleClickSDCarente
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "celomados" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Mediante qué se forma el celoma en el organismo?
      </h2>
      <p className="flex self-center text-lg text-pretty">
        El celoma es una cavidad corporal llena de líquido completamente
        revestida por tejido mesodérmico
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "hendidura" ? handleClickCuerpo : handleClickCordados
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "hendiduras" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué tipo de cuerpo posee el organismo?
      </h2>
      <p className="flex self-center text-lg text-pretty">
        El cuerpo de un organismo puede tener diversas estructuras para soporte
        y protección
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "manto"
              ? handleClickMoluscos
              : selected === "hidrostatico"
              ? handleClickAnelidos
              : handleClickArtropodos
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "radiados" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3 mx-5 text-center">
        ¿Qué tipo de sistema digestivo posee el organismo?
      </h2>
      <p className="flex self-center text-lg text-pretty mx-10">
        El sistema digestivo es el conjunto de órganos encargados de procesar
        los alimentos para extraer y absorber los nutrientes necesarios para el
        cuerpo
      </p>
      <Options phase={phase} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "completo" ? handleClickCnidario : handleClickCtenoforo
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : (
    <p></p>
  );
}
