<template>
  <component :is="currentView" :activity-name="themeConfig.routeName" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { resolveThemeConfig } from '@/config/themeConfigs';
import CarPlusHomeView from '@/views/themes/CarPlusHomeView.vue';

const route = useRoute();

const themeConfig = computed(() => resolveThemeConfig(route.params.activityName as string | undefined));

const currentView = computed(() => {
  return CarPlusHomeView;
});
</script>