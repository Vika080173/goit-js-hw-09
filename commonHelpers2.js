import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("submit",m);e.addEventListener("input",l);function m(t){if(t.preventDefault(),e.elements.email.value.trim()!==""&&e.elements.message.value.trim()!==""){const s=JSON.parse(localStorage.getItem(a));console.log(s),t.currentTarget.reset(),localStorage.removeItem(a)}}function l(t){const s={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(s))}function n(){const t=JSON.parse(localStorage.getItem(a));t&&(e.elements.email.value=t.email,e.elements.message.value=t.message)}n();
//# sourceMappingURL=commonHelpers2.js.map