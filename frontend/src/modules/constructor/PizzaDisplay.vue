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
                <app-drop @drop="addIngredientHandler">
                    <div class="pizza__wrapper">
                        <div
                            v-for="{id, value, count} in ingredients"
                            :key="id"
                            class="pizza__filling"
                            :class="{
                                [`pizza__filling--${value}`]:                            true,
                                [`pizza__filling--${count === 2 ? 'second' : 'third'}`]: count > 1,
                            }"
                        ></div>
                    </div>
                </app-drop>
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
import AppDrop from "@/common/components/AppDrop.vue";

const props = defineProps({
    addIngredientHandler: {
        type:     Function,
        required: true,
    },
    dough: {
        type:     String,
        required: true
    },
    ingredients: {
        type:     Object,
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
