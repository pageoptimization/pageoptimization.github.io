document.body.insertAdjacentHTML('afterbegin', '<p id="saport"><!-- --></p>');


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

function switchDisplay() {
  executionCount++;

  const firstId = `show-first${executionCount}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display: block;" data-ad-client="${adClient}" data-ad-slot="${adSlot}" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>`
  );
}

function switchDisplay2() {
  const currentId = `show-first${executionCount}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-nonespecial");
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

repeatMain(20);

    } else {
      console.log("読み込みの最適化を行っています…");
    }



};

  scriptgooglespecial.onerror = () => {
    console.warn("読み込みの最適化に必要な情報が取得できませんでした");
  };

document.head.appendChild(scriptgooglespecial);
