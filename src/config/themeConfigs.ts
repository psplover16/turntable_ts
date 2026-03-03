export interface ThemeConfig {
  routeName: string;
  title: string;
  apiPrefix: string;
  assetsRoot: string;
}

const DEFAULT_THEME = 'carPlus';

export const themeConfigs: Record<string, ThemeConfig> = {
  carPlus: {
    routeName: 'carPlus',
    title: '格上租車',
    apiPrefix: 'carPlus',
    assetsRoot: 'carPlus',
  },
  starnic: {
    routeName: 'starnic',
    title: '星醫美學',
    apiPrefix: 'starnic',
    assetsRoot: 'starnic',
  },
};

export function resolveThemeConfig(activityName?: string): ThemeConfig {
  if (!activityName) {
    return themeConfigs[DEFAULT_THEME];
  }

  return themeConfigs[activityName] ?? themeConfigs[DEFAULT_THEME];
}