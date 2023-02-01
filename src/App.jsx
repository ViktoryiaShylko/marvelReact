import "./App.css";
import Hero from "./components/hero";

const heroes = [
  {
    name: "Бэтмен",
    photo: "/assets/images/batman.jpeg",
    universe: "DC Comics",
    alterego: "Брюс Уэйн",
    occupation: "борец с преступностью, филантроп, миллиардер",
    friend: "Робин, Бэтгерл",
    superpower:
      "интеллект, обширные познания, знания боевых искусств, ловкость",
  },
  {
    name: "Супермен",
    photo: "/assets/images/superman.jpeg",
    universe: "DC Comics",
    alterego: "Кларк Кент",
    occupation: "борец за справедливость",
    friends: "собака Крипто",
    superpower:
      "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
  },
  {
    name: "Железный человек",
    photo: "/assets/images/ironman.jpeg",
    universe: "Marvel Comics",
    alterego: "Тони Старк",
    occupation: "гений, миллиардер, плейбой, филантроп",
    friends: "Мстители",
    superpower:
      "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  },
  {
    name: "Человек-паук",
    photo: "/assets/images/spiderman.jpeg",
    universe: "Marvel Comics",
    alterego: "Питер Паркер",
    occupation: "борец за справедливость, студент, фотограф",
    friends: " Мстители, Фантастическая четверка, Люди Икс",
    superpower:
      "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  },
  {
    name: "Капитан Америка",
    photo: "/assets/images/cap.jpeg",
    universe: "Marvel Comics",
    alterego: "Стивен Роджерс",
    occupation: "супер-солдат",
    friends: "Мстители",
    superpower:
      "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
  },
  {
    name: "Тор",
    photo: "/assets/images/tor.jpeg",
    universe: "Marvel Comics",
    alterego: "нет; полное имя — Тор Одинсон",
    occupation: "борец за справедливость, скандинавский бог",
    friends: "Мстители",
    superpower: "все, что может бог, плюс молот Мьелнир",
  },
  {
    name: "Халк",
    photo: "/assets/images/halk.jpeg",
    universe: "Marvel Comics",
    alterego: "Брюс Беннер",
    occupation: "супергерой, борец за справедливость, ученый-биохимик",
    friends: "Мстители",
    superpower: "сверхчеловеческая сила искорость, выносливость, полет",
  },
  {
    name: "Чудо-женщина",
    photo: "/assets/images/wonderwoman.jpeg",
    universe: "DC Comics",
    alterego: "Диана Принс",
    occupation: "супергероиня, секретарь-референт",
    friends: "Лига Справедливости, Бэтмен, Супермен",
    superpower: "сверхчеловеческая сила искорость, выносливость, полет",
  },
  {
    name: "Черная вдова",
    photo: "/assets/images/widow.jpeg",
    universe: "Marvel Comics",
    alterego: "Наташа Романофф",
    occupation: "супергероиня, шпионка",
    friends: "Мстители",
    superpower:
      "пик человеческого физического потенциала, замедленное старение, знание многих языков",
  },
  {
    name: "Дэдпул",
    photo: "/assets/images/deadpool.jpeg",
    universe: "Marvel Comics",
    alterego: "Уэйд Уинстон Уилсон",
    occupation: "антигерой, наемник",
    friends: " частично Мстители, Человек-паук, Росомаха",
    superpower:
      "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
  },
];

function App() {
  return (
    <div className="App">
      {heroes.map((hero) => (
        <Hero
          name={hero.name}
          userName={hero.userName}
          photo={hero.photo}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpower={hero.superpower}
          more={hero.more}
        ></Hero>
      ))}
    </div>
  );
}

export default App;
