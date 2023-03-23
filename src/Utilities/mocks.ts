import carrot from "src/assets/Photos/carrot.png";
import carrotLarge from "src/assets/Photos/carrotLarge.png";
import grapefruit from "src/assets/Photos/grapefruit.png";
import grapefruitLarge from "src/assets/Photos/grapefruitLarge.png";

export const MOBILE_AND_ONLINE_DIETS = [
  {
    src: carrot,
    srcLarge: carrotLarge,
    alt: "carrot",
    text: "DIETETYK MOBILNY",
  },
  {
    src: grapefruit,
    srcLarge: grapefruitLarge,
    alt: "grapefruit",
    text: "DIETETYK ONLINE",
  },
];

type OfferDataProps = {
  title: string;
  price: string;
  listText?: string[];
  extraText?: string[];
}[];

export const OFFER_DATA: OfferDataProps = [
  {
    title: "PIERWSZA KONSULTACJA DIETETYCZNA",
    price: "120 ZŁ",
    listText: [
      "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
      "Omówienie wyników badań",
      "Wstępna diagnoza i omówienie problemu",
      "Wyznaczenie celu i kierunku dalszej współpracy",
      "Wsparcie i motywację",
    ],
  },
  {
    title: "DRUGA KONSULTACJA DIETETYCZNA",
    price: "150 ZŁ",
    listText: [
      "Omówienie przygotowanego planu żywieniowego wraz z listą zakupów",
      "Edukacja żywieniowa",
    ],
  },
  {
    title: "KONSULTACJA KONTROLNA",
    price: "80 ZŁ",
    listText: [
      "Analiza postępów dietoterapii",
      "Przy wystąpieniu trudności, omówienie ich i zaproponowanie rozwiązania",
      "Kontynuacja edukacji żywieniowej",
    ],
  },
  {
    title: "Konsultacja kontrolna z nowym planem żywieniowym",
    price: "150 ZŁ",
  },
  {
    title: "Dodatkowy indywidualny jadłospis 7-dniowy",
    price: "150 ZŁ",
  },
  {
    title: "Dodatkowy indywidualny jadłospis 14-dniowy",
    price: "250 ZŁ",
  },
  {
    title: "Jadłospis niestandardowy - w przypadku wielu wykluczeń i alergii",
    price: "199 ZŁ",
  },
  {
    title: "Edukacja żywieniowa - pomoc w zmianie nawyków żywieniowych",
    price: "100 ZŁ",
  },
  {
    title: "Dojazd do domu/w wyznaczone miejsce",
    price: "DO 15 KM. GRATIS",
  },
];

export const BODY_COMPOSITION_ANALYZER = [
  "masa ciała",
  "masa tkanki tłuszczowej",
  "poziom tłuszczu trzewnego",
  "masa mięśni szkieletowych",
  "całkowita zawartość wody w organizmie",
  "podstawowa przemiana materii",
  "BMI",
];

export const PREPARATION_FOR_MEDICAL_EXAMINATION = [
  "Zachowaj 3 godzinną przerwę między ostatnim posiłkiem a badaniem",
  "Dobę przed badaniem nie pij alkoholu",
  "12 godzin przed badaniem nie wykonuj intensywnych ćwiczeń",
  "Ok. 30 minut przed badaniem skorzystaj z toalety",
  "Przed badaniem zdejmij wszystkie metalowe przedmioty",
  "Dłonie i stopy nie powinny być natłuszczone kremem lub balsamem",
];

export const PACKAGES = [
  {
    title: "NA DOBRY POCZĄTEK",
    additionalTitle: ["1 miesiąc wsparcia", "299 zł / miesiąc"],
    paragraphs: [
      "Pakiet idealny dla osób rozpoczynających przygodę z dietetykiem.",
      "Obejmuje pierwszą konsultację, konsultację z omówieniem planu żywieniowego oraz konsultację kontrolną.",
    ],
    list: [
      "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
      "Omówienie wyników badań",
      "Analiza składu ciała lub dodatkowy dzień jadłospisu",
      "Wstępna diagnoza i omówienie problemu",
      "Wyznaczenie celu i kierunku dalszej współpracy",
      "Indywidualny, elastyczny jadłospis 7 dniowy",
      "Lista zakupów",
      "Regularny kontakt i wsparcie dietetyka",
    ],
  },
  {
    title: "ZMIANA NA DOBRE",
    additionalTitle: ["3 miesiące wsparcia", "216 zł / miesiąc"],
    extraTitle: "897 zł 648 zł łącznie",
    paragraphs: [
      "Pakiet idealny dla osób chcących realizować swoje większe cele dietetyczne.",
      "Obejmuje pierwszą konsultację, 3 konsultacje z omówieniem nowego planu żywieniowego oraz 3 konsultacje kontrolne.",
    ],
    list: [
      "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
      "Omówienie wyników badań",
      "Analiza składu ciała lub dodatkowy dzień jadłospisu",
      "Wstępna diagnoza i omówienie problemu",
      "Wyznaczenie celu i kierunku dalszej współpracy",
      "Indywidualny, elastyczny jadłospis 7 dniowy, na każdy nowy miesiąc",
      "Lista zakupów",
      "Utrwalenie nowych nawyków żywieniowych w formie zadań kontrolnych",
      "Regularny kontakt i wsparcie dietetyka",
    ],
  },
  {
    title: "TOTALNA METAMORFOZA",
    additionalTitle: ["6 miesięcy wsparcia", "199 zł / miesiąc"],
    extraTitle: "1794 zł 1194 zł łącznie",
    paragraphs: [
      "Pakiet idealny dla osób, które chcą osiągać więcej.",
      "Obejmuje pierwszą konsultację, 6 konsultacji z omówieniem nowego planu żywieniowego oraz 6 konsultacji kontrolnych.",
    ],
    list: [
      "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
      "Omówienie wyników badań",
      "Analiza składu ciała lub dodatkowy dzień jadłospisu",
      "Wstępna diagnoza i omówienie problemu",
      "Wyznaczenie celu i kierunku dalszej współpracy",
      "Indywidualny, elastyczny jadłospis 7 dniowy, na każdy nowy miesiąc",
      "Lista zakupów",
      "Utrwalenie nowych nawyków żywieniowych w formie zadań kontrolnych",
      "Regularny kontakt i wsparcie dietetyka",
    ],
  },
];
