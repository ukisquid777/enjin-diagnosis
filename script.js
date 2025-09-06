const initialQuestions = [
  "\u660E\u78BA\u306A\u30D6\u30E9\u30F3\u30C9\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3042\u308A\u307E\u3059\u304B\uFF1F",
  "SNS\u3084Web\u3067\u60C5\u5831\u767A\u4FE1\u3092\u7D99\u7D9A\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F",
  "\u81EA\u793E\u306E\u5F37\u307F\u3092\u8A00\u8A9E\u5316\u3067\u304D\u3066\u3044\u307E\u3059\u304B\uFF1F",
  "\u7B2C\u4E09\u8005\u30E1\u30C7\u30A3\u30A2\u3067\u7D39\u4ECB\u3055\u308C\u305F\u7D4C\u9A13\u304C\u3042\u308A\u307E\u3059\u304B\uFF1F",
  "\u898B\u8A08\u304D\u5BA2\u3078\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u65B9\u6CD5\u306F\u660E\u78BA\u3067\u3059\u304B\uFF1F",
  "\u30EA\u30D4\u30FC\u30C8\u5BA2\u5411\u3051\u306E\u65B9\u7A0B\u3092\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F",
  "\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u3084\u5E83\u5831\u306E\u5B9A\u4EFB\u62C5\u5F53\u304C\u3044\u307E\u3059\u304B\uFF1F",
  "\u65B0\u898F\u5BA2\u7372\u5F97\u306E\u6253\u3061\u624B\u304C\u3042\u308A\u307E\u3059\u304B\uFF1F",
  "\u5916\u90E8\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u306E\u9023\u643A\u7D4C\u9A13\u304C\u3042\u308A\u307E\u3059\u304B\uFF1F",
  "Web\u30B5\u30A4\u30C8\u3084SNS\u306B\u6295\u8CC7\u30FB\u5DE5\u592B\u3092\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F",
  "\u8ABF\u67FB\u306B\u3088\u3063\u3066\u81EA\u793E\u3084\u5E02\u5834\u306E\u72B6\u6CC1\u306E\u628A\u63E1\u3092\u534A\u5E74\u4EE5\u5185\u306B\u5B9F\u65BD\u3057\u307E\u3057\u305F\u304B\uFF1F",
  "\u81EA\u793E\u306E\u77ED\u671F\u7684\u306A\u8AB2\u984C\u3060\u3051\u3067\u306A\u304F\u3001\u4E2D\u9577\u671F\u7684\u306A\u8AB2\u984C\u3092\u8A9E\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304B\uFF1F"
];

const patterns = {
  A: [2, 5, 9, 1, 4, 10, 11],
  B: [0, 2, 3, 5, 9, 10],
  C: [0, 2, 5, 1, 4, 9, 11],
  D: [1, 3, 9, 2, 5, 7, 10],
  E: [0, 5, 8, 3, 4, 7, 11]
};

const typeMessages = {
  A: "\u304C\u3093\u3070\u308A\u5C4B\u3060\u3051\u3069\u4E0D\u5668\u7528\u578B: \u3082\u3063\u3068\u9867\u5BA2\u76EE\u7DDA\u3092\u610F\u8B58\u3057\u3088\u3046\u3002",
  B: "\u8077\u4EBA\u6C17\u8CEA\u306A\u9759\u304B\u306A\u540D\u5E97\u578B: \u3053\u3060\u308F\u308A\u3092\u767A\u4FE1\u3059\u308B\u3053\u3068\u304C\u8AB2\u984C\u3067\u3059\u3002",
  C: "\u4E16\u754C\u89B3\u306F\u3042\u308B\u306E\u306B\u767A\u4FE1\u4E0D\u8DB3\u578B: \u30D6\u30E9\u30F3\u30C9\u306E\u4E16\u754C\u89B3\u3092\u5171\u6709\u3057\u307E\u3057\u3087\u3046\u3002",
  D: "\u610F\u5916\u3068\u9078\u3070\u308C\u306A\u3044\u60B2\u3057\u3044\u578B: \u7AF6\u5408\u3068\u306E\u9055\u3044\u3092\u660E\u78BA\u306B\u4F1D\u3048\u307E\u3057\u3087\u3046\u3002",
  E: "\u611B\u3055\u308C\u3066\u308B\u306E\u306B\u5E83\u307E\u3089\u306A\u3044\u578B: \u30D5\u30A1\u30F3\u3092\u5E83\u3052\u308B\u6226\u7565\u304C\u5FC5\u8981\u3067\u3059\u3002"
};

// Step1 questions base
const step1BaseQuestions = [
  "\u983C\u5BA2\u306E\u8CFC\u8CB7\u52D5\u6A21\u306F\uFF1F（\u5B89\u3055\u30FB\u624B\u8EFD\u3055 / \u4FE1\u983C\u30FB\u5B89\u5B9A\u611F / \u3053\u3060\u308F\u308A\u30FB\u54C1\u8CEA / \u5171\u611F\u30FB\u30B9\u30C8\u30FC\u30EA\u30FC\u6027 / \u6D41\u884C\u30FB\u30C8\u30EC\u30F3\u30C9 / \u5730\u57DF\u5E2D\u7740）",
  "\u304A\u5BA2\u3055\u307E\u304B\u3089\u3088\u304F\u53D7\u3051\u53D7\u308B\u8A00\u8449\u3084\u53CD\u5FDC\u306F\uFF1F",
  "\u3042\u306A\u305F\u306E\u4F1A\u793E\u306E\u3053\u3060\u308F\u308A\u306F\uFF1F（\u54C1\u8CEA / \u30B9\u30BF\u30C3\u30D5\u306E\u4EBA\u67C4 / \u5B9F\u7E3E / \u5730\u57DF\u8CA2\u732E / \u30C7\u30B6\u30A4\u30F3 / \u30B9\u30D4\u30FC\u30C9）",
  "\u306A\u305C\u304A\u5BA2\u3055\u3093\u306F\u3042\u306A\u305F\u306E\u4F1A\u793E\u3092\u9078\u3093\u3067\u3044\u308B\u3068\u601D\u3044\u307E\u3059\u304B\uFF1F",
  "\u7AF6\u5408\u306B\u306A\u308A\u305D\u3046\u306A\u5B58\u5728\u306F\uFF1F（\u5927\u624B\u4F01\u696D / \u5730\u5143\u306E\u4ED6\u793E / \u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u30FB\u500B\u4EBA\u5E97 / EC\u30B5\u30FC\u30D3\u30B9 / \u7279\u306B\u601D\u3044\u5F53\u305F\u3089\u306A\u3044）",
  "\u7AF6\u5408\u306B\u52DD\u3066\u308B\u30DD\u30A4\u30F3\u30C8\u306F\uFF1F（\u71B1\u610F / \u5C02\u9580\u6027 / \u4FA1\u683C / \u30C7\u30B6\u30A4\u30F3\u6027 / \u30B9\u30D4\u30FC\u30C9 / \u9867\u5BA2\u3068\u306E\u8DDD\u96E2\u611F\u30FB\u95A2\u4FC2\u6027）",
  "\u4ECA\u306E\u6642\u4EE3\u306B\u5171\u9CF4\u3067\u304D\u305D\u3046\u306A\u4FA1\u5024\u89B3\u306F\uFF1F（\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB / \u5730\u57DF\u5E2D\u7740 / \u81EA\u5206\u3089\u3057\u3055 / \u30B3\u30B9\u30D1 / \u60C5\u5831\u900F\u660E\u6027）",
  "\u3042\u306A\u305F\u306E\u30D6\u30E9\u30F3\u30C9\u304C\u5171\u9CF4\u3059\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F\uFF1F",
  "\u4F01\u696D\u30AB\u30C6\u30B4\u30EA\u30FC\u306F\uFF1F（\u98DF\u54C1 / \u30B5\u30FC\u30D3\u30B9 / \u5C0F\u58F2 / BtoB / \u5730\u57DF\u89B3\u5149 / \u6559\u80B2 \u306A\u3069）",
  "\u4E8B\u696D\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306F\uFF1F（BtoC / BtoB / \u4E21\u65B9）"
];

function getStep1Questions(type) {
  return step1BaseQuestions;
}

let currentIndex = 0;
const initialAnswers = [];
let userType = '';

function renderInitialQuestion() {
  const phase = document.getElementById('initial-phase');
  const resultDiv = document.getElementById('initial-result');
  phase.classList.remove('hidden');
  resultDiv.classList.add('hidden');

  const container = document.getElementById('question-container');
  container.innerHTML = '';

  const q = initialQuestions[currentIndex];
  const wrapper = document.createElement('div');
  wrapper.className = 'question';
  wrapper.innerHTML = `<p>${q}</p>`;
  const yesBtn = document.createElement('button');
  yesBtn.textContent = 'はい';
  yesBtn.className = 'btn-yes';
  yesBtn.onclick = () => recordInitialAnswer(true);
  const noBtn = document.createElement('button');
  noBtn.textContent = 'いいえ';
  noBtn.className = 'btn-no';
  noBtn.onclick = () => recordInitialAnswer(false);
  wrapper.appendChild(yesBtn);
  wrapper.appendChild(noBtn);
  container.appendChild(wrapper);
}

function recordInitialAnswer(isYes) {
  initialAnswers.push(isYes);
  currentIndex++;
  if (currentIndex < initialQuestions.length) {
    renderInitialQuestion();
  } else {
    showInitialResult();
  }
}

function calculateType() {
  let maxScore = -1;
  let selected = 'A';
  for (const key in patterns) {
    let score = 0;
    const idxList = patterns[key];
    idxList.forEach(idx => {
      if (initialAnswers[idx]) score++;
    });
    if (score > maxScore) {
      maxScore = score;
      selected = key;
    }
  }
  return selected;
}

function showInitialResult() {
  userType = calculateType();
  document.getElementById('initial-phase').classList.add('hidden');
  const resultDiv = document.getElementById('initial-result');
  resultDiv.classList.remove('hidden');
  document.getElementById('result-text').textContent = typeMessages[userType] || '';
}

document.getElementById('start-step1-button').addEventListener('click', () => {
  startStep1(userType);
});

function startStep1(type) {
  document.getElementById('initial-result').classList.add('hidden');
  const step1Div = document.getElementById('step1-phase');
  step1Div.classList.remove('hidden');
  const questions = getStep1Questions(type);
  let stepIndex = 0;
  const responses = [];
  renderStep1Question();

  document.getElementById('step1-next-button').onclick = () => {
    const input = document.getElementById('step1-input');
    responses.push(input.value);
    stepIndex++;
    if (stepIndex < questions.length) {
      renderStep1Question();
    } else {
      showStep1Result(type, responses);
    }
  };

  function renderStep1Question() {
    const container = document.getElementById('step1-question-container');
    container.innerHTML = '';
    const q = questions[stepIndex];
    const card = document.createElement('div');
    card.className = 'question';
    card.innerHTML = `<p>${q}</p><input type="text" id="step1-input" style="width:100%; padding:8px;" />`;
    container.appendChild(card);
  }
}

function showStep1Result(type, responses) {
  document.getElementById('step1-phase').classList.add('hidden');
  const resultDiv = document.getElementById('step1-result');
  resultDiv.classList.remove('hidden');
  document.getElementById('step1-result-text').textContent = 'ご回答ありがとうございました。今後の戦略立案の参考にさせていただきます。';
}

// initialize
renderInitialQuestion();
