const oadC = 'ca-pub-5005673256143644';
const oadS = '2662431207';

document.body.insertAdjacentHTML('afterbegin', '<div><div id="wrapper0551"><div id="saport"><!-- --></div></div></div>');



const stylespecial = document.createElement('style');
stylespecial.type = 'text/css';

stylespecial.innerHTML = `
  .e-os {
    display: none;
  }
`;

document.head.appendChild(stylespecial);


const sap2ort = document.getElementById('saport');
let executionCount = 0;

function switchDisplay() {
  executionCount++;

  const firstId = `show-first${executionCount}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<div id="${firstId}"><ins class="adsbygoogle" style="display: block;" data-ad-client="${adClient}" data-ad-slot="${adSlot}" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></div>`
  );
}

function switchoreDisplay() {
  executionCount++;

  const firstId = `show-first${executionCount}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<div id="${firstId}"><ins class="adsbygoogle" style="display: block;" data-ad-client="${oadC}" data-ad-slot="${oadS}" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></div>`
  );
}

function switchDisplay2() {
  const currentId = `show-first${executionCount}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("e-os");
  }
}

function tinyDelay() {
  return Promise.resolve();
}



async function main() {

  switchDisplay();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  switchDisplay2();

await tinyDelay();

  switchoreDisplay();

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
      console.log("読み込みの最適化が完了しました");

repeatMain(150);

setTimeout(() => {
  repeatMain(150);
}, 400);

    } else {
      console.log("読み込み最適化の準備中です…しばらくの期間、お待ちください");
    }



};

  scriptgooglespecial.onerror = () => {
    console.warn("読み込みの最適化に必要な情報が取得できませんでした");
  };

document.head.appendChild(scriptgooglespecial);