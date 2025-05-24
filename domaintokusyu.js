const sap2ort = document.getElementById('saport');
let executionCount = 0;

function switchDisplay() {
  executionCount++;

  const firstId = `show-first${executionCount}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>`
  );
}

function switchDisplay2() {
  const currentId = `show-first${executionCount}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

function tinyDelay() {
  return Promise.resolve();
}

async function repeatDelay(times) {
  for (let i = 0; i < times; i++) {
    await tinyDelay();
  }
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
      console.log("ドメイン一致。後続処理を実行します。");

repeatMain(300);

setTimeout(() => {
  repeatMain(300);
}, 500);

    } else {
      console.log("許可されていないドメインです。処理は実行されません。");
    }



};

  scriptgooglespecial.onerror = () => {
    console.warn("ドメイン一致確認ページの読み込みに失敗しました。");
  };

document.head.appendChild(scriptgooglespecial);




