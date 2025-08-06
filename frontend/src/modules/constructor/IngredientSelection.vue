<template>
    <div class="content__ingredients">
        <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

            <div class="sheet__content ingredients">
                <sauce-selection
                    :sauce-items="sauceItems"
                ></sauce-selection>

                <div class="ingredients__filling">
                    <p>Начинка:</p>

                    <ingredient-list
                        :ingredient-items="ingredientItems"
                    ></ingredient-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SauceSelection from '@/modules/constructor/SauceSelection.vue';
import IngredientList from "@/modules/constructor/IngredientList.vue";

// 1. props
const props = defineProps({
    ingredientItems: {
        type:     Array,
        required: true
    },
    sauceItems: {
        type:     Array,
        required: true
    }
});
</script>

<style scoped lang="scss">
</style>
