import { questions, gods, calculateType } from './data.js';

const app = document.querySelector('#app');
history.scrollRestoration = 'manual';
let answers = [];
let step = 0;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function setView(html) {
  app.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function start() {
  answers = [];
  step = 0;
  history.replaceState(null, '', location.pathname);
  showQuestion();
}

function showHome() {
  setView(`<section class="hero card">
    <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
    <p class="eyebrow">나를 알아가는 3분 모험</p>
    <div class="hero-art" aria-hidden="true"><span class="art-star art-star-one">✦</span><span class="art-moon">☾</span><span class="art-star art-star-two">✧</span><span class="art-spark">✳</span></div>
    <h1>내 안의<br><em>작은 신</em>은?</h1>
    <p class="hero-copy">학교에서 마주치는 작은 선택들이<br>나만의 별빛 캐릭터를 알려 줄 거예요.</p>
    <div class="hero-meta"><span>✦ 12가지 선택</span><span>✦ 16명의 신</span><span>✦ 정답 없음</span></div>
    <button class="button primary" id="start-button">모험 시작하기 <span aria-hidden="true">↗</span></button>
    <p class="hero-footnote">회원가입 없이 바로 시작 · 답변은 저장하지 않아요</p>
  </section>
  <section class="intro-grid" aria-label="테스트 안내">
    <div class="info-card"><span class="info-icon">💭</span><h2>내 생각대로</h2><p>더 멋진 답은 없어요. 지금 내 마음에 가까운 쪽을 골라요.</p></div>
    <div class="info-card"><span class="info-icon">🤝</span><h2>서로 다르게</h2><p>친구와 결과가 달라도 좋아요. 서로의 장점을 발견해 봐요.</p></div>
  </section>`);
  document.querySelector('#start-button').addEventListener('click', start);
}

function showQuestion() {
  const question = questions[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);
  setView(`<section class="quiz card">
    <div class="quiz-top"><button class="text-button" id="back-button" aria-label="이전 질문">← 이전</button><span>별빛 신전 탐험</span><span>${step + 1} / ${questions.length}</span></div>
    <div class="progress" role="progressbar" aria-label="테스트 진행률" aria-valuenow="${step + 1}" aria-valuemin="0" aria-valuemax="${questions.length}"><span style="width:${progress}%"></span></div>
    <div class="question-art" aria-hidden="true"><span>✦</span><span>✧</span><span>☾</span></div>
    <p class="eyebrow">SCENE ${String(step + 1).padStart(2, '0')} · ${escapeHtml(question.scene)}</p>
    <h1>${escapeHtml(question.prompt)}</h1>
    <p class="quiz-hint">더 마음이 가는 쪽을 선택해 주세요.</p>
    <div class="choices">${question.choices.map((choice, index) => `<button class="choice" data-choice="${index}"><span class="choice-number">0${index + 1}</span><span>${escapeHtml(choice.text)}</span><span class="choice-arrow" aria-hidden="true">↗</span></button>`).join('')}</div>
    <p class="quiz-footer">정답은 없어요. 나다운 답이 가장 좋은 답!</p>
  </section>`);
  document.querySelector('#back-button').addEventListener('click', () => {
    if (step === 0) return showHome();
    step -= 1;
    showQuestion();
  });
  document.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
    answers[step] = question.choices[Number(button.dataset.choice)].value;
    step += 1;
    if (step === questions.length) showResult(calculateType(answers), true);
    else showQuestion();
  }));
}

function resultUrl(type) {
  const url = new URL(location.href);
  url.searchParams.set('type', type);
  return url.href;
}

async function copyLink(type) {
  const link = resultUrl(type);
  try {
    await navigator.clipboard.writeText(link);
    return true;
  } catch {
    const field = document.createElement('textarea');
    field.value = link;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    return copied;
  }
}

function showResult(type, updateUrl = false) {
  const god = gods[type];
  if (!god) return showHome();
  if (updateUrl) history.replaceState(null, '', resultUrl(type));
  setView(`<article class="result card" style="--god-color:${god.color}">
    <p class="eyebrow">별빛 신전 탐험 완료</p>
    <p class="result-kicker">내 안에서 반짝이는 신은</p>
    <div class="result-icon" aria-hidden="true">${god.icon}</div>
    <h1>${escapeHtml(god.name)}</h1>
    <p class="result-title">${escapeHtml(god.title)}</p>
    <span class="type-badge">${type}</span>
    <div class="result-details">
      <section><span class="detail-number">01 / 나의 빛</span><h2>이런 힘이 있어요</h2><p>${escapeHtml(god.strength)}</p></section>
      <section><span class="detail-number">02 / 함께할 때</span><h2>친구와 만나면</h2><p>${escapeHtml(god.team)}</p></section>
      <section><span class="detail-number">03 / 작은 도전</span><h2>한 걸음 더</h2><p>${escapeHtml(god.tip)}</p></section>
    </div>
    <p class="result-note">MBTI 네 글자는 나를 알아보는 하나의 놀이예요. 오늘의 나와 내일의 나는 얼마든지 달라질 수 있어요.</p>
    <div class="result-actions"><button class="button primary" id="share-button">카카오톡으로 공유하기 ↗</button><button class="button secondary" id="copy-button">결과 링크 복사</button><button class="text-button restart" id="restart-button">처음부터 다시 해보기 ↻</button></div>
    <p class="share-status" id="share-status" role="status"></p>
  </article>`);
  const status = document.querySelector('#share-status');
  document.querySelector('#copy-button').addEventListener('click', async () => {
    status.textContent = await copyLink(type) ? '결과 링크를 복사했어요!' : '복사할 수 없어요. 주소창의 링크를 직접 복사해 주세요.';
  });
  document.querySelector('#share-button').addEventListener('click', () => {
    const kakaoKey = document.querySelector('meta[name="kakao-js-key"]')?.content.trim();
    if (!kakaoKey || !window.Kakao) {
      status.textContent = '카카오 공유 준비 중이에요. 지금은 결과 링크를 복사해 보내 주세요.';
      return;
    }
    try {
      if (!window.Kakao.isInitialized()) window.Kakao.init(kakaoKey);
      const url = resultUrl(type);
      window.Kakao.Share.sendDefault({
        objectType: 'text',
        text: `내 안의 작은 신은 ${god.name}! ${god.title} · 너의 별빛 신도 찾아봐!`,
        link: { mobileWebUrl: url, webUrl: url },
        buttonTitle: '내 결과 보기'
      });
    } catch {
      status.textContent = '카카오 공유를 열 수 없어요. 결과 링크 복사를 이용해 주세요.';
    }
  });
  document.querySelector('#restart-button').addEventListener('click', start);
}

const typeFromLink = new URLSearchParams(location.search).get('type')?.toUpperCase();
if (typeFromLink && Object.hasOwn(gods, typeFromLink)) showResult(typeFromLink);
else showHome();
