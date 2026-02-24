export interface VideoItem {
  videoId: string;
  title: string;
}

export interface RegionSection {
  region: string;
  description: string;
  videos: VideoItem[];
}

export const preconstructionData: RegionSection[] = [
  {
    region: '전국 공통',
    description:
      '체류형 쉼터 및 이동식 주택 설치 시 전국 공통으로 적용되는 법령 기준입니다. 건축법 제20조(가설건축물), 농지법, 국토의 계획 및 이용에 관한 법률 등을 기반으로 하며, 설치 전 관할 지자체에 반드시 확인이 필요합니다.',
    videos: [
      {
        videoId: 'dQw4w9WgXcQ',
        title: '체류형 쉼터 설치 기준 개요',
      },
      {
        videoId: 'dQw4w9WgXcQ',
        title: '이동식 주택 법령 안내',
      },
    ],
  },
  {
    region: '경기도',
    description:
      '경기도 내 체류형 쉼터 설치는 농지전용 허가 또는 신고 여부, 개발행위 허가 등이 필요할 수 있습니다. 각 시·군 도시계획과에 사전 문의를 권장합니다.',
    videos: [
      {
        videoId: 'dQw4w9WgXcQ',
        title: '경기도 농지법 적용 사례',
      },
      {
        videoId: 'dQw4w9WgXcQ',
        title: '경기도 개발행위 허가 안내',
      },
      {
        videoId: 'dQw4w9WgXcQ',
        title: '경기도 가설건축물 신고 절차',
      },
    ],
  },
  {
    region: '강원도',
    description:
      '강원도는 산림 지역과 접한 경우가 많아 산지관리법 적용 여부를 확인해야 합니다. 또한 군사시설 보호구역 해당 여부도 사전 검토가 필요합니다.',
    videos: [
      {
        videoId: 'dQw4w9WgXcQ',
        title: '강원도 산지관리법 설명',
      },
      {
        videoId: 'dQw4w9WgXcQ',
        title: '강원도 체류형 쉼터 시공 사례',
      },
    ],
  },
  {
    region: '충청도',
    description:
      '충청북도·충청남도 지역의 체류형 쉼터 설치는 농업진흥구역 여부 및 비농업진흥구역 활용 방안을 중심으로 검토합니다.',
    videos: [
      {
        videoId: 'dQw4w9WgXcQ',
        title: '충청도 농업진흥구역 안내',
      },
    ],
  },
  {
    region: '전라도',
    description:
      '전라북도·전라남도는 농지 비율이 높아 농지법 적용이 엄격합니다. 체류형 쉼터 설치 시 임시 사용 신고 절차 및 원상복구 의무를 숙지해야 합니다.',
    videos: [
      {
        videoId: 'dQw4w9WgXcQ',
        title: '전라도 농지 임시사용 신고 방법',
      },
      {
        videoId: 'dQw4w9WgXcQ',
        title: '전라도 체류형 쉼터 허가 절차',
      },
    ],
  },
  {
    region: '경상도',
    description:
      '경상북도·경상남도 지역은 도심 외곽 농촌 지역 개발이 활발하며, 지구단위계획 및 용도지역에 따라 설치 가능 여부가 달라집니다.',
    videos: [
      {
        videoId: 'dQw4w9WgXcQ',
        title: '경상도 용도지역별 설치 기준',
      },
      {
        videoId: 'dQw4w9WgXcQ',
        title: '경상도 시공 전 확인사항',
      },
    ],
  },
];
