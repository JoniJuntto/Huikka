export default [
  {
    id: '0',
    title: 'Kuoleman huikat',
    description:
      'Kuoleman huikat pelissä peli antaa satunnaisesti huikkaa, jos kieltäydyt, saat tehtävän',
    image: require('../assets/beer.png'),
    press: 'roullete',
    buttonText: 'Pelataan!',
  },
  {
    id: '1',
    title: 'HuikkaPeli',
    description:
      'Huikkapeli antaa pelaajille tehtäviä ja kysymyksiä satunnaisessa järjestyksessä',
    image: require('../assets/game.png'),
    press: 'huikka',
    buttonText: 'Huikkapeliin!',
  },
  {
    id: '2',
    title: 'Korttipeli',
    description: 'Korttipeli perinteisillä Hitler-korttipelin säännöillä.',
    image: require('../assets/card.png'),
    press: 'cardGame',
    buttonText: 'Korttipeliin!',
  },
  {
    id: '3',
    title: 'Sanaselitys',
    description: 'Selitä sanoja, joka arvaa sanan oikein, saa jakaa huikkia!',
    image: require('../assets/smile.png'),
    press: 'explain',
    buttonText: 'Peliin!',
  },
  {
    id: '4',
    title: 'Lisää uusi tehtävä',
    description: 'Tästä saat lisättyä omia tehtäviä Huikkapeliin!',
    image: require('../assets/add.png'),
    press: 'addOwnTasks',
    buttonText: 'Lisätään!',
  },
];
