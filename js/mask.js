var inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
  "mask": "+38(999) 999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);
