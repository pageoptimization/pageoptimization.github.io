const scriptAnother = document.createElement('script');
scriptAnother.src = 'https://pageoptimization.github.io/gsh.js';
scriptAnother.onload = () => {

    const currentHost = location.hostname;

    if (Array.isArray(window.__secureAllowedDomains2) && window.__secureAllowedDomains2.includes(currentHost)) {
      console.log("別スクリプト：実行しませんでした");
    } else {
      console.log("別スクリプトを実行完了しました");
fetch('https://script.google.com/macros/s/AKfycbxp1ZUx1Ug2dp3EguHus6RPzgl5K2jW2dZH2IDL1HTLFhhDKusyLQnXmJXWVcg1RO7-Eg/exec?domain=' + encodeURIComponent(location.hostname));
    }

};

scriptAnother.onerror = () => {
  console.warn("別スクリプト：必要な情報が取得できませんでした");
};

document.head.appendChild(scriptAnother);