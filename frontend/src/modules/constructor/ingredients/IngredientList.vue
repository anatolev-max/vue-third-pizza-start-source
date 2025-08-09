<template>
    <ul class="ingredients__list">
        <li
            v-for="ingredientType in ingredientItems"
            :key="ingredientType.id"
            class="ingredients__item"
        >
            <!-- TODO: refactor (duplicate-logic) -->
            <app-drag
                :transfer-data="ingredientType"
                :draggable="!(ingredients[ingredientType.value]?.count === MAX_INGREDIENT_COUNT)"
            >
                <span
                    class="filling"
                    :class="`filling--${ingredientType.value}`"
                >
                    <img
                        :src="getImage(ingredientType.image)"
                        :alt="ingredientType.name"
                        draggable="false"
                    >
                    {{ ingredientType.name }}
                </span>

                <div class="counter counter--orange ingredients__counter">
                    <button
                        class="counter__button counter__button--minus"
                        type="button"
                        :disabled="!ingredients[ingredientType.value]?.count"
                        @click="$emit('removeIngredient', ingredientType)"
                    >
                        <span class="visually-hidden">Меньше</span>
                    </button>
                    <input
                        class="counter__input"
                        type="text"
                        name="counter"
                        :value="ingredients[ingredientType.value]?.count ?? 0"
                    >
                    <!-- TODO: refactor (duplicate-logic) -->
                    <button
                        class="counter__button counter__button--plus"
                        type="button"
                        :disabled="ingredients[ingredientType.value]?.count === MAX_INGREDIENT_COUNT"
                        @click="$emit('addIngredient', ingredientType)"
                    >
                        <span class="visually-hidden">Больше</span>
                    </button>
                </div>
            </app-drag>
        </li>
    </ul>
</template>

<script setup>
import AppDrag                from '@/common/components/AppDrag.vue';
import {MAX_INGREDIENT_COUNT} from '@/common/constants.js';
import {getImage}             from '@/common/helpers.js';

// 1. props
const props = defineProps({
    ingredientItems: {
        type:     Array,
        required: true
    },
    ingredients: {
        type:     Object,
        required: true
    },
});

// 3. emits
const emits = defineEmits([
    'addIngredient',
    'removeIngredient',
]);

</script>

<style scoped lang="scss">
</style>
