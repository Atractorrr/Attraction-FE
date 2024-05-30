// prettier-ignore

;(function () {
  const currentTheme = window.localStorage.getItem('theme') ?? 'system';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    return;
  }
  if (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    return;
  }
})()
