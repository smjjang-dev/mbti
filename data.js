export const questions = [
  { scene: '새 학기', prompt: '새 반 친구들과 처음 만나는 날, 나는?', axis: 'EI', choices: [
    { text: '먼저 말을 걸며 함께할 친구를 찾는다', value: 'E' },
    { text: '주변을 살피다가 편한 친구와 천천히 친해진다', value: 'I' }
  ] },
  { scene: '상상 수업', prompt: '“미래의 학교”를 그린다면 나는?', axis: 'SN', choices: [
    { text: '교실에 꼭 필요한 물건부터 떠올린다', value: 'S' },
    { text: '하늘을 나는 운동장 같은 새 아이디어를 떠올린다', value: 'N' }
  ] },
  { scene: '친구의 고민', prompt: '친구가 발표를 망쳤다고 속상해하면?', axis: 'TF', choices: [
    { text: '다음에는 어떻게 하면 좋을지 함께 방법을 찾는다', value: 'T' },
    { text: '속상했겠다며 먼저 친구의 마음을 들어 준다', value: 'F' }
  ] },
  { scene: '주말 계획', prompt: '친구들과 놀기로 한 토요일, 나는?', axis: 'JP', choices: [
    { text: '시간과 장소를 미리 정해 두면 마음이 편하다', value: 'J' },
    { text: '그날의 기분에 따라 재미있는 걸 고르고 싶다', value: 'P' }
  ] },
  { scene: '모둠 활동', prompt: '새로운 모둠에서 의견을 나눌 때 나는?', axis: 'EI', choices: [
    { text: '생각을 말하며 친구들과 아이디어를 키운다', value: 'E' },
    { text: '혼자 생각을 정리한 뒤 의견을 말한다', value: 'I' }
  ] },
  { scene: '보물 지도', prompt: '보물찾기 지도를 받았다! 먼저 눈에 들어오는 건?', axis: 'SN', choices: [
    { text: '지도에 그려진 길과 표시를 자세히 살핀다', value: 'S' },
    { text: '표시 뒤에 숨은 뜻과 가능성을 상상한다', value: 'N' }
  ] },
  { scene: '의견이 다를 때', prompt: '모둠 친구들과 선택이 달라지면 나는?', axis: 'TF', choices: [
    { text: '각 선택의 장단점을 비교해 본다', value: 'T' },
    { text: '모두가 어떤 마음인지 먼저 물어본다', value: 'F' }
  ] },
  { scene: '숙제 시작', prompt: '일주일 뒤 제출할 과제가 생기면?', axis: 'JP', choices: [
    { text: '할 일을 나눠 조금씩 끝낸다', value: 'J' },
    { text: '아이디어를 모으다가 집중이 될 때 시작한다', value: 'P' }
  ] },
  { scene: '쉬는 시간', prompt: '하루 중 가장 즐거운 쉬는 시간은?', axis: 'EI', choices: [
    { text: '친구들과 이야기하거나 같이 노는 시간', value: 'E' },
    { text: '좋아하는 책이나 생각에 푹 빠지는 시간', value: 'I' }
  ] },
  { scene: '새 게임', prompt: '처음 보는 게임을 배울 때 나는?', axis: 'SN', choices: [
    { text: '설명과 예시를 보며 규칙을 익힌다', value: 'S' },
    { text: '일단 해 보며 새로운 전략을 떠올린다', value: 'N' }
  ] },
  { scene: '친구에게 조언', prompt: '친구가 내 그림에 의견을 물어보면?', axis: 'TF', choices: [
    { text: '좋은 점과 고치면 좋을 점을 또렷하게 말한다', value: 'T' },
    { text: '그림에 담긴 마음을 먼저 알아봐 준다', value: 'F' }
  ] },
  { scene: '신나는 여행', prompt: '별빛 신전으로 떠나기 전날 나는?', axis: 'JP', choices: [
    { text: '준비물을 챙기고 이동 순서를 확인한다', value: 'J' },
    { text: '가서 만날 뜻밖의 모험을 기대한다', value: 'P' }
  ] }
];

// 모든 신 이름과 유형의 연결은 이 프로젝트를 위해 새로 만들었습니다.
export const gods = {
  ISTJ: { name: '돌담의 신, 단단', icon: '🪨', color: '#88b4a3', title: '약속을 지키는 든든한 수호자', strength: '작은 일도 꼼꼼하게 해내서 친구들이 믿고 맡길 수 있어요.', team: '모둠의 준비물과 순서를 챙길 때 빛나요.', tip: '계획이 달라져도 새로운 방법을 한 번 시도해 봐요.' },
  ISFJ: { name: '포근한 숲의 신, 모아', icon: '🌿', color: '#a7cfa9', title: '친구의 마음을 살피는 다정한 수호자', strength: '친구가 필요한 것을 조용히 알아채고 도와줘요.', team: '누구도 빠지지 않도록 함께 챙길 때 빛나요.', tip: '내가 원하는 것도 작은 목소리로라도 말해 봐요.' },
  INFJ: { name: '달빛의 신, 루나', icon: '🌙', color: '#b6abe1', title: '깊은 생각으로 길을 비추는 안내자', strength: '친구의 마음과 앞으로의 가능성을 함께 바라봐요.', team: '서로 다른 생각을 이어 줄 때 빛나요.', tip: '완벽한 답을 찾기 전에도 생각을 나눠 봐요.' },
  INTJ: { name: '별지도의 신, 아르', icon: '🗺️', color: '#99a7dd', title: '멀리 보고 길을 만드는 설계자', strength: '복잡한 문제 속에서도 목표까지 가는 길을 찾아요.', team: '새 계획을 세우고 해결 방법을 제안할 때 빛나요.', tip: '친구의 방법에도 예상 못 한 좋은 점이 있을 수 있어요.' },
  ISTP: { name: '번개의 신, 찰칵', icon: '⚡', color: '#d2bb82', title: '손으로 해답을 찾는 실험가', strength: '새로운 도구를 만져 보고 빠르게 원리를 알아내요.', team: '막힌 일을 직접 시험해 볼 때 빛나요.', tip: '머릿속 아이디어를 친구에게 한마디로 알려 줘요.' },
  ISFP: { name: '꽃잎의 신, 나리', icon: '🌸', color: '#eab2bf', title: '나만의 색을 발견하는 예술가', strength: '작은 아름다움과 친구의 기분을 섬세하게 느껴요.', team: '그림과 꾸미기로 모둠의 생각을 보여 줄 때 빛나요.', tip: '내 작품이 마음에 들면 용기 내어 보여 줘요.' },
  INFP: { name: '꿈구름의 신, 몽실', icon: '☁️', color: '#c5b8ea', title: '이야기 속 희망을 찾는 상상가', strength: '소중한 마음을 지키며 새로운 이야기를 만들어요.', team: '모두가 공감할 이야기를 떠올릴 때 빛나요.', tip: '떠오른 생각 하나를 오늘 작게 실천해 봐요.' },
  INTP: { name: '수수께끼의 신, 미로', icon: '🔮', color: '#9dbadd', title: '궁금한 것을 끝까지 파고드는 탐험가', strength: '“왜 그럴까?”를 묻고 예상 못 한 답을 찾아요.', team: '문제의 규칙을 발견할 때 빛나요.', tip: '좋은 생각은 완성 전에도 친구들과 시험해 봐요.' },
  ESTP: { name: '파도의 신, 첨벙', icon: '🌊', color: '#83cbd2', title: '몸을 움직여 모험을 여는 행동가', strength: '새로운 상황에도 씩씩하게 뛰어들 수 있어요.', team: '모두가 망설일 때 첫발을 내딛어 줘요.', tip: '시작하기 전 한 번만 주변을 살피면 더 멀리 가요.' },
  ESFP: { name: '축제의 신, 반짝', icon: '✨', color: '#efc174', title: '오늘을 즐겁게 만드는 분위기 메이커', strength: '함께 있는 친구들이 웃을 수 있는 순간을 만들어요.', team: '긴장한 친구에게 힘을 줄 때 빛나요.', tip: '신나는 순간에도 조용한 친구의 이야기를 들어 봐요.' },
  ENFP: { name: '무지개의 신, 두리', icon: '🌈', color: '#e9a3b2', title: '가능성을 연결하는 아이디어 친구', strength: '새로운 생각을 나누며 친구들의 마음을 움직여요.', team: '서로 다른 아이디어를 이어 줄 때 빛나요.', tip: '가장 마음에 든 생각 하나를 골라 끝까지 해 봐요.' },
  ENTP: { name: '바람개비의 신, 휘리', icon: '🌀', color: '#9ccbd0', title: '새로운 질문으로 길을 여는 발명가', strength: '익숙한 일도 다르게 볼 수 있는 재치가 있어요.', team: '막힌 문제에 색다른 방법을 제안해요.', tip: '내 의견을 말한 뒤 친구의 생각도 끝까지 들어 봐요.' },
  ESTJ: { name: '태양시계의 신, 또각', icon: '☀️', color: '#e4b978', title: '모두의 약속을 이끄는 길잡이', strength: '해야 할 일을 알아보고 차근차근 해내요.', team: '함께할 일을 나누고 마무리할 때 빛나요.', tip: '친구마다 편한 속도가 다를 수 있음을 기억해요.' },
  ESFJ: { name: '모닥불의 신, 온기', icon: '🔥', color: '#e8a998', title: '모두를 따뜻하게 모으는 친구', strength: '친구들이 편하게 함께하도록 먼저 손을 내밀어요.', team: '처음 만난 친구들을 이어 줄 때 빛나요.', tip: '모두를 챙긴 뒤 내 마음도 쉬게 해 줘요.' },
  ENFJ: { name: '등대의 신, 비추', icon: '💫', color: '#dbadca', title: '친구의 용기를 밝혀 주는 응원가', strength: '친구의 좋은 점을 발견하고 함께 성장해요.', team: '각자 잘하는 일을 찾아 힘을 모을 때 빛나요.', tip: '도움을 줄 때에도 친구가 원하는지 먼저 물어봐요.' },
  ENTJ: { name: '나침반의 신, 길찬', icon: '🧭', color: '#9faedf', title: '큰 그림을 그리고 나아가는 대장', strength: '목표를 세우고 친구들과 힘을 합쳐 이뤄 내요.', team: '어려운 과제를 정리하고 방향을 잡을 때 빛나요.', tip: '더 좋은 길을 찾기 위해 잠깐 멈춰 의견을 들어 봐요.' }
};

export function calculateType(answers) {
  if (!Array.isArray(answers) || answers.length !== questions.length) throw new Error('모든 문항에 답해야 해요.');
  return ['EI', 'SN', 'TF', 'JP'].map(axis => {
    const counts = Object.fromEntries([...axis].map(letter => [letter, 0]));
    questions.forEach((question, index) => {
      if (question.axis !== axis) return;
      const value = answers[index];
      if (!question.choices.some(choice => choice.value === value)) throw new Error('올바르지 않은 답변이에요.');
      counts[value] += 1;
    });
    return counts[axis[0]] > counts[axis[1]] ? axis[0] : axis[1];
  }).join('');
}
