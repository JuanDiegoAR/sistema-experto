export interface next {
  selected: string;
  phase: string;
  setPhase: (newPhase: string) => void;
}

export interface back {
  phase: string;
  setPhase: (newPhase: string) => void;
}

export function oneHandleClickNext({ selected, phase, setPhase }: next) {
  selected === "UNICELULAR"
    ? setPhase("protozoario")
    : selected === "MULTICELULAR"
    ? setPhase("tejidos")
    : selected === "SIN TEJIDOS VERDADEROS"
    ? setPhase("porifero")
    : selected === "CON TEJIDOS VERDADEROS"
    ? setPhase("simetria")
    : selected === "RADIAL"
    ? setPhase("radiados")
    : selected === "BILATERAL"
    ? setPhase("celoma")
    : selected === "RADIAL SECUNDARIA"
    ? setPhase("equinodermos")
    : selected === "NULO"
    ? setPhase("acelomados")
    : selected === "PARCIAL"
    ? setPhase("pseudocelomados")
    : selected === "COMPLETO" && phase === "celoma"
    ? setPhase("celomados")
    : selected === "COMPLETO" && phase === "acelomados"
    ? setPhase("nemertinos")
    : selected === "INCOMPLETO" && phase === "acelomados"
    ? setPhase("platelmintos")
    : selected === "EXISTENTE"
    ? setPhase("acantocefalos")
    : selected === "CARENTE"
    ? setPhase("asquelmintos")
    : selected === "HENDIDURAS"
    ? setPhase("hendiduras")
    : selected === "EVAGINACIONES"
    ? setPhase("cordados")
    : selected === "MANTO Y CONCHA"
    ? setPhase("moluscos")
    : selected === "HIDROESQUELETO"
    ? setPhase("anelidos")
    : selected === "EXOESQUELETO"
    ? setPhase("artropodos")
    : selected === "COMPLETO" && phase === "radiados"
    ? setPhase("cnidario")
    : selected === "INCOMPLETO" && phase === "radiados"
    ? setPhase("ctenoforo")
    : setPhase("none");
}

export function oneHandleClickBack({ phase, setPhase }: back) {
  phase === "tejidos"
    ? setPhase("celulas")
    : phase === "simetria"
    ? setPhase("tejidos")
    : phase === "celoma"
    ? setPhase("simetria")
    : phase === "acelomados"
    ? setPhase("celoma")
    : phase === "pseudocelomados"
    ? setPhase("celoma")
    : phase === "celomados"
    ? setPhase("celoma")
    : phase === "hendiduras"
    ? setPhase("celomados")
    : phase === "radiados"
    ? setPhase("simetria")
    : setPhase("none");
}
