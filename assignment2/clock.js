const analogHour = document.querySelector(".analog_hour"); // 해당 클래스이름을 가진 요소를 가져옵니다
const analogMinute = document.querySelector(".analog_minute"); // 해당 클래스이름을 가진 요소를 가져옵니다
const analogSecond = document.querySelector(".analog_second"); // 해당 클래스이름을 가진 요소를 가져옵니다

setInterval(() => {}, 1000); // 1초 간격으로 콜백함수를 실행합니다

new Date(); // 현재 시간 정보를 가지고 있는 객체입니다
new Date().getMonth(); // 0이 1월, 1이 2월입니다

// 00 : 00의 형식을 맞추기 위해 한자리 수는 앞에 0을 채워주는 함수입니다
const fillZero = (num) => {
  num = num + ""; // 문자열로 변환
  // 한 자리 수면 앞에 0 붙이기
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
};
