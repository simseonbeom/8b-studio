// 페이지의 모든 문구와 데이터. 수치·고객사·포트폴리오·후기·연락처·사업자 정보는
// 시안용 예시이므로 공개 전에 실제 자료로 바꿔야 한다.

// GitHub Pages는 하위 경로에서 서비스되므로 public 파일 경로에 base를 붙인다.
const images = `${import.meta.env.BASE_URL}images/`;

export const contact = {
  email: 'hello@8b-studio.kr',
  phone: '02-6952-0808',
  address: ['서울특별시 성동구 성수이로 88', '8층 8B-studio'],
  instagram: '@8b.studio',
  legal: { ceo: '정한결', businessNo: '123-45-67890' },
};

export const navLinks = [
  { href: '#services', label: '서비스' },
  { href: '#portfolio', label: '포트폴리오' },
  { href: '#process', label: '프로세스' },
  { href: '#faq', label: 'FAQ' },
];

export const serviceTabs = ['Web 개발', 'App 개발', 'AI 도입', 'UX·UI 디자인'];

export const stats = [
  { value: 128, unit: '개', label: '누적 프로젝트', note: '2026년 기준' },
  { value: 72, unit: '%', label: '재계약률', note: '계약 고객 기준' },
  { value: 8, unit: '주', label: '평균 런칭 기간', note: '웹서비스·앱 기준' },
];

export const logos = [
  { name: 'haru note', kr: '하루노트', ind: '에듀테크', radius: '50%' },
  { name: 'GREENFORK', kr: '그린포크', ind: 'F&B 프랜차이즈', radius: '3px' },
  { name: 'openfield', kr: '오픈필드', ind: '물류', radius: '0' },
  { name: 'moa lab', kr: '모아랩', ind: '헬스케어', radius: '50% 0' },
  { name: 'ROOTCAMP', kr: '루트캠프', ind: '교육', radius: '0 50%' },
  { name: 'bytefarm', kr: '바이트팜', ind: '스마트팜', radius: '50%' },
  { name: 'clover pin', kr: '클로버핀', ind: '핀테크', radius: '3px' },
  { name: 'makewave', kr: '메이크웨이브', ind: '미디어', radius: '50% 50% 0 0' },
];

export const problems = [
  { no: '01', title: '견적과 다른 최종 비용', icon: 'receipt' },
  { no: '02', title: '진행 상황을 알 수 없는 몇 주', icon: 'clock' },
  { no: '03', title: '런칭 후 연락 두절', icon: 'link' },
] as const;

export const services = [
  {
    no: '01',
    name: 'Web',
    desc: '찾아오고 신청하는 웹을 만듭니다.',
    tags: ['브랜드 사이트', '랜딩 페이지', '웹서비스(관리자 포함)'],
    image: `${images}service-web.jpg`,
    alt: '노트북 화면 속 코드',
  },
  {
    no: '02',
    name: 'App',
    desc: '한 번 개발로 iOS·Android 모두.',
    tags: ['iOS·Android', '크로스플랫폼 앱'],
    image: `${images}service-app.jpg`,
    alt: '푸른 조명 앞에서 들고 있는 스마트폰',
  },
  {
    no: '03',
    name: 'AI',
    desc: '반복 업무는 AI에게 맡깁니다.',
    tags: ['사내 문서 챗봇', '업무 자동화', 'AI 기능 탑재'],
    image: `${images}service-ai.jpg`,
    alt: 'AI 글자 형태의 입체 그래픽',
  },
  {
    no: '04',
    name: 'Design',
    desc: '처음 써도 헷갈리지 않는 화면.',
    tags: ['UX 리서치', 'UI 디자인', '디자인 시스템'],
    image: `${images}service-design.jpg`,
    alt: '종이에 와이어프레임을 스케치하는 손',
  },
];

export const cases = [
  {
    brand: 'haru note',
    title: '하루노트 학습 관리',
    ind: '에듀테크',
    result: '+182%',
    metric: '회원가입 전환율',
    color: '#3D7BFF',
    task: '학원·과외 선생님이 숙제와 출결을 엑셀과 단톡방에 따로 관리했습니다.',
    solve: '숙제 배부부터 출결, 학부모 알림까지 한 화면에서 처리하는 웹서비스와 관리자 페이지를 8주 만에 만들었습니다.',
    res: '런칭 3개월 만에 회원가입 전환율이 182% 올랐습니다.',
  },
  {
    brand: 'GREENFORK',
    title: '그린포크 매장 주문 앱',
    ind: 'F&B 프랜차이즈',
    result: '−41%',
    metric: '주문 처리 시간',
    color: '#2F8F5B',
    task: '점심 피크마다 카운터 주문이 밀려 대기 줄이 길어졌습니다.',
    solve: 'iOS·Android 주문 앱과 매장용 주문 접수 화면을 함께 만들었습니다.',
    res: '주문 처리 시간이 41% 줄고, 앱 주문 비중이 절반을 넘었습니다.',
  },
  {
    brand: 'openfield',
    title: '오픈필드 사내 문서 챗봇',
    ind: '물류',
    result: '−63%',
    metric: '반복 문의 응대 시간',
    color: '#0E0F12',
    task: '현장 직원의 같은 질문이 매번 본사 담당자에게 몰렸습니다.',
    solve: '운영 매뉴얼과 규정 문서를 근거로 답하는 사내 AI 챗봇을 메신저에 붙였습니다.',
    res: '반복 문의 응대 시간이 63% 줄었습니다.',
  },
];

export const steps = [
  { no: '01', name: '상담', dur: '1일', out: '요구사항 정리 메모', range: 'cover 30% cover 38%' },
  { no: '02', name: '기획·견적', dur: '1주', out: '기능 명세서, 확정 견적서', range: 'cover 37% cover 45%' },
  { no: '03', name: '디자인', dur: '2주', out: '화면 디자인 시안', range: 'cover 44% cover 52%' },
  { no: '04', name: '개발', dur: '4주', out: '주간 데모 링크', range: 'cover 51% cover 59%' },
  { no: '05', name: '런칭·유지보수', dur: '1주 + 무상 3개월', out: '운영 가이드, 소스코드', range: 'cover 58% cover 66%' },
];

export const teamPhoto = {
  image: `${images}team.jpg`,
  alt: '노트북을 펴고 한 테이블에서 함께 일하는 팀',
  caption: '기획 · 디자인 · 개발, 한 테이블에서',
};

export const reviews = [
  {
    initial: '김',
    name: '김도윤',
    role: '대표',
    company: '하루노트',
    text: '견적서에 적힌 금액에서 한 푼도 달라지지 않았습니다. 매주 금요일마다 데모 링크가 와서 진행 상황을 따로 물어볼 일이 없었어요.',
  },
  {
    initial: '이',
    name: '이서연',
    role: '운영총괄',
    company: '그린포크',
    text: '기획서도 없이 아이디어만 들고 갔는데, 첫 상담에서 기능 범위를 같이 정리해 줬습니다. 런칭하고 석 달이 지난 지금도 연락하면 바로 답이 옵니다.',
  },
  {
    initial: '박',
    name: '박준호',
    role: '디지털전략팀장',
    company: '오픈필드',
    text: '챗봇을 붙이고 나서 반복 문의가 눈에 띄게 줄었습니다. 개발을 모르는 저희 팀도 직접 관리할 수 있게 사용법까지 넘겨받았어요.',
  },
];

export const faqs = [
  { q: '비용은 어떻게 산정하나요?', a: '화면 수와 기능 범위로 산정합니다. 첫 상담 후 3일 안에 항목별 견적서를 드리고, 계약한 범위 안에서는 금액이 바뀌지 않습니다.' },
  { q: '최소 제작 기간은?', a: '랜딩 페이지는 2주, 웹서비스와 앱은 평균 8주입니다. 범위가 작으면 더 짧아집니다.' },
  { q: '기획서가 없어도 되나요?', a: '없어도 됩니다. 상담에서 아이디어를 듣고 기능 명세서는 저희가 정리해 드립니다.' },
  { q: '런칭 후 유지보수는?', a: '런칭 후 3개월은 오류를 무상으로 고쳐 드립니다. 이후에는 월 단위 유지보수 계약을 선택할 수 있습니다.' },
  { q: '소스코드 소유권은?', a: '잔금 정산과 함께 소스코드와 디자인 원본의 소유권을 모두 넘겨드립니다.' },
  { q: 'AI 도입 비용이 따로 드나요?', a: 'AI 기능 개발비는 견적에 포함됩니다. AI 모델 사용료는 쓰는 만큼 따로 나오며, 예상 금액을 미리 계산해 드립니다.' },
];

export const projectTypes = ['웹사이트·웹서비스', '모바일 앱', 'AI 기능 도입', 'UX·UI 디자인', '아직 모르겠어요'];
export const budgets = ['1천만 원 미만', '1천만~3천만 원', '3천만~5천만 원', '5천만 원 이상', '상담 후 결정'];
