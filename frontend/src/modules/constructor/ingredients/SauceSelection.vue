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
                checked
                :value="sauceType.value"
                @change="$emit('changeSauce', sauceType.value)"
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

// 3. emits
const emits = defineEmits([
    'changeSauce',
]);

</script>

<style scoped lang="scss">
</style>
