<template>
    <button :class="['base-btn', customClass]" @click="onClick" v-bind="$attrs">
        <slot />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    customClass?: string
}>();
const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>();

const onClick = (e: MouseEvent) => emit('click', e);
</script>

<style scoped>
.base-btn {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.base-btn:hover {
    transform: scale(1.05);
}
</style>