export interface WebConfig {
  taskId: string;
  period: string;
  safeAreaTop: number;
  safeAreaBottom: number;
  triggerFrom: string;
}

export interface MobileBootstrapData {
  webConfig: WebConfig;
  jwt: string;
}