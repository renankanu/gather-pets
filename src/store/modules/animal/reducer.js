import produce from 'immer';

import all from '../../../assets/images/all.png';
import dog from '../../../assets/images/dog.png';
import cat from '../../../assets/images/cat.png';
import bird from '../../../assets/images/bird.png';
import reptile from '../../../assets/images/reptile.png';
import allDisable from '../../../assets/images/allDisable.png';
import dogDisable from '../../../assets/images/dogDisable.png';
import catDisable from '../../../assets/images/catDisable.png';
import birdDisable from '../../../assets/images/birdDisable.png';
import reptileDisable from '../../../assets/images/reptileDisable.png';

const INITIAL_STATE = {
  animalsCategory: [
    {
      id: 1,
      name: 'All',
      image: all,
      imageDisable: allDisable,
      isSelected: true,
    },
    {
      id: 2,
      name: 'Dogs',
      image: dog,
      imageDisable: dogDisable,
      isSelected: false,
    },
    {
      id: 3,
      name: 'Cats',
      image: cat,
      imageDisable: catDisable,
      isSelected: false,
    },
    {
      id: 4,
      name: 'Birds',
      image: bird,
      imageDisable: birdDisable,
      isSelected: false,
    },
    {
      id: 5,
      name: 'Reptile',
      image: reptile,
      imageDisable: reptileDisable,
      isSelected: false,
    },
  ],
};

export default function water(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@animal/UPDATE_CATEGORIES_ANIMALS': {
        draft.animalsCategory = action.payload.animalsCategories;
        break;
      }
    }
  });
}
