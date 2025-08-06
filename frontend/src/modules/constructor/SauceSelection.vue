<template>
    <div class="ingredients__sauce">
        <p>Основной соус:</p>

        <label
            v-for="sauceType in sauceItems"
            :key="sauceType.id"
            class="radio ingredients__input"
        >
            <input
                type="radio"
                name="sauce"
                :value="sauceType.value"
                checked
            >
            <span>{{ sauceType.name }}</span>
        </label>
    </div>
</template>

<script setup>
// 1. props
const props = defineProps({
    sauceItems: {
        type:     Array,
        required: true
    }
});
</script>

<style scoped lang="scss">
</style>
