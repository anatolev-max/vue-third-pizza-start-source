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
<!--                    <div class="pizza__filling pizza__filling&#45;&#45;ananas"></div>-->
<!--                    <div class="pizza__filling pizza__filling&#45;&#45;bacon"></div>-->
<!--                    <div class="pizza__filling pizza__filling&#45;&#45;cheddar"></div>-->
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
    sauce: {
        type:     String,
        required: true
    },
});

</script>

<style scoped lang="scss">
</style>
