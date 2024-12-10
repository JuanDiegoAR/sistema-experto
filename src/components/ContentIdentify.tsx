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

  useEffect(() => {
    setSelected("none");
  }, [phase]);

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
    setPhase("cnidarios");
  };
  const handleClickCtenoforo = () => {
    setPhase("ctenoforos");
  };

  return phase === "none" ? (
    <section className="flex flex-col w-[80%] min-h-[570px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <button
        className="m-auto w-80 h-16 rounded-2xl text-2xl font-semibold shadow-stable hover:shadow-emphasis hover:scale-110 transition duration-700"
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px]  justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl text-gray-400 font-medium shadow-stable rounded-[12.5px]"
          disabled
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "UNICELULAR"
              ? handleClickCelulaUnicelular
              : handleClickCelulaMulticelular
          }
          disabled={selected === "none" ? true : false}
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
  ) : phase === "artropodos" ? (
    <Result phylum="ARTROPODO" />
  ) : phase === "equinodermos" ? (
    <Result phylum="EQUINODERMO" />
  ) : phase === "cordados" ? (
    <Result phylum="CORDADO" />
  ) : phase === "cnidarios" ? (
    <Result phylum="CNIDARIO" />
  ) : phase === "ctenoforos" ? (
    <Result phylum="CTENOFORO" />
  ) : phase === "tejidos" ? (
    <section className="flex flex-col w-[80%] min-h-[560px] rounded-[45px] shadow-stable mb-[77px] py-8">
      <h2 className="flex self-center font-bold text-3xl mb-3">
        ¿Qué nivel de organización tisular posee el organismo?
      </h2>
      <p className="flex self-center text-lg">
        La organización tisular se refiere a la manera en la cual las células se
        agrupan para formar tejidos en organismos multicelulares
      </p>
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px]  justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickNone}
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "CON TEJIDOS VERDADEROS"
              ? handleClickTejidoVerdadero
              : handleClickTejidoNoVerdadero
          }
          disabled={selected === "none" ? true : false}
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px] justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickCelulaMulticelular}
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "RADIAL"
              ? handleClickRadial
              : selected === "BILATERAL"
              ? handleClickBilateral
              : handleClickSecundaria
          }
          disabled={selected === "none" ? true : false}
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px]  justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickTejidoVerdadero}
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "COMPLETO"
              ? handleClickCelomaCompleto
              : selected === "PARCIAL"
              ? handleClickCelomaParcial
              : handleClickCelomaNulo
          }
          disabled={selected === "none" ? true : false}
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px]  justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickBilateral}
        >
          ATRÁS
        </button>
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={
            selected === "COMPLETO"
              ? handleClickSDCompleto
              : handleClickSDIncompleto
          }
          disabled={selected === "none" ? true : false}
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px]  justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickBilateral}
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "EXISTENTE"
              ? handleClickSDExistente
              : handleClickSDCarente
          }
          disabled={selected === "none" ? true : false}
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px]  justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickBilateral}
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "HENDIDURAS" ? handleClickCuerpo : handleClickCordados
          }
          disabled={selected === "none" ? true : false}
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px]  justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickCelomaCompleto}
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-400"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "MANTO Y CONCHA"
              ? handleClickMoluscos
              : selected === "HIDROSQUELETO"
              ? handleClickAnelidos
              : handleClickArtropodos
          }
          disabled={selected === "none" ? true : false}
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
      <Options phase={phase} updateSelected={setSelected} selected={selected} />
      <footer className="flex flex-row gap-[102px] justify-center w-full">
        <button
          className="flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px]"
          onClick={handleClickTejidoVerdadero}
        >
          ATRÁS
        </button>
        <button
          className={
            selected === "none"
              ? "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] text-gray-300"
              : "flex justify-center items-center w-[250px] h-[50px] text-xl font-medium shadow-stable rounded-[12.5px] bg-text-white text-white bg-[#156703] duration-500 transition"
          }
          onClick={
            selected === "COMPLETO" ? handleClickCnidario : handleClickCtenoforo
          }
          disabled={selected === "none" ? true : false}
        >
          SIGUIENTE
        </button>
      </footer>
    </section>
  ) : (
    <p></p>
  );
}
