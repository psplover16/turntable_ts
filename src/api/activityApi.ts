import type { ActivityDetailResponse, DrawResponse } from '@/types/activity';
import { httpClient } from './http';

export async function getActivityDetailApi(activityName: string): Promise<ActivityDetailResponse> {
  const response = await httpClient.get<ActivityDetailResponse>(`/${activityName}/detail`);
  return response.data;
}

export async function drawActivityApi(activityName: string): Promise<DrawResponse> {
  const response = await httpClient.post<DrawResponse>(`/${activityName}/draw`);
  return response.data;
}