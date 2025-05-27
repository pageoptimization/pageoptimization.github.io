// 実行したい関数群（ここだけ書き換えればOK）
const scriptsToRun = [
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
  () => (adsbygoogle = window.adsbygoogle || []).push({}),
];

// Worker のコード
const workerBlob = new Blob([`
  self.onmessage = function (e) {
    self.postMessage({ code: e.data.code });
  };
`], { type: 'application/javascript' });

const workerURL = URL.createObjectURL(workerBlob);

// 実行開始（即時）
Promise.all(
  scriptsToRun.map(fn => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerURL);
      worker.onmessage = (e) => {
        try {
          const f = eval('(' + e.data.code + ')');
          f();
          resolve();
        } catch (err) {
          reject(err);
        }
        worker.terminate();
      };
      worker.onerror = reject;
      worker.postMessage({ code: fn.toString() });
    });
  })
);
