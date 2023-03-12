type heroDataProps = {
  name: string;
  email: string;
  number: string;
};

export const heroData: heroDataProps[] = [
  {
    name: "Gerard Vincent Lorca",
    email: "gerardvincentlorca@gmail.com",
    number: "(+63)-961-502-9597",
  },

  {
    name: "Mae Angelou Holgado",
    email: "sample@gmail.com",
    number: "(+63)-999-999-9999",
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
