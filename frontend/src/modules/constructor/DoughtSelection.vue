<template>
    <div class="content__dough">
        <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
                <label
                    v-for="doughType in doughItems"
                    :key="doughType.id"
                    class="dough__input dough__input--light"
                >
                    <input
                        class="visually-hidden"
                        type="radio"
                        name="dought"
                        :value="doughType.value"
                        checked
                    >
                    <img
                        :src="getImage(doughType.image)"
                        :alt="doughType.name"
                    >
                    <b>{{ doughType.name }}</b>
                    <span>{{ doughType.description }}</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
import {getImage} from '@/common/helpers.js';

// 1. props
const props = defineProps({
    doughItems: {
        type:     Array,
        required: true
    }
});
</script>

<style scoped lang="scss">
</style>
