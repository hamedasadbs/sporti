export const darkMode = (className, className_dark, isDark) => {
  const tag = document.getElementsByClassName(className);
  if (isDark) {
    for (let i = 0; i < tag.length; i++) {
      tag[i].classList.add(className_dark);
    }
  } else {
    for (let i = 0; i < tag.length; i++) {
      tag[i].classList.remove(className_dark);
    }
  }
};
