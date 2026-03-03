import { USE_API } from '@/config/constants';
import { getActivityDetailApi, drawActivityApi } from '@/api/activityApi';
import { drawDummy, getActivityDetailDummy } from '@/mocks/dummy';
import type { ActivityDetailResponse, DrawResponse } from '@/types/activity';

export interface ActivityProvider {
  getActivityDetail: () => Promise<ActivityDetailResponse>;
  draw: () => Promise<DrawResponse>;
}

function cloneDeep<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

class MockProvider implements ActivityProvider {
  async getActivityDetail() {
    return cloneDeep(getActivityDetailDummy());
  }

  async draw() {
    return cloneDeep(drawDummy());
  }
}

class ApiProvider implements ActivityProvider {
  constructor(private readonly activityName: string) {}

  async getActivityDetail() {
    return getActivityDetailApi(this.activityName);
  }

  async draw() {
    return drawActivityApi(this.activityName);
  }
}

export function createActivityProvider(activityName: string): ActivityProvider {
  if (USE_API) {
    return new ApiProvider(activityName);
  }

  return new MockProvider();
}