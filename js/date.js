jalaliDatepicker.startWatch();
const tourStartDate = document.getElementById("tour-start-date"),
  tourReturnDate = document.getElementById("tour-return-date");

function getTodayJalaliDate() {
  const today = new Date();
  const jalaliDate = jalaali.toJalaali(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );
  return `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;
}
document.addEventListener("DOMContentLoaded", function () {
  tourStartDate.value = getTodayJalaliDate();
  tourReturnDate.value = getTodayJalaliDate();
});
