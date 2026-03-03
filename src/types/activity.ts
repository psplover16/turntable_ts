import type { RedeemedRewardItem } from '@/mocks/types';

export interface ActivityDetailResponse {
  barcode: number;
  activity: {
    activityDetail: string;
    activityDrawQualifications: string;
    activityReceiveProgress: Array<{
      title: string;
      content: string[];
    }>;
    activityOtherNotices: string[];
    articlePeriod: {
      startAt: string;
      endAt: string;
    };
  };
  requirement: {
    articlePeriod: {
      startAt: string;
      endAt: string;
    };
    activityWay: string[];
    activityEligibility: string[];
    activityRewards: {
      title: string;
      content: string[];
      note: string;
    };
  };
  redeemedScratchReward: RedeemedRewardItem[];
  voucherGroups: unknown[];
  isValidPeriod: boolean;
}

export interface DrawResponse {
  status: number;
  message: string;
  redeemedVoucher: RedeemedRewardItem[];
}