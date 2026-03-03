export interface RewardStepButton {
  displayText: string;
  url: string;
}

export interface RewardStep {
  title: string;
  briefDescription: string;
  button: RewardStepButton | null;
}

export interface RewardThumbnailSet {
  small?: string;
  medium?: string;
  [key: string]: string | undefined;
}

export interface RedeemedRewardItem {
  voucherGroupId: string;
  thumbnailId: string;
  displayTitle: string;
  name: string;
  description: string;
  stepsOfReceivingAward: RewardStep[];
  note: string;
  ctaLink: string;
  thumbnailSet: RewardThumbnailSet;
}

export type RedeemedReward = RedeemedRewardItem[];
