import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { refreshMobileJwt, requestMobileBootstrapData } from '@/mobile/msgMobile';
import type { WebConfig } from '@/types/mobile';

const defaultWebConfig: WebConfig = {
  taskId: '',
  period: '',
  safeAreaTop: 0,
  safeAreaBottom: 0,
  triggerFrom: '',
};

export const useMobileDataStore = defineStore('mobileData', () => {
  const webConfig = ref<WebConfig>(defaultWebConfig);
  const jwt = ref('');
  const initialized = ref(false);

  const contentSafeAreaStyle = computed(() => ({
    paddingTop: `${webConfig.value.safeAreaTop}px`,
    paddingBottom: `${webConfig.value.safeAreaBottom}px`,
  }));

  async function initializeMobileData() {
    if (initialized.value) {
      return;
    }

    const bootstrapData = await requestMobileBootstrapData();
    console.log('bootstrapData', bootstrapData);
    webConfig.value = bootstrapData.webConfig;
    jwt.value = bootstrapData.jwt;
    initialized.value = true;
  }

  async function updateJwtFromMobile() {
    jwt.value = await refreshMobileJwt();
    return jwt.value;
  }

  return {
    webConfig,
    jwt,
    initialized,
    contentSafeAreaStyle,
    initializeMobileData,
    updateJwtFromMobile,
  };
});