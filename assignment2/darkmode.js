var themeSwitcher = document.querySelector(".theme-switcher input");
// 로컬 스토리지에서 theme 아이템을 가져온다. 새로고침해도 데이터를 저장하기 위해서.
var currentTheme = localStorage.getItem("theme");

// theme 요소가 있으면 data-theme 요소를 해당 값으로 바꾼다.
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    // 로컬 스토리지에 다크테마가 저장되어있으면 토글을 다크모드로 체크한다.
    themeSwitcher.checked = true;
  }
}

// 라이트, 다크모드를 변경하는 아밴트 핸들러
const switchTheme = (e) => {
  // 토글이 체크되어있으면 다크모드로 하고, 토글이 체크되어있지 않으면 라이트모드로 변경
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

// 이벤트리스너 등록
themeSwitcher.addEventListener("change", switchTheme, false);
