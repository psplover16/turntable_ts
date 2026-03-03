<template>
  <main class="safe-area min-h-screen bg-[#edf4ec] p-4 text-slate-900" :style="mobileDataStore.contentSafeAreaStyle">
    <section class="mx-auto flex w-full max-w-[520px] flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h1 class="text-lg font-bold">{{ themeTitle }}｜system.md 驗證頁</h1>

      <p class="text-sm">
        <span class="font-semibold">資料來源：</span>
        {{ dataSourceText }}
      </p>

      <div class="grid grid-cols-2 gap-2 text-sm">
        <p><span class="font-semibold">taskId：</span>{{ mobileDataStore.webConfig.taskId || '-' }}</p>
        <p><span class="font-semibold">period：</span>{{ mobileDataStore.webConfig.period || '-' }}</p>
        <p><span class="font-semibold">safeAreaTop：</span>{{ mobileDataStore.webConfig.safeAreaTop }}</p>
        <p><span class="font-semibold">safeAreaBottom：</span>{{ mobileDataStore.webConfig.safeAreaBottom }}</p>
        <p class="col-span-2"><span class="font-semibold">JWT：</span>{{ jwtPreview }}</p>
      </div>

      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class="rounded bg-slate-900 px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="activityStore.isLoading"
          @click="loadDetail"
        >
          重新載入活動資料
        </button>

        <button
          type="button"
          class="rounded bg-brandBlue px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="activityStore.isDrawing"
          @click="drawOnce"
        >
          執行抽獎
        </button>
      </div>

      <div class="rounded border border-slate-200 bg-slate-50 p-3 text-sm">
        <p><span class="font-semibold">hasDrawn：</span>{{ activityStore.hasDrawn }}</p>
        <p><span class="font-semibold">isLoading：</span>{{ activityStore.isLoading }}</p>
        <p><span class="font-semibold">isDrawing：</span>{{ activityStore.isDrawing }}</p>
        <p><span class="font-semibold">redeemedScratchReward 數量：</span>{{ rewardCount }}</p>
        <p><span class="font-semibold">最新抽獎訊息：</span>{{ drawMessage }}</p>
      </div>

      <div class="rounded border border-slate-200 p-3 text-sm">
        <p class="mb-1 font-semibold">活動細則摘要</p>
        <p class="line-clamp-4">{{ activityDetailText }}</p>
      </div>

      <p v-if="activityStore.errorMessage" class="text-sm font-semibold text-red-600">
        {{ activityStore.errorMessage }}
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { USE_API } from '@/config/constants';
import { resolveThemeConfig } from '@/config/themeConfigs';
import { useActivityStore } from '@/stores/activity';
import { useMobileDataStore } from '@/stores/mobileData';

const props = defineProps<{
  activityName: string;
}>();

const activityStore = useActivityStore();
const mobileDataStore = useMobileDataStore();

const themeConfig = computed(() => resolveThemeConfig(props.activityName));

const themeTitle = computed(() => themeConfig.value.title);

const dataSourceText = computed(() => (USE_API ? 'API 模式' : 'Mock 模式'));

const jwtPreview = computed(() => {
  const jwt = mobileDataStore.jwt;

  if (!jwt) {
    return '-';
  }

  return `${jwt.slice(0, 12)}...`;
});

const rewardCount = computed(() => activityStore.detail?.redeemedScratchReward.length ?? 0);

const drawMessage = computed(() => activityStore.drawResult ?? '-');

const activityDetailText = computed(() => activityStore.detail?.activity.activityDetail ?? '尚未取得活動資訊');

async function loadDetail() {
  await activityStore.loadActivityDetail(props.activityName);
}

async function drawOnce() {
  await activityStore.draw(props.activityName);
}

onMounted(async () => {
  await mobileDataStore.initializeMobileData();
  await loadDetail();
});
</script>