import type { RedeemedReward } from './types';

/**
 * 從網址路徑取得 activityName
 * @param {string} path - window.location.pathname
 * @returns {string|undefined} activityName
 */
export function getActivityNameFromPath(path?: string): string | undefined {
  if (!path) return undefined;
  const pathSegments = path.split('/').filter(Boolean);
  return pathSegments.length ? pathSegments[pathSegments.length - 1] : undefined;
}

/**
 * kebab-case 轉小駝峰
 * @param {string} str
 * @returns {string}
 */
export function kebabToCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
}

/**
 * 根據當前路由動態獲取對應活動的已兌換獎項資料
 * @returns {RedeemedReward|undefined} 對應活動的獎項資料，找不到則返回 undefined
 */
export function getRedeemedRewardByRoute(): RedeemedReward | undefined {
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const routeName = getActivityNameFromPath(currentPath);

    if (routeName) {
      const camelCaseRouteName = kebabToCamelCase(routeName);
      const modules = import.meta.glob<{ redeemedReward?: RedeemedReward }>('./detail/*.ts', {
        eager: true,
      });
      const modulePath = `./detail/${camelCaseRouteName}.ts`;
      const module = modules[modulePath];

      if (module) {
        return module.redeemedReward || [];
      }

      return;
    }
  }

  return;
}
