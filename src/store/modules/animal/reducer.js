import produce from 'immer';
import {categories} from '../../../mocks';

const INITIAL_STATE = {
  animalsCategory: categories,
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
