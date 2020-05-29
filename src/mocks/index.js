import dog1 from '../assets/images/dog1.jpeg';
import dog2 from '../assets/images/dog2.jpeg';
import dog3 from '../assets/images/dog3.jpeg';
import dog4 from '../assets/images/dog4.jpeg';
import dog5 from '../assets/images/dog5.jpeg';
import dog6 from '../assets/images/dog6.jpeg';
import dog7 from '../assets/images/dog7.jpeg';
import dog8 from '../assets/images/dog8.jpeg';
import dog9 from '../assets/images/dog9.jpeg';

import cat1 from '../assets/images/cat1.jpeg';
import cat2 from '../assets/images/cat2.jpeg';
import cat3 from '../assets/images/cat3.jpeg';
import cat4 from '../assets/images/cat4.jpeg';
import cat5 from '../assets/images/cat5.jpeg';
import cat6 from '../assets/images/cat6.jpeg';

import bird1 from '../assets/images/bird1.jpeg';
import bird2 from '../assets/images/bird2.jpeg';

import rep1 from '../assets/images/rep1.jpeg';
import rep2 from '../assets/images/rep2.jpeg';
import rep3 from '../assets/images/rep3.jpeg';

import listChat1 from '../assets/images/listChat1.jpeg';
import listChat2 from '../assets/images/listChat2.jpeg';
import listChat3 from '../assets/images/listChat3.jpeg';
import listChat4 from '../assets/images/listChat4.jpeg';
import listChat5 from '../assets/images/listChat5.jpeg';
import listChat6 from '../assets/images/listChat6.jpeg';
import listChat7 from '../assets/images/listChat7.jpeg';

import ong1 from '../assets/images/ong1.jpeg';
import ong2 from '../assets/images/ong2.jpeg';
import ong3 from '../assets/images/ong3.jpeg';
import ong4 from '../assets/images/ong4.jpg';
import ong5 from '../assets/images/ong5.jpeg';

import allAnimals from '../assets/images/all.png';
import dog from '../assets/images/dog.png';
import cat from '../assets/images/cat.png';
import bird from '../assets/images/bird.png';
import allDisable from '../assets/images/allDisable.png';
import dogDisable from '../assets/images/dogDisable.png';
import catDisable from '../assets/images/catDisable.png';
import birdDisable from '../assets/images/birdDisable.png';

export const dogs = [
  {id: 1, name: 'Ted', years: '2 Anos', photo: dog1},
  {id: 2, name: 'Joe', years: '6 Meses', photo: dog2},
  {id: 3, name: 'Lupo', years: '1 Anos', photo: dog3},
  {id: 4, name: 'Marvin', years: '3 Anos', photo: dog4},
  {id: 5, name: 'Luca', years: '1 Anos', photo: dog5},
  {id: 6, name: 'Moon', years: '1 Anos', photo: dog6},
  {id: 7, name: 'Jack', years: '3 Anos', photo: dog7},
  {id: 8, name: 'Marin', years: '2 Anos', photo: dog8},
  {id: 9, name: 'Maria', years: '2 Anos', photo: dog9},
];

export const cats = [
  {id: 1, name: 'Canicceasi', years: '6 Meses', photo: cat1},
  {id: 2, name: 'Spissaaks', years: '1 Anos', photo: cat2},
  {id: 3, name: 'Ticeemeo', years: '3 Anos', photo: cat3},
  {id: 4, name: 'Sarorb', years: '1 Anos', photo: cat4},
  {id: 5, name: 'Alpodo', years: '1 Anos', photo: cat5},
  {id: 6, name: 'Doksi', years: '3 Anos', photo: cat6},
];

export const birds = [
  {id: 1, name: 'Qeaksel', years: '1 Anos', photo: bird1},
  {id: 2, name: 'Monerine', years: '2 Anos', photo: bird2},
];

export const reptiles = [
  {id: 1, name: 'Paplaak', years: '6 Meses', photo: rep1},
  {id: 2, name: 'Chickeeslilu', years: '1 Anos', photo: rep2},
  {id: 3, name: 'Spigsocs', years: '3 Anos', photo: rep3},
];

export const all = [
  {id: 1, name: 'Joe', years: '6 Meses', photo: dog2},
  {id: 2, name: 'Lupo', years: '1 Anos', photo: dog3},
  {id: 3, name: 'Spigsocs', years: '3 Anos', photo: rep3},
  {id: 4, name: 'Marvin', years: '3 Anos', photo: dog4},
  {id: 5, name: 'Sarorb', years: '1 Anos', photo: cat4},
  {id: 6, name: 'Alpodo', years: '1 Anos', photo: cat5},
  {id: 7, name: 'Luca', years: '1 Anos', photo: dog5},
  {id: 8, name: 'Moon', years: '1 Anos', photo: dog6},
  {id: 9, name: 'Jack', years: '3 Anos', photo: dog7},
  {id: 10, name: 'Qeaksel', years: '1 Anos', photo: bird1},
  {id: 11, name: 'Marin', years: '2 Anos', photo: dog8},
  {id: 12, name: 'Maria', years: '2 Anos', photo: dog9},
  {id: 13, name: 'Canicceasi', years: '6 Meses', photo: cat1},
  {id: 14, name: 'Spissaaks', years: '1 Anos', photo: cat2},
  {id: 15, name: 'Ticeemeo', years: '3 Anos', photo: cat3},
  {id: 16, name: 'Doksi', years: '3 Anos', photo: cat6},
  {id: 17, name: 'Monerine', years: '2 Anos', photo: bird2},
  {id: 18, name: 'Paplaak', years: '6 Meses', photo: rep1},
  {id: 19, name: 'Chickeeslilu', years: '1 Anos', photo: rep2},
  {id: 20, name: 'Ted', years: '2 Anos', photo: dog1},
];

export const categories = [
  {
    id: 1,
    name: 'Todos',
    image: allAnimals,
    imageDisable: allDisable,
    isSelected: true,
  },
  {
    id: 2,
    name: 'Cachorros',
    image: dog,
    imageDisable: dogDisable,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Gatos',
    image: cat,
    imageDisable: catDisable,
    isSelected: false,
  },
  {
    id: 4,
    name: 'Pássaros',
    image: bird,
    imageDisable: birdDisable,
    isSelected: false,
  },
];

export const listChat = [
  {
    id: 1,
    name: 'Angie',
    lastMessage: 'Sim, as 09:00 pm',
    image: listChat1,
    time: '11:12 PM',
    counterMessage: 2,
  },
  {
    id: 2,
    name: 'Donella M.',
    lastMessage: 'Vamos combinar, depois as 18 horas eu estou livre',
    image: listChat2,
    time: '09:00 PM',
    counterMessage: 11,
  },
  {
    id: 3,
    name: 'Nikolia',
    lastMessage: 'Boa Noite!',
    image: listChat3,
    time: '07:12 PM',
  },
  {
    id: 4,
    name: 'Justyne',
    lastMessage: 'Qual a idade do Tyson ?',
    image: listChat4,
    time: '06:10 PM',
  },
  {
    id: 5,
    name: 'Maurisa',
    lastMessage: 'Olá, tudo bem ?',
    image: listChat5,
    time: '06:00 PM',
  },
  {
    id: 6,
    name: 'Norman',
    lastMessage: 'Tenho um dog para doaçaão',
    image: listChat6,
    time: '05:23 PM',
  },
  {
    id: 7,
    name: 'Yaroslava',
    lastMessage: 'Até depois',
    image: listChat7,
    time: '05:33 PM',
  },
];

export const listONGs = [
  {
    id: 1,
    name: 'Nosso Pet',
    open: '8:00 - 20:00',
    image: ong1,
    address: 'Av. América, 552',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amigo Bixo',
    open: '7:30 - 18:00',
    image: ong2,
    address: 'Av. América, 552',
    rating: 4,
  },
  {
    id: 3,
    name: 'ONG ajuda bixo',
    open: '8:00 - 20:00',
    image: ong3,
    address: 'Av. América, 552',
    rating: 4,
  },
  {
    id: 4,
    name: 'Dog & Cat ONG',
    open: '10:00 - 20:00',
    image: ong4,
    address: 'Av. América, 552',
    rating: 2,
  },
  {
    id: 5,
    name: 'Santo Animal',
    open: '8:00 - 20:00',
    image: ong5,
    address: 'Av. América, 552',
    rating: 1,
  },
];
