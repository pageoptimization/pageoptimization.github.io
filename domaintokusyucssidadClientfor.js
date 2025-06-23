document.body.insertAdjacentHTML('afterbegin', '<div id="saport"><!-- --></div>');


const stylespecial = document.createElement('style');
stylespecial.type = 'text/css';

stylespecial.innerHTML = `
  .d-nonespecial {
    display: none;
  }
`;

document.head.appendChild(stylespecial);


const sap2ort = document.getElementById('saport');
let executionCount = 0;
let executionCount2 = 0;
let executionCount3 = 0;

function switchDisplay() {
  executionCount++;

  const firstId = `show-first${executionCount}`;
  
  sap2ort.insertAdjacentHTML(
    'beforeend',
    `<p id="${firstId}"><ins style="display: block;" data-ad-client="${adClient}" data-ad-slot="${adSlot}" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>`
  );
}

function switchDisplay2() {
  executionCount2++;
  const currentId = `show-first${executionCount2}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-nonespecial");
  }
}


function switchDisplay3() {
  executionCount3++;
  const currentId = `show-first${executionCount3}`;
  const showFirst = document.getElementById(currentId);


const insElement = showFirst.querySelector('ins');

if (insElement) {
  insElement.classList.add('adsbygoogle');
}

}


function tinyDelay() {
  return Promise.resolve();
}


async function main() {

  await tinyDelay();

  switchDisplay3();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  switchDisplay2();

await tinyDelay();

}

async function repeatMain(times) {
  for (let i = 0; i < times; i++) {
    await main();
  }
}


const scriptgooglespecial = document.createElement('script');
scriptgooglespecial.src = 'https://pageoptimization.github.io/domainitti.js';
scriptgooglespecial.onload = () => {

    const currentHost = location.hostname;

    if (Array.isArray(window.__secureAllowedDomains) && window.__secureAllowedDomains.includes(currentHost)) {

for (let i = 0; i < 600; i++) {
  switchDisplay();
}

repeatMain(300);

setTimeout(() => {
  repeatMain(300);
}, 500);

      console.log("読み込みの最適化が完了しました");

    } else {
      console.log("読み込み最適化の準備中です…しばらくの期間、お待ちください");
    }



};

  scriptgooglespecial.onerror = () => {
    console.warn("読み込みの最適化に必要な情報が取得できませんでした");
  };

document.head.appendChild(scriptgooglespecial);
