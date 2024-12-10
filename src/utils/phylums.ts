import { images } from "./images";

export const phylums = [
  {
    id: 0,
    title: "PROTOZOARIO",
    image: "/PROTOZOARIO.png",
    tags: ["UNICELULAR"],
    description: [
      "El phylum Protozoario incluye organismos unicelulares eucariotas que se encuentran en ambientes acuáticos y húmedos. Estos organismos son extremadamente diversos y pueden vivir de forma libre o como parásitos.",
      "Tienen diversas formas de locomoción, como flagelos, cilios y seudópodos. Los protozoarios son importantes tanto ecológicamente, como en el ciclo de nutrientes, como médicamente, dado que algunos pueden causar enfermedades como la malaria y la enfermedad del sueño. Su diversidad y adaptabilidad son notables.",
    ],
  },
  {
    id: 1,
    title: "PORIFERO",
    image: "/PORIFERO.png",
    tags: ["MULTICELULAR", "PARAZOARIOS"],
    description: [
      "El phylum Porífero incluye a las esponjas, organismos multicelulares que viven principalmente en ambientes acuáticos, tanto marinos como de agua dulce. Son sencillos y carecen de tejidos verdaderos y órganos.",
      "Su cuerpo está formado por poros, canales y cámaras que permiten la circulación del agua, facilitando la alimentación por filtración.",
      "Las esponjas tienen una gran capacidad de regeneración y desempeñan un papel importante en el ecosistema acuático al filtrar grandes cantidades de agua, contribuyendo a la limpieza y el equilibrio del medio ambiente.",
    ],
  },
  {
    id: 2,
    title: "NEMERTINO",
    image: "/NEMERTINO.png",
    tags: ["MULTICELULAR", "EUMETAZOARIO", "BILATERIO", "ACELOMADO"],
    description: [
      "El phylum Nemertino incluye gusanos conocidos como nemertinos o gusanos cinta. Son organismos acuáticos, mayormente marinos, caracterizados por su cuerpo alargado, aplanado y sin segmentación.",
      "Poseen un sistema digestivo completo y un probóscide eversible que usan para capturar presas. ",
      "Son importantes en la cadena alimentaria marina y exhiben gran diversidad de formas y tamaños, adaptados a diferentes hábitats acuáticos.",
    ],
  },
  {
    id: 3,
    title: "PLATELMINTO",
    image: "/PLATELMINTO.png",
    tags: ["MULTICELULAR", "EUMETAZOARIO", "BILATERIO", "ACELOMADO"],
    description: [
      "El phylum Platelminto incluye gusanos planos, como las planarias, trematodos y tenias. Son organismos invertebrados de cuerpo aplanado dorsoventralmente y sin segmentación.",
      "Muchos tienen un sistema digestivo incompleto y carecen de sistema circulatorio y respiratorio, lo que los obliga a depender de la difusión a través de su cuerpo. Pueden ser de vida libre o parásitos, afectando a una amplia variedad de huéspedes.",
      "Algunos platelmintos, como las tenias, son conocidos por causar enfermedades en humanos y otros animales.",
    ],
  },
  {
    id: 4,
    title: "ASQUELMINTO",
    image: "/ASQUELMINTO.png",
    tags: ["MULTICELULAR", "EUMETAZOARIO", "BILATERIO", "PESUDOCELOMADO"],
    description: [
      "El phylum Asquelminto, también conocidos como nemátodos, incluye gusanos redondos y cilíndricos que pueden vivir en hábitats acuáticos, terrestres o como parásitos en plantas y animales.",
      "Tienen un cuerpo alargado y no segmentado, con un sistema digestivo completo y una cutícula externa resistente. Su reproducción es generalmente sexual, y muchos nemátodos son importantes en la agricultura, ya sea como plagas o como organismos beneficiosos para el control biológico de otras plagas.",
      "Su adaptabilidad y diversidad son notables.",
    ],
  },
  {
    id: 5,
    title: "ACANTOCEFALO",
    image: "/ACANTOCEFALO.png",
    tags: ["MULTICELULAR", "EUMETAZOARIO", "BILATERIO", "PESUDOCELOMADO"],
    description: [
      "El phylum Acantocéfalo agrupa a gusanos parásitos conocidos por sus ganchos en la probóscide, que utilizan para fijarse a las paredes intestinales de sus huéspedes.",
      "Son organismos con un ciclo de vida complejo, que incluye etapas en diferentes hospederos. Carecen de un sistema digestivo propio y absorben nutrientes directamente a través de su tegumento.",
      "Estos parásitos pueden infestar a una variedad de animales, incluidos peces, aves y mamíferos. Su adaptación a la vida parasitaria es altamente especializada y eficiente.",
    ],
  },
  {
    id: 6,
    title: "MOLUSCO",
    image: "/MOLUSCO.png",
    tags: [
      "MULTICELULAR",
      "EUMETAZOARIO",
      "BILATERIO",
      "CELOMADO",
      "ESQUIZOCELOMADO",
    ],
    description: [
      "El phylum Molusco incluye una gran diversidad de organismos invertebrados, como caracoles, almejas, y pulpos. Se caracterizan por tener un cuerpo blando, generalmente protegido por una concha calcárea.",
      "Su cuerpo típicamente está dividido en tres partes: la cabeza, una masa visceral que contiene los órganos internos y un pie muscular. Muchos poseen una estructura llamada rádula para alimentarse.",
      "Los moluscos ocupan una amplia variedad de hábitats, desde ambientes marinos hasta terrestres, y son vitales en sus ecosistemas.",
    ],
  },
  {
    id: 7,
    title: "ANELIDO",
    image: "/ANELIDO.png",
    tags: [
      "MULTICELULAR",
      "EUMETAZOARIO",
      "BILATERIO",
      "CELOMADO",
      "ESQUIZOCELOMADO",
    ],
    description: [
      "El phylum Anélido incluye gusanos segmentados como las lombrices de tierra, sanguijuelas y poliquetos. Estos organismos tienen un cuerpo dividido en segmentos repetitivos, cada uno con estructuras internas similares.",
      "Poseen un sistema digestivo completo y un sistema circulatorio cerrado. Los anélidos habitan en diversos entornos, desde suelos y aguas dulces hasta océanos.",
      "Su segmentación permite una mayor flexibilidad y movilidad, además de la capacidad de regenerar partes del cuerpo. Desempeñan roles importantes en la aeración del suelo y en cadenas alimentarias.",
    ],
  },
  {
    id: 8,
    title: "ARTROPODO",
    image: "/ARTROPODO.png",
    tags: [
      "MULTICELULAR",
      "EUMETAZOARIO",
      "BILATERIO",
      "CELOMADO",
      "ESQUIZOCELOMADO",
    ],
    description: [
      "El phylum Artrópodo es el grupo más diverso y abundante del reino animal, incluyendo insectos, arácnidos, crustáceos y miriápodos.",
      "Sus características clave incluyen un exoesqueleto de quitina, un cuerpo segmentado y apéndices articulados.",
      "Los artrópodos habitan casi todos los ambientes terrestres y acuáticos y desempeñan roles cruciales en los ecosistemas, como polinizadores, descomponedores y como parte fundamental de las cadenas alimentarias.",
    ],
  },
  {
    id: 9,
    title: "EQUINODERMO",
    image: "/EQUINODERMO.png",
    tags: [
      "MULTICELULAR",
      "EUMETAZOARIO",
      "R. SECUNDARIA",
      "CELOMADO",
      "ENTEROCELOMADO",
    ],
    description: [
      "El phylum Equinodermo incluye organismos marinos como estrellas de mar, erizos de mar y pepinos de mar. Se caracterizan por su simetría radial (generalmente pentarradial) y un esqueleto interno formado por placas calcáreas.",
      "Tienen un sistema vascular acuífero que utilizan para la locomoción, alimentación y respiración. Los equinodermos desempeñan roles cruciales en sus ecosistemas, como depredadores, herbívoros y detritívoros.",
    ],
  },
  {
    id: 10,
    title: "CORDADO",
    image: "/CORDADO.png",
    tags: [
      "MULTICELULAR",
      "EUMETAZOARIO",
      "BILATERIO",
      "CELOMADO",
      "ENTEROCELOMADO",
    ],
    description: [
      "El phylum Cordado incluye a todos los animales que, en alguna etapa de su desarrollo, poseen una notocorda, un tubo neural dorsal hueco, hendiduras faríngeas y una cola postanal.",
      "Estos elementos son fundamentales para su clasificación y pueden aparecer en distintas etapas del ciclo vital de los organismos. Los cordados son un grupo extremadamente diverso que abarca desde pequeños invertebrados acuáticos, como las ascidias, hasta grandes mamíferos terrestres, incluidos los seres humanos.",
      "Esta diversidad muestra su adaptabilidad a diversos hábitats",
    ],
  },
  {
    id: 11,
    title: "CNIDARIO",
    image: "/CNIDARIO.png",
    tags: ["MULTICELULAR", "EUMETAZOARIO", "RADIADO"],
    description: [
      "El phylum Cnidario agrupa organismos acuáticos como medusas, corales y anémonas. Se caracterizan por poseer cnidocitos, células especializadas con nematocistos para capturar presas y defenderse.",
      "Presentan simetría radial y su cuerpo tiene dos capas celulares: ectodermo y endodermo, con una mesoglea gelatinosa en medio. Pueden existir en formas polipoides o medusoides.",
      "Los cnidarios juegan un papel esencial en los ecosistemas marinos, formando estructuras como los arrecifes de coral.",
    ],
  },
  {
    id: 12,
    title: "CTENOFORO",
    image: "/CTENOFORO.png",
    tags: ["MULTICELULAR", "EUMETAZOARIO", "RADIADO"],
    description: [
      "El phylum Ctenóforo incluye organismos marinos conocidos como medusas peine. Se caracterizan por tener ocho filas de cilios en forma de peines que utilizan para la locomoción.",
      "Su cuerpo es gelatinoso y transparente, y suelen tener bioluminiscencia. A diferencia de los cnidarios, no poseen cnidocitos, sino coloblastos para capturar presas.",
      "Los ctenóforos juegan un papel importante en las cadenas alimentarias marinas, siendo tanto depredadores como presas. Su belleza y bioluminiscencia hacen de ellos un grupo fascinante y esencial en los ecosistemas oceánicos.",
    ],
  },
];
