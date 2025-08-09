<template>
    <div
        :draggable="draggable"
        @dragstart.self="onDragStart"
        @dragover.prevent
        @dragenter.prevent
    >
        <slot/>
    </div>
</template>

<script setup>
import {DATA_TRANSFER_KEY} from '../constants/index.js';

const props = defineProps({
    draggable: {
        type:    Boolean,
        default: false,
    },
    transferData: {
        type:     Object,
        required: true,
    },
});

/**
 * @param evt
 */
const onDragStart = (evt) => {
    const data = JSON.stringify(props.transferData);
    evt.dataTransfer.setData(DATA_TRANSFER_KEY, data);
};
</script>

<style scoped lang="scss">
</style>
