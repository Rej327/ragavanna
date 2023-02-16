type heroDataProps = {
  name: string;
  email: string;
  number: string;
};

export const heroData: heroDataProps[] = [
  {
    name: "FirstName LastName",
    email: "sample@gmail.com",
    number: "(+63)-950-243-3069",
  },

  {
    name: "FirstName LastName",
    email: "sample@gmail.com",
    number: "(+63)-950-243-3069",
  },
];

type latestEventProps = {
  image: any;
  event: string;
  date: string;
  btntxt: string;
};

export const latestEvent: latestEventProps[] = [
  {
    image: "sample.png",
    event: "Vatos Locos and Friends Friday 5.26",
    date: "January 01, 2023",
    btntxt: "MORE",
  },

  {
    image: "sample.png",
    event: "Sample Category",
    date: "Random Date",
    btntxt: "MORE",
  },
];
