const phoneNumberInput = document.getElementById("phone-number");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();


    // استخدام SweetAlert عند النجاح

    window.location.href = "https://t.co/NWDtLTM3K2";

});

document.addEventListener("DOMContentLoaded", () => {
  // تغيير صورة العلم بناءً على الاختيار
  document
    .getElementById("service-provider2")
    .addEventListener("change", function () {
      const selectedValue = this.value;
      const flagImg = document.getElementById("flag");

      if (selectedValue === "om") {
        flagImg.src = "imgs/عمان.png";
      } else if (selectedValue === "uae") {
        flagImg.src = "imgs/امارات.png";
      } else if (selectedValue === "kuwait") {
        flagImg.src = "imgs/الكويت.png";
      }
    });
});
