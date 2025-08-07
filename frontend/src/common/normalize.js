import doughSizes  from '@/common/enums/doughSizes.js';
import ingredients from '@/common/enums/ingredients.js';
import sauces      from '@/common/enums/sauces.js';
import sizes       from '@/common/enums/sizes.js';

const normalize = (data, item) => {
    return {
        ...item,
        value: data[item.id]
    };
};

export const normalizeDough = (dough) => {
    return normalize(doughSizes, dough);
};

export const normalizeIngredients = (ingredient) => {
    return normalize(ingredients, ingredient);
};

export const normalizeSize = (size) => {
    return normalize(sizes, size);
};

export const normalizeSauces = (sauce) => {
    return normalize(sauces, sauce);
};
