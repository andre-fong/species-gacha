export interface Species {
  id: number;
  name: string;
  scientificName: string;
  status: "vulnerable" | "endangered" | "extinct";
  location: string;
  description: string;
  link: string;
}

/**
 * Species data
 */
const species: Species[] = [
  {
    id: 1,
    name: "Amur Leopard",
    scientificName: "Panthera pardus orientalis",
    status: "endangered",
    location: "Russia",
    description:
      "The Amur leopard is a leopard subspecies native to the Primorye region of southeastern Russia and northern China. It is listed as Critically Endangered on the IUCN Red List. In 2007, only 19–26 wild Amur leopards were estimated to survive. As of 2015, fewer than 60 individuals were estimated to survive in Russia and China.",
    link: "https://en.wikipedia.org/wiki/Amur_leopard",
  },
  {
    id: 2,
    name: "Black Rhino",
    scientificName: "Diceros bicornis",
    status: "endangered",
    location: "Africa",
    description:
      "The black rhinoceros or hook-lipped rhinoceros is a species of rhinoceros, native to eastern and southern Africa including Angola, Botswana, Kenya, Malawi, Mozambique, Namibia, South Africa, Eswatini, Tanzania, Zambia, and Zimbabwe. Although the rhinoceros is referred to as black, its colors vary from brown to grey.",
    link: "https://en.wikipedia.org/wiki/Black_rhinoceros",
  },
  {
    id: 3,
    name: "Bornean Orangutan",
    scientificName: "Pongo pygmaeus",
    status: "endangered",
    location: "Borneo",
    description:
      "The Bornean orangutan is a species of orangutan native to the island of Borneo. Together with the Sumatran orangutan and Tapanuli orangutan, it belongs to the only genus of great apes native to Asia. Like the other great apes, orangutans are highly intelligent, displaying advanced tool use and distinct cultural patterns in the wild.",
    link: "https://en.wikipedia.org/wiki/Bornean_orangutan",
  },
];

export default species;
