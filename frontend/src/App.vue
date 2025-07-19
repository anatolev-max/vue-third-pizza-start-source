<script>
import {defineComponent} from 'vue';
import {AppLayout}       from '@/layouts';
import {HomeView}        from '@/views';

export default defineComponent({
    components: {HomeView, AppLayout}
})
</script>

<template>
    <app-layout>
        <home-view/>
    </app-layout>
</template>

<style>
</style>
