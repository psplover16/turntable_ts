<template>
  <div class="relative mx-auto flex w-[296px] flex-col items-center">
    <div class="absolute -top-3 z-20 h-0 w-0 border-l-[14px] border-r-[14px] border-t-[22px] border-l-transparent border-r-transparent border-t-brandBlue"></div>

    <div
      class="relative h-[296px] w-[296px] rounded-full border-2 border-[#4d89e8] bg-white shadow-[0_10px_24px_rgba(20,30,80,0.22)] transition-transform duration-[4200ms] ease-[cubic-bezier(0.1,0.85,0.1,1)]"
      :style="{ transform: `rotate(${rotationDeg}deg)` }"
    >
      <div class="absolute inset-[12px] rounded-full" :style="wheelGradientStyle"></div>

      <div class="absolute inset-[26px] rounded-full border-2 border-white bg-[#f8fafc] shadow-inner"></div>

      <div class="absolute inset-0">
        <div
          v-for="(rewardLabel, index) in safeRewardLabels"
          :key="`${rewardLabel}-${index}`"
          class="absolute left-1/2 top-1/2 origin-bottom -translate-x-1/2 text-center text-xs font-black tracking-wide text-brandBlue"
          :style="getLabelStyle(index)"
        >
          {{ rewardLabel }}
        </div>
      </div>
    </div>

    <button
      type="button"
      class="absolute top-1/2 z-30 flex h-[62px] w-[62px] -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-b from-[#d38722] via-[#c86c10] to-[#8f4708] text-lg font-black text-white shadow-[0_6px_10px_rgba(68,42,10,0.35)]"
      :class="{ 'cursor-not-allowed opacity-70': disabled }"
      :disabled="disabled"
      @click="$emit('action')"
    >
      {{ centerText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  rewardLabels: string[];
  rotationDeg: number;
  hasDrawn: boolean;
  disabled: boolean;
}>();

defineEmits<{
  action: [];
}>();

const safeRewardLabels = computed(() => {
  if (props.rewardLabels.length === 4) {
    return props.rewardLabels;
  }

  return ['獎項一', '獎項二', '獎項三', '獎項四'];
});

const centerText = computed(() => {
  return props.hasDrawn ? '領' : '抽';
});

const wheelGradientStyle = computed(() => ({
  background:
    'conic-gradient(from -45deg, #003fb1 0deg 90deg, #ec7f00 90deg 180deg, #003fb1 180deg 270deg, #ec7f00 270deg 360deg)',
}));

function getLabelStyle(index: number) {
  const angle = index * 90 - 45;

  return {
    transform: `rotate(${angle}deg) translateY(-96px) rotate(${-angle}deg)`,
    width: '86px',
  };
}
</script>