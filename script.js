// script.js
// This script implements the ENJIN marketing diagnosis tool with 12 yes/no questions,
// classification into 5 types, followed by a step1 4C analysis with 10 questions.

document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    { text: 'あなたの会社には、明確なブランドメッセージがありますか？' },
    { text: 'SNSやWebで情報発信を継続していますか？' },
    { text: '自社の強みを言語化できていますか？' },
    { text: '第三者メディアで紹介された経験がありますか？' },
    { text: '見込み顧客へのアプローチ方法は明確ですか？' },
    { text: 'リピート顧客向けの施策をしていますか？' },
    { text: 'マーケティングや広報の専任担当がいますか？' },
    { text: '新規顧客獲得の打ち手がありますか？' },
    { text: '外部パートナーとの連携経験がありますか？' },
    { text: 'WebサイトやSNSに投資・工夫をしていますか？' },
    { text: '半年以内に市場や自社の調査を実施しましたか？' },
    { text: '短期的だけでなく中長期的な課題を語れますか？' }
  ];
  
  const patterns = {
    A: [2,5,9,1,4,10,11],
    B: [0,2,3,5,9,10],
    C: [0,2,5,1,4,9,11],
    D: [1,3,9,2,5,7,10],
    E: [0,5,8,3,4,7,11]
  };

  const summaries = {
    A: {
      title: 'がんばり屋だけど不器用型',
      good: '商品の魅力や企業の想いは強く、地道な努力を積み重ねています。',
      improve: '情報発信やブランド整理が不足しているため、魅力が伝わっていません。',
      example: '近年では、地元のカフェがSNSを活用して世界観やこだわりを発信し、ファンを増やしました。'
    },
    B: {
      title: '職人気質な静かな名店型',
      good: '高品質な商品やサービスを提供しており、コアファンが存在します。',
      improve: '外部への発信が少なく、認知度が広がりにくい状況です。',
      example: '老舗和菓子店がSNSやオンライン販売に挑戦し、ファン層を拡大しています。'
    },
    C: {
      title: '世界観はあるのに発信不足型',
      good: 'ブランドの世界観やコンセプトがしっかりしています。',
      improve: '情報発信の頻度やルートが不足しており、ターゲットに届いていません。',
      example: 'クラフトビールメーカーが動画やイベントを活用し、ブランドの魅力を広げました。'
    },
    D: {
      title: '意外と選ばれない惜しい型',
      good: '商品自体は悪くなく、潜在的な魅力があります。',
      improve: '競合との違いが十分伝わっていないため、比較で選ばれにくい傾向です。',
      example: '地域の雑貨店がデザインやストーリー性を強化し、顧客の支持を獲得しました。'
    },
    E: {
      title: '愛されてるのに広まらない型',
      good: 'コアファンや常連客からは愛されています。',
      improve: '拡散策や戦略的な仕組みがなく、成長が頭打ちになりがちです。',
      example: 'ローカルなパン屋がファンコミュニティとコラボ企画を行い、知名度を拡大しました。'
    }
  };

  const step1Questions = [
    { text: '顧客はどのような価値に魅力を感じていますか（価格・品質・共感など）？', category: 'Customer' },
    { text: '顧客の声や反応を把握する仕組みがありますか？', category: 'Customer' },
    { text: '自社のこだわりや誇りを明確に説明できますか？', category: 'Company' },
    { text: '自社を選ぶ理由をお客様に聞いたことがありますか？', category: 'Company' },
    { text: '競合他社と比べた優位点を理解していますか？', category: 'Competitor' },
    { text: '競合の動向や施策を定期的に調べていますか？', category: 'Competitor' },
    { text: '時代や社会のトレンドを意識した発信をしていますか？', category: 'Culture' },
    { text: '地域や社会への貢献活動を発信していますか？', category: 'Culture' },
    { text: '市場調査や顧客調査を定期的に行っていますか？', category: 'Company' },
    { text: '中長期的な目標や課題を共有し、行動に移していますか？', category: 'Company' }
  ];

  const initialPhase = document.getElementById('initial-phase');
  const questionContainer = document.getElementById('question-container');
  const nextBtn = document.getElementById('next-button');
  const initialResult = document.getElementById('initial-result');
  const resultContent = document.getElementById('result-content');
  const startStep1Btn = document.getElementById('start-step1-button');

  const step1Phase = document.getElementById('step1-phase');
  const step1Container = document.getElementById('step1-question-container');
  const step1NextBtn = document.getElementById('step1-next-button');

  const step1Result = document.getElementById('step1-result');
  const finalContent = document.getElementById('final-result-content');

  function renderInitialQuestions() {
    questionContainer.innerHTML = '';
    questions.forEach((q, index) => {
      const div = document.createElement('div');
      div.className = 'question';
      div.innerHTML = `
        <p>${index + 1}. ${q.text}</p>
        <label><input type="radio" name="q${index}" value="yes"> はい</label>
        <label><input type="radio" name="q${index}" value="no"> いいえ</label>
      `;
      questionContainer.appendChild(div);
    });
  }

  function calculateType(answers) {
    let bestType = null;
    let maxScore = -1;
    for (const type in patterns) {
      const indices = patterns[type];
      let score = 0;
      indices.forEach(i => {
        if (answers[i] === 'yes') score++;
      });
      if (score > maxScore) {
        maxScore = score;
        bestType = type;
      }
    }
    return bestType;
  }

  function showInitialResult(type) {
    const info = summaries[type];
    resultContent.innerHTML = `
      <h3>${info.title}</h3>
      <p><strong>良い点：</strong>${info.good}</p>
      <p><strong>改善すべき点：</strong>${info.improve}</p>
      <p><strong>参考事例：</strong>${info.example}</p>
    `;
    initialPhase.classList.add('hidden');
    initialResult.classList.remove('hidden');
  }

  function renderStep1Questions() {
    step1Container.innerHTML = '';
    step1Questions.forEach((q, index) => {
      const div = document.createElement('div');
      div.className = 'question';
      div.innerHTML = `
        <p>${index + 1}. ${q.text}</p>
        <label><input type="radio" name="s${index}" value="yes"> はい</label>
        <label><input type="radio" name="s${index}" value="no"> いいえ</label>
      `;
      step1Container.appendChild(div);
    });
  }

  function calculateStep1Result() {
    const counts = { Customer: 0, Company: 0, Competitor: 0, Culture: 0 };
    step1Questions.forEach((q, index) => {
      const ans = document.querySelector(`input[name="s${index}"]:checked`);
      if (ans && ans.value === 'yes') {
        counts[q.category]++;
      }
    });
    let topCategory = 'Company';
    let max = counts.Company;
    for (const cat in counts) {
      if (counts[cat] > max) {
        max = counts[cat];
        topCategory = cat;
      }
    }
    return topCategory;
  }

  function showStep1Result(category) {
    let message = '';
    switch (category) {
      case 'Customer':
        message = '顧客理解を深め、ニーズやインサイトに基づいた提案を強化しましょう。';
        break;
      case 'Company':
        message = '自社の強みや理念を明確にし、ブランドストーリーを磨きましょう。';
        break;
      case 'Competitor':
        message = '競合分析を徹底し、差別化できるポイントや体験を設計しましょう。';
        break;
      case 'Culture':
        message = '社会や文化の潮流と共鳴するメッセージを作り、共感を広げましょう。';
        break;
    }
    finalContent.innerHTML = `
      <p><strong>AIによる提案：</strong>${message}</p>
      <p>詳しいコミュニケーション戦略・戦術については、ぜひENJIN TOKYOにご相談ください。</p>
      <p><a href="mailto:info@enjintokyo.com">info@enjintokyo.com</a></p>
    `;
    step1Phase.classList.add('hidden');
    step1Result.classList.remove('hidden');
  }

  renderInitialQuestions();

  nextBtn.addEventListener('click', function() {
    const answers = [];
    let allAnswered = true;
    questions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        answers.push(selected.value);
      } else {
        allAnswered = false;
      }
    });
    if (!allAnswered) {
      alert('全ての質問に回答してください。');
      return;
    }
    const type = calculateType(answers);
    showInitialResult(type);
  });

  startStep1Btn.addEventListener('click', function() {
    renderStep1Questions();
    initialResult.classList.add('hidden');
    step1Phase.classList.remove('hidden');
  });

  step1NextBtn.addEventListener('click', function() {
    const category = calculateStep1Result();
    showStep1Result(category);
  });
});
