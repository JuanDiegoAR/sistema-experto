import { useEffect, useState } from "react";
import { Options } from "@/components/Options";
import { Result } from "./Result";

export function Content() {
  const [selected, setSelected] = useState("none");
  const [phase, setPhase] = useState("none");

  useEffect(() => {
    console.log(selected);
    console.log(phase);
  }, [selected]);

  useEffect(() => {}, [phase]);

  const handleClickNone = () => {
    setPhase("celulas");
  };

  const handleClickCelulaUnicelular = () => {
    setPhase("protozoario");
  };

  const handleClickCelulaMulticelular = () => {
    setPhase("tejidos");
  };

  const handleClickTejidoNoVerdadero = () => {
    setPhase("porifero");
  };

  const handleClickTejidoVerdadero = () => {
    setPhase("simetria");
  };
  const handleClickRadial = () => {
    setPhase("radiados");
  };
  const handleClickBilateral = () => {
    setPhase("celoma");
  };
  const handleClickSecundaria = () => {
    setPhase("equinodermos");
  };
  const handleClickCelomaNulo = () => {
    setPhase("acelomados");
  };
  const handleClickCelomaParcial = () => {
    setPhase("pseudocelomados");
  };
  const handleClickCelomaCompleto = () => {
    setPhase("celomados");
  };
  const handleClickCuerpo = () => {
    setPhase("hendiduras");
  };
  const handleClickSDCompleto = () => {
    setPhase("nemertinos");
  };
  const handleClickSDIncompleto = () => {
    setPhase("platelmintos");
  };
  const handleClickSDExistente = () => {
    setPhase("acantocefalos");
  };
  const handleClickSDCarente = () => {
    setPhase("asquelmintos");
  };
  const handleClickCordados = () => {
    setPhase("cordados");
  };
  const handleClickMoluscos = () => {
    setPhase("moluscos");
  };
  const handleClickAnelidos = () => {
    setPhase("anelidos");
  };
  const handleClickArtropodos = () => {
    setPhase("artropodos");
  };
  const handleClickCnidario = () => {
    setPhase("artropodos");
  };
  const handleClickCtenoforo = () => {
    setPhase("artropodos");
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "UNICELULAR"
              ? handleClickCelulaUnicelular
              : handleClickCelulaMulticelular
          }
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : phase === "protozoario" ? (
    <Result phylum="PROTOZOARIO" />
  ) : phase === "porifero" ? (
    <Result phylum="PORIFERO" />
  ) : phase === "nemertinos" ? (
    <Result phylum="NEMERTINO" />
  ) : phase === "platelmintos" ? (
    <Result phylum="PLATELMINTO" />
  ) : phase === "asquelmintos" ? (
    <Result phylum="ASQUELMINTO" />
  ) : phase === "acantocefalos" ? (
    <Result phylum="ACANTOCEFALO" />
  ) : phase === "moluscos" ? (
    <Result phylum="MOLUSCO" />
  ) : phase === "anelidos" ? (
    <Result phylum="ANELIDO" />
  ) : phase === "artropodo" ? (
    <Result phylum="ARTROPODO" />
  ) : phase === "equinodermos" ? (
    <Result phylum="EQUINODERMO" />
  ) : phase === "cordados" ? (
    <Result phylum="CORDADOS" />
  ) : phase === "cnidarios" ? (
    <Result phylum="CNIDARIOS" />
  ) : phase === "ctenaforos" ? (
    <Result phylum="CTENOFOROS" />
  ) : phase === "tejidos" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué nivel de organización tisular posee el organismo?
      </h2>
      <p className="flex self-center text-lg">
        La organización tisular se refiere a la manera en la cual las células se
        agrupan para formar tejidos en organismos multicelulares
      </p>
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "CON TEJIDOS VERDADEROS"
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "RADIAL"
              ? handleClickRadial
              : selected === "BILATERAL"
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "COMPLETO"
              ? handleClickCelomaCompleto
              : selected === "PARCIAL"
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "COMPLETO"
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "EXISTENTE"
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "HENDIDURAS" ? handleClickCuerpo : handleClickCordados
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "MANTO Y CONCHA"
              ? handleClickMoluscos
              : selected === "HIDROSQUELETO"
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
      <Options phase={phase} updateSelected={setSelected} />
      <footer className="flex flex-row gap-20 justify-center w-full">
        <button className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]">
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "COMPLETO" ? handleClickCnidario : handleClickCtenoforo
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
