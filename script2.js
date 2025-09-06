const questions = [
  { text: '\u8d8a\u793e\u306b\u306f\u660e\u78ba\u306a\u30d6\u30e9\u30f3\u30c9\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u3042\u308a\u307e\u3059\u304b\uff1f' },
  { text: '\u30b9\u30de\u30db\u3084Web\u3092\u901a\u3058\u305f\u60c5\u5831\u767a\u4fe1\u3092\u7d9a\u7d9a\u7684\u306b\u884c\u3048\u3066\u3044\u307e\u3059\u304b\uff1f' },
  { text: '\u7af6\u5408\u3068\u6bd4\u8f03\u3057\u305f\u969b\u306e\u300c\u81ea\u793e\u306e\u5f37\u307f\u300d\u3092\u8a00\u8a9e\u5316\u3067\u304d\u3066\u3044\u307e\u3059\u304b\uff1f' },
  { text: '\u7b2c\u4e09\u8005\u30e1\u30c7\u30a3\u30a2\u3067\u7d39\u4ecb\u3055\u308c\u305f\u7d4c\u9a13\u304c\u3042\u308a\u307e\u3059\u304b\uff1f' },
  { text: '\u898b\u8fbc\u307f\u5ba2\u306b\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u624b\u6bb5\u306f\u660e\u78ba\u3067\u3059\u304b\uff1f' },
  { text: '\u9858\u5ba2\u306e\u7d9a\u7d9a\u5229\u7528\u30fb\u30d5\u30a1\u30f3\u5316\u306b\u5411\u3051\u305f\u5de5\u592b\u3092\u3057\u3066\u3044\u307e\u3059\u304b\uff1f' },
  { text: '\u793e\u5185\u306b\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u3084\u5e83\u5831\u306e\u5c02\u4efb\u62c5\u5f53\u304c\u3044\u307e\u3059\u304b\uff1f' },
  { text: '\u65b0\u898f\u5ba2\u7372\u5f97\u306e\u6253\u3061\u624b\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u304b\uff1f' },
  { text: '\u5916\u90e8\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u306e\u9023\u643a\u7d4c\u9a13\u304c\u3042\u308a\u307e\u3059\u304b\uff1f' },
  { text: 'Web\u30b5\u30a4\u30c8\u3084SNS\u3078\u306e\u6295\u8cc7\u30fb\u6539\u5584\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u304b\uff1f' },
  { text: '\u534a\u5e74\u4ee5\u5185\u306b\u5e02\u5834\u3084\u81ea\u793e\u306e\u72b6\u6cc1\u8abf\u67fb\u3092\u5b9f\u65bd\u3057\u307e\u3057\u305f\u304b\uff1f' },
  { text: '\u77ed\u671f\u3060\u3051\u3067\u306a\u304f\u4e2d\u9577\u671f\u306e\u8ab2\u984c\u3092\u8a9e\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304b\uff1f' }
];

const typePatterns = {
  ganbariya: {
    name: '\u304c\u3093\u3070\u308a\u5c4b\u3060\u3051\u3069\u4e0d\u5668\u7528\u578b',
    keys: [2,5,9,10],
    summary: '\u52b4\u52b4\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u4f1d\u3048\u65b9\u3084\u767a\u4fe1\u65b9\u6cd5\u306b\u8ab2\u984c\u304c\u3042\u308a\u307e\u3059\u3002',
    improvement: '\u30d6\u30e9\u30f3\u30c9\u306e\u4f1d\u3048\u65b9\u3084\u767a\u4fe1\u6240\u3092\u898b\u76f4\u3057\u307e\u3057\u3087\u3046\u3002',
    example: '\u5730\u57df\u306e\u5c0f\u3055\u306a\u30ab\u30d5\u30a7\u304cSNS\u767a\u4fe1\u3067\u30d5\u30a1\u30f3\u3092\u5897\u3084\u3057\u305f\u4e8b\u4f8b\u306a\u3069'
  },
  shokunin: {
    name: '\u8077\u4eba\u6c17\u8cea\u306a\u9759\u304b\u306a\u540d\u5e97\u578b',
    keys: [0,2,6,10],
    summary: '\u8cea\u306f\u9ad8\u3044\u304c\u5916\u90e8\u767a\u4fe1\u304c\u8db3\u308a\u307e\u305b\u3093\u3002',
    improvement: '\u30e1\u30c7\u30a3\u30a2\u63a8\u5968\u3084PR\u6d3b\u52d5\u3092\u5f37\u5316\u3057\u307e\u3057\u3087\u3046\u3002',
    example: '\u8001\u85ac\u5e97\u304c\u30c6\u30ec\u30d3\u53d7\u5f53\u3067\u58f2\u4e0a\u5897\u3068\u306a\u3063\u305f\u4e8b\u4f8b'
  },
  sekai: {
    name: '\u4e16\u754c\u89b3\u306f\u3042\u308b\u306e\u306b\u767a\u4fe1\u4e0d\u8db3\u578b',
    keys: [0,2,5,7],
    summary: '\u4e16\u754c\u89b3\u3084\u60f3\u3044\u306f\u3042\u308b\u304c\u767a\u4fe1\u4e0d\u8db3\u3067\u3059\u3002',
    improvement: 'SNS\u3084Web\u3067\u4e16\u754c\u89b3\u3092\u5b9a\u671f\u7684\u306b\u4f1d\u3048\u307e\u3057\u3087\u3046\u3002',
    example: '\u30af\u30e9\u30d5\u30c8\u30d3\u30fc\u30eb\u4f01\u696d\u304c\u30d6\u30ed\u30b0\u3067\u30d5\u30a1\u30f3\u5c64\u3092\u62e1\u5927\u3057\u305f\u4e8b\u4f8b'
  },
  oshii: {
    name: '\u610f\u5916\u3068\u9078\u3070\u308c\u306a\u3044\u60b2\u3057\u3044\u578b',
    keys: [1,3,7,9],
    summary: '\u9732\u51fa\u306f\u3042\u308b\u304c\u9078\u3070\u308c\u306b\u304f\u3044\u72b6\u6cc1\u3067\u3059\u3002',
    improvement: '\u7af6\u5408\u3068\u306e\u9055\u3044\u3092\u660e\u78ba\u306b\u3057\u307e\u3057\u3087\u3046\u3002',
    example: '\u7f8e\u5bb9\u5ba4\u304c\u30b5\u30fc\u30d3\u30b9\u306e\u72ec\u81ea\u6027\u3092\u6253\u3061\u51fa\u3057\u30d5\u30a1\u30f3\u3092\u7372\u5f97\u3057\u305f\u4e8b\u4f8b'
  },
  aisare: {
    name: '\u611b\u3055\u308c\u3066\u308b\u306e\u306b\u5e83\u307e\u3089\u306a\u3044\u578b',
    keys: [0,5,8,11],
    summary: '\u71b1\u5fc3\u306a\u30d5\u30a1\u30f3\u306f\u3044\u307e\u3059\u304c\u5e83\u304c\u308a\u307e\u305b\u3093\u3002',
    improvement: '\u30d5\u30a1\u30f3\u30d9\u30fc\u30b9\u306e\u53e3\u30b3\u30df\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5897\u3084\u3057\u307e\u3057\u3087\u3046\u3002',
    example: '\u30ed\u30fc\u30ab\u30eb\u30d6\u30e9\u30f3\u30c9\u304c\u30d5\u30a1\u30f3\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3092\u6d3b\u7528\u3057\u305f\u4e8b\u4f8b'
  }
};

let currentIndex = 0;
let answers = [];

function computeType() {
  let maxType = null;
  let maxScore = -1;
  for (const key in typePatterns) {
    const { keys } = typePatterns[key];
    let score = 0;
    for (const idx of keys) {
      if (answers[idx]) score++;
    }
    if (score > maxScore) {
      maxScore = score;
      maxType = key;
    }
  }
  return maxType;
}

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById('question-text').textContent = q.text;
}

function handleAnswer(value) {
  answers[currentIndex] = value;
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const type = computeType();
  const data = typePatterns[type];
  document.getElementById('result-title').textContent = data.name;
  document.getElementById('result-summary').innerHTML =
    '<strong>\u826f\u3044\u70b9:</strong> ' + data.summary +
    '<br><strong>\u6539\u5584\u30dd\u30a4\u30f3\u30c8:</strong> ' + data.improvement +
    '<br><strong>\u53c2\u8003\u4e8b\u4f8b:</strong> ' + data.example;
  document.getElementById('step0-container').classList.add('hidden');
  document.getElementById('result-container').classList.remove('hidden');
}

function analyseFreeText() {
  const text = document.getElementById('free-text').value.toLowerCase();
  const categories = {
    customer: ['\u9867\u5ba2', '\u30e6\u30fc\u30b6\u30fc', '\u304a\u5ba2\u69d8', '\u30cb\u30fc\u30ba'],
    company: ['\u81ea\u793e', '\u5f53\u793e', '\u30d6\u30e9\u30f3\u30c9', '\u5f37\u307f'],
    competitor: ['\u7af6\u5408', '\u30e9\u30a4\u30d0\u30eb', '\u4ed6\u793e'],
    culture: ['\u5e02\u5834', '\u6587\u5316', '\u30c8\u30ec\u30f3\u30c9', '\u6642\u4ee3']
  };
  const suggestions = {
    customer: '\u9867\u5ba2\u306e\u8996\u70b9\u3092\u4e2d\u5fc3\u306b\u63d0\u4f9b\u4fa1\u5024\u3092\u8a2d\u8a08\u3057\u307e\u3057\u3087\u3046\u3002',
    company: '\u81ea\u793e\u306e\u5f37\u307f\u3092\u660e\u78ba\u306b\u3057\u3001\u30b9\u30c8\u30fc\u30ea\u30fc\u3068\u3057\u3066\u4f1d\u3048\u307e\u3057\u3087\u3046\u3002',
    competitor: '\u7af6\u5408\u3068\u306e\u5dee\u5225\u5316\u30dd\u30a4\u30f3\u30c8\u3092\u5f37\u8abf\u3057\u307e\u3057\u3087\u3046\u3002',
    culture: '\u6642\u4ee3\u306e\u7a7a\u6c17\u611f\u3084\u4fa1\u5024\u89b3\u306b\u5408\u308f\u305b\u305f\u63d0\u6848\u304c\u6709\u52b9\u3067\u3059\u3002'
  };
  let bestCat = 'customer';
  let bestCount = 0;
  for (const key in categories) {
    let count = 0;
    for (const word of categories[key]) {
      if (text.includes(word)) count++;
    }
    if (count > bestCount) {
      bestCat = key;
      bestCount = count;
    }
  }
  const message = suggestions[bestCat];
  document.getElementById('final-message').textContent = message;
  document.getElementById('step1-container').classList.add('hidden');
  document.getElementById('final-container').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('yes-btn').addEventListener('click', () => handleAnswer(true));
  document.getElementById('no-btn').addEventListener('click', () => handleAnswer(false));
  document.getElementById('go-to-step1-btn').addEventListener('click', () => {
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('step1-container').classList.remove('hidden');
  });
  document.getElementById('generate-suggestion-btn').addEventListener('click', analyseFreeText);
  showQuestion();
});
