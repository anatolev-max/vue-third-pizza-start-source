<template>
    <div class="content__diameter">
        <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
                <label
                    v-for="sizeType in sizeItems"
                    :key="sizeType.id"
                    class="diameter__input"
                    :class="`diameter__input--${sizeType.value}`"
                >
                    <input
                        class="visually-hidden"
                        type="radio"
                        name="diameter"
                        :value="sizeType.value"
                    >
                    <span>{{ sizeType.name }}</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
// 1. props
const props = defineProps({
    sizeItems: {
        type:     Array,
        required: true
    }
});
</script>

<style scoped lang="scss">
</style>