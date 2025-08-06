import doughSizes  from '@/common/data/doughSizes';
import ingredients from '@/common/data/ingredients';
import sauces      from '@/common/data/sauces';
import sizes       from '@/common/data/sizes';

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
