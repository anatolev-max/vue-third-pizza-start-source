<template>
    <div
        @drop.stop="onDrop"
        @dragover.prevent
        @dragenter.prevent
    >
        <slot/>
    </div>
</template>

<script setup>
import {DATA_TRANSFER_KEY} from '../constants/index.js';

// 3. emits
const emit = defineEmits([
    'drop'
]);

// 5. methods
/**
 * @param evt
 */
const onDrop = (evt) => {
    if (!evt.dataTransfer) {
        return;
    }

    const payload = evt.dataTransfer.getData(DATA_TRANSFER_KEY);

    if (payload) {
        const data = JSON.parse(payload);
        emit('drop', data);
    }
};
</script>

<style scoped lang="scss">
</style>
