import type { RedeemedRewardItem } from './types';
import { getRedeemedRewardByRoute } from './activityRouteUtils';
const redeemedReward = getRedeemedRewardByRoute();
const firstRedeemedReward: RedeemedRewardItem | undefined = redeemedReward?.[0];
/**
 * 呼叫APP後 由APP回傳網頁所需資訊
 */
export const getWebConfigDummy = () => {
  return {
    taskId: '138', // API需求的任務ID
    period: '11405', // 發票期數
    safeAreaTop: 56, // 裝置安全範圍（上）
    safeAreaBottom: 24, // 裝置安全範圍（下）
    triggerFrom: 'checking', // 埋點參數
  };
};

/**
 * 活動資訊
 */
export const getActivityDetailDummy = () => ({
  barcode: 123,
  activity: {
    activityDetail:
      '本活動主辦單位為金尉股份有限公司之發票載具APP（以下簡稱發票載具），本活動參加者按下抽獎轉盤參加活動，同時即視為已詳閱並同意接受本任務條款及條件所有規範，如事後無法配合以下任一項目時，視為自動放棄其抽獎、中獎資格。',
    activityDrawQualifications:
      '於活動期間內，符合抽獎活動資格的發票載具APP用戶，可進入轉盤活動頁進行活動抽獎，參加者限自然人，每位用戶僅能獲得一項獎項，不得重複領獎。',
    activityReceiveProgress: [
      {
        title: '一、「0050」獎項<br />依成交價，給付相同金額獎金，等於免費獲得0050 ETF股票！',
        content: [
          '1.得獎資格：限從未在口袋證券開戶，年齡需滿18歲以上，出生地需為台灣，不能有其他國家的稅籍資料，且完成【領獎步驟】。',
          '2.領獎步驟：<br />步驟一．活動期間內，點擊【領獎3步驟】頁面上的【開證券戶】，連結至口袋證券完成開戶。<br />步驟二．活動期間內，至口袋證券零股下單，單筆購買所抽中的獎項（例如：抽中0050*3股=需完成購買0050 元大台灣50 ETF，3股(含)以上；獎金以"第一筆完成3股(含)以上購買"的成交價計算，0050成交價X3(股)，即為獎金金額）。<br />步驟三．活動期間內，於【領獎3步驟】頁面上的【填寫資料】填寫領獎資料，請注意填寫資料正確，若因個人填寫資料錯誤導致無法匯款，恕不補發。<br />經比對完成以上【領獎3步驟】，且符合得獎資格者，即可獲獎。',
          '3.獎項金額說明：<br />活動獎項「0050等值現金」，獎項金額為得獎者於口袋證券零股下單的「實際成交價」。例如：轉盤轉中「0050*3股等值現金」，獎項金額等於：得獎者於口袋證券開戶後，第一筆完成零股購買元大台灣50 ETF 3股(含)以上的成交價（假設購買0050成交價為200元，購買3股零股，故獎金為200X3=600元；依此類推，獎金不包含交易手續費）。',
        ],
      },
      {
        title: '二、「Money錢雜誌」獎項<br />請至發票載具活動【我的獎勵】領取。',
        content: [
          '其他注意事項：<br />．口袋證券新開戶、下單、得獎資格認定問題，請洽口袋客服:mailbox@pocket.tw，或搜尋LINE官方帳號【口袋證券】ID:@popo6620，由客服為您服務。<br />．此為發票載具專屬活動，參與本活動即不得同享其他口袋證券開戶活動。<br />．得獎者不得將獎項權利轉讓第三人，如遇獎品缺貨或不可抗力之事由導致獎品內容無法提供，主辦單位有權變更贈品，改由等值商品或現金取代之。<br />．獎金匯款將於得獎資格審核通過後，於隔週四之後，匯入符合資格用戶帳戶，如有獎金匯款相關問題請至發票載具App內【個人】內下方【聯絡我們】與客服聯繫。<br />．參加者同意所有參與者所留存或產生之任何參與活動的資料及紀錄，皆以主辦單位的電腦系統與時間紀錄為主。如有任何因電腦、網路、電話、技術或不可歸責於主辦單位之事由，而使參加者送出之資料有延遲、遺失、錯誤、無法辨識之情況，主辦單位不負責任何法律責任，參加者不得因此異議。<br />．參加者同意填寫活動派獎所需的個人資料，供主辦方使用。如中獎人未填寫領獎資料、中獎人輸入資料有誤無法寄送、匯款或有其他不符合領獎規定之情形者，視為中獎人自動棄權，發票載具保留更換中獎人名單之權利。<br />．本抽獎為機會中獎，中獎人需同意提供報稅資料，並依所得稅法規定，當年度中獎金額超過1,000元以上，將以新臺幣計價列入年度個人綜合所得稅申報，並寄發扣繳憑單。贈品價值超過新臺幣20,000元，發票載具將於得獎人領取獎項時通知中獎人事先繳交10%之機會中獎所得稅款（非中華民國境內居住之個人為20%），並配合本公司辦理代繳相關事宜，使得領取獎項。<br />．發票載具保留資格審核、取消或更改本任務辦法之權利，並有權對活動事宜作出解釋或決定。',
        ],
      },
    ],
    activityOtherNotices: ['string (活動其他注意事項)'],
    articlePeriod: {
      startAt: '2025/02/25',
      endAt: '2025/03/16',
    },
  },
  requirement: {
    articlePeriod: {
      startAt: '2025/11/20',
      endAt: '2025/12/19',
    },
    activityWay: [
      '1. 進入轉盤頁面免費抽獎',
      '2. 活動期間，完成【領獎步驟】',
      '3. 至App內 【我的獎勵】查看獎品',
    ],
    activityEligibility: ['114年5月、114年6月發票未中獎的用戶'], // 參加資格
    activityRewards: {
      title: '限前10,000名獲得星醫美學免費課程體驗，獎項如下：',
      content: [
        '限前10,000名獲得星醫美學免費課程體驗，獎項如下：',
        '1. 水飛梭＿價值 3,000 元',
        '2. 胜肽箔金保濕導入＿價值 1,000 元',
        '3. 水潤聲波保濕導入＿價值 888 元',
        '4. 鑽白光感多肽酸＿價值 888 元',
      ],
      note: '*註：0050指「元大台灣50 ETF」，市值以2024/10/22收盤價舉例，獎金實際金額請見下方【活動細則】說明。',
    },
  },
  redeemedScratchReward: firstRedeemedReward ? [firstRedeemedReward] : [],
  voucherGroups: [],
  isValidPeriod: true,
});

export const drawDummy = () => {
  return {
    status: 1,
    message: '0',
    redeemedVoucher: firstRedeemedReward ? [firstRedeemedReward] : [],
  };
};

export const getDummyJWT = () => {
  return import.meta.env.VITE_APP_TOKEN ?? '';
};
