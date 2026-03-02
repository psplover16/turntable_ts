/**
 * 從網址路徑取得 activityName
 * @param {string} path - window.location.pathname
 * @returns {string|undefined} activityName
 */
export function getActivityNameFromPath(path) {
  if (!path) return undefined;
  const pathSegments = path.split('/').filter(Boolean);
  return pathSegments.length ? pathSegments[pathSegments.length - 1] : undefined;
}

/**
 * kebab-case 轉小駝峰
 * @param {string} str
 * @returns {string}
 */
export function kebabToCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

/**
 * 根據當前路由動態獲取對應活動的已兌換獎項資料
 * @returns {Promise<Array|undefined>} 對應活動的獎項資料，找不到則返回 undefined
 */
export async function getRedeemedRewardByRoute() {
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const routeName = getActivityNameFromPath(currentPath);
    if (routeName) {
      const camelCaseRouteName = kebabToCamelCase(routeName);
      try {
        // 使用 Vite 支援的動態導入格式
        // 明確指定導入路徑模式，讓 Vite 能夠正確分析
        const modules = import.meta.glob('./detail/*.js');
        const modulePath = `./detail/${camelCaseRouteName}.js`;

        if (modules[modulePath]) {
          const module = await modules[modulePath]();
          return module.redeemedReward || [];
        }

        return;
      } catch (error) {
        return;
      }
    }
  }
  return;
}
