export function updateAnimalCategories(animalsCategories) {
  return {
    type: '@animal/UPDATE_CATEGORIES_ANIMALS',
    payload: {animalsCategories},
  };
}
