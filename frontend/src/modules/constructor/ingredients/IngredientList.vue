<template>
    <ul class="ingredients__list">
        <li
            v-for="ingredientType in ingredientItems"
            :key="ingredientType.id"
            class="ingredients__item"
        >
            <span
                class="filling"
                :class="`filling--${ingredientType.value}`"
            >
                <img
                    :src="getImage(ingredientType.image)"
                    :alt="ingredientType.name"
                >
                {{ ingredientType.name }}
            </span>

            <div class="counter counter--orange ingredients__counter">
                <button
                    class="counter__button counter__button--minus"
                    type="button"
                    disabled
                >
                    <span class="visually-hidden">Меньше</span>
                </button>
                <input
                    class="counter__input"
                    type="text"
                    name="counter"
                    value="0"
                >
                <button
                    class="counter__button counter__button--plus"
                    type="button"
                >
                    <span class="visually-hidden">Больше</span>
                </button>
            </div>
        </li>
    </ul>
</template>

<script setup>
import {getImage} from '@/common/helpers.js';

// 1. props
const props = defineProps({
    ingredientItems: {
        type:     Array,
        required: true
    }
});
</script>

<style scoped lang="scss">
</style>
