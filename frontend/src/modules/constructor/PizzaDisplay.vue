<template>
    <div class="content__pizza">
        <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
            >
        </label>

        <div class="content__constructor">
            <div
                class="pizza"
                :class="`pizza--foundation--${dough}-${sauce}`"
            >
                <div class="pizza__wrapper">
                    <div
                        v-for="ingredient in ingredients"
                        :key="ingredient.id"
                        class="pizza__filling"
                        :class="`pizza__filling--${ingredient.value}`"
                    ></div>
                </div>
            </div>
        </div>

        <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button
                class="button"
                type="button"
                disabled
            >Готовьте!</button>
        </div>
    </div>
</template>

<script setup>
// 1. props
const props = defineProps({
    dough: {
        type:     String,
        required: true
    },
    ingredients: {
        type:     Array,
        required: true
    },
    sauce: {
        type:     String,
        required: true
    },
});

</script>

<style scoped lang="scss">
</style>
