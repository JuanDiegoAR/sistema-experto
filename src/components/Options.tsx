import { OptionCard } from "@/components/OptionCard";

interface Props {
  phase: string;
  selected: string;
  updateSelected: (newSelected: string) => void;
}

export function Options({ phase, updateSelected, selected }: Props) {
  return phase === "celulas" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="UNICELULAR"
        description="Son organismos compuestos por una sola célula que realiza todas las funciones vitales"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="MULTICELULAR"
        description="Son organismos formados por múltiples células que se especializan en diferentes funciones"
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "tejidos" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="SIN TEJIDOS VERDADEROS"
        description="Las celulas funcionan de forma más independiente y no forman estructuras definidas"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="CON TEJIDOS VERDADEROS"
        description="Las células formas estructuras definidas para realizar funciones complejas"
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "simetria" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="RADIAL"
        description="Cualquier corte longitudinal a lo largo del eje central produce mitades similares"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="BILATERAL"
        description="El cuerpo se divide en mitades izquierda y derecha por un único plano de simetría"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="RADIAL SECUNDARIA"
        description="En su etapa larval, muestra simetría bilateral, pero desarrolla simetría radial en su etapa adulta"
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "celoma" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="NULO"
        description="No tienen una cavidad corporal. Sus órganos están situados directamente en el tejido sin una cavidad separada"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="PARCIAL"
        title="PARCIAL"
        description="Poseen una cavidad corporal, llamada pseudoceloma, que no está completamente revestida por el mesodermo"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="COMPLETO"
        description="Tienen un celoma verdadero, una cavidad corporal completamente revestida por mesodermo en ambos lados"
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "acelomados" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="COMPLETO"
        description="Tiene una apertura en la boca para entrada de alimentos y otra en el ano para salida de desechos."
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="INCOMPLETO"
        description="Tiene una única abertura que sirve tanto para la entrada de alimentos como para la expulsión de los desechos."
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "pseudocelomados" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="EXISTENTE"
        description="Consiste en un conjunto de órganos que permiten la ingestión, digestión, absorción y excreción de alimentos."
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="CARENTE"
        description="Algunos organismos no tienen un sistema digestivo. Absorben nutrientes directamente a través de sus paredes celulares."
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "celomados" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="HENDIDURAS"
        description="El mesodermo se desplaza y se separa en bloques que eventualmente se ahuecan para formar el celoma."
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="EVAGINACIONES"
        description="El mesodermo forma sacos del intestino embrionario que se expanden y desprenden para formar el celoma."
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "hendiduras" ? (
    <div className="flex flex-wrap justify-center gap-16">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="MANTO Y CONCHA"
        description="El manto es una capa de tejido que secreta la concha en moluscos"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="HIDROESQUELETO"
        description="Se basa en la presión del líquido dentro de una cavidad cerrada para mantener la forma y facilitar el movimiento"
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="EXOESQUELETO"
        description="Un revestimiento externo rígido que protege y soporta el cuerpo"
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : phase === "radiados" ? (
    <div className="grid grid-cols-optionsContentGrid justify-items-center justify-center">
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Unicelula"
        title="COMPLETO"
        description="Tiene una apertura en la boca para entrada de alimentos y otra en el ano para salida de desechos."
        updateSelected={updateSelected}
        selected={selected}
      />
      <OptionCard
        option=""
        image="/logo-udo.webp"
        imageAlt="Multicelula"
        title="INCOMPLETO"
        description="Tiene una única abertura que sirve tanto para la entrada de alimentos como para la expulsión de los desechos."
        updateSelected={updateSelected}
        selected={selected}
      />
    </div>
  ) : (
    <p></p>
  );
}
