<template>
    <div class="content__ingredients">
        <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

            <div class="sheet__content ingredients">
                <sauce-selection
                    :sauce-items="sauceItems"
                    @change-sauce="$emit('changeSauce', $event)"
                ></sauce-selection>

                <div class="ingredients__filling">
                    <p>Начинка:</p>

                    <ingredient-list
                        :ingredient-items="ingredientItems"
                        :ingredients="ingredients"
                        @add-ingredient="$emit('addIngredient', $event)"
                        @remove-ingredient="$emit('removeIngredient', $event)"
                    ></ingredient-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IngredientList from '@/modules/constructor/ingredients/IngredientList.vue';
import SauceSelection from '@/modules/constructor/ingredients/SauceSelection.vue';

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
    sauceItems: {
        type:     Array,
        required: true
    }
});

// 3. emits
const emits = defineEmits([
    'addIngredient',
    'removeIngredient',
    'changeSauce',
]);

</script>

<style scoped lang="scss">
</style>
