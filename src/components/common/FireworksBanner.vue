<template>
  <div v-show="visible" ref="containerRef" class="pointer-events-none absolute inset-x-0 top-0 z-40 h-[180px]"></div>
</template>

<script setup lang="ts">
import lottie, { type AnimationItem } from 'lottie-web';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import fireworksData from '@/assets/lottie/fireworks.json';

const props = defineProps<{
  visible: boolean;
}>();

const containerRef = ref<HTMLDivElement | null>(null);
let animation: AnimationItem | null = null;

onMounted(() => {
  if (!containerRef.value) {
    return;
  }

  animation = lottie.loadAnimation({
    container: containerRef.value,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: fireworksData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMin slice',
    },
  });
});

watch(
  () => props.visible,
  (nextVisible) => {
    if (!animation) {
      return;
    }

    if (nextVisible) {
      animation.goToAndPlay(0, true);
      return;
    }

    animation.stop();
  },
);

onBeforeUnmount(() => {
  animation?.destroy();
  animation = null;
});
</script>