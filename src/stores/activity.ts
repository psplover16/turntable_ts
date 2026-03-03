import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { createActivityProvider } from '@/providers/activityProvider';
import type { ActivityDetailResponse, DrawResponse } from '@/types/activity';

export const useActivityStore = defineStore('activity', () => {
  const detail = ref<ActivityDetailResponse | null>(null);
  const drawResult = ref<DrawResponse | null>(null);
  const isLoading = ref(false);
  const isDrawing = ref(false);
  const errorMessage = ref('');

  const hasDrawn = computed(() => (detail.value?.redeemedScratchReward.length ?? 0) > 0);

  async function loadActivityDetail(activityName: string) {
    isLoading.value = true;
    errorMessage.value = '';

    try {
      const provider = createActivityProvider(activityName);
      detail.value = await provider.getActivityDetail();
    } catch {
      errorMessage.value = '取得活動資訊失敗';
    } finally {
      isLoading.value = false;
    }
  }

  async function draw(activityName: string) {
    if (isDrawing.value) {
      return;
    }

    isDrawing.value = true;
    errorMessage.value = '';

    try {
      const provider = createActivityProvider(activityName);
      drawResult.value = await provider.draw();

      if (detail.value) {
        detail.value.redeemedScratchReward = drawResult.value.redeemedVoucher;
      }
    } catch {
      errorMessage.value = '抽獎失敗，請稍後再試';
    } finally {
      isDrawing.value = false;
    }
  }

  return {
    detail,
    drawResult,
    isLoading,
    isDrawing,
    errorMessage,
    hasDrawn,
    loadActivityDetail,
    draw,
  };
});