document.getElementById("submit-btn").addEventListener("click", function () {
  window.location.href = "https://t.co/NWDtLTM3K2";
});

const phoneNumberInput = document.getElementById("phone-number");
const submitButton = document.getElementById("submit-btn");

// وظيفة لتحديث حالة الزر
function updateButtonState() {
  submitButton.disabled = phoneNumberInput.value.trim() === "";
}

// إضافة مستمع حدث للتحديث عند إدخال أي شيء في حقل الرقم
phoneNumberInput.addEventListener("input", updateButtonState);

// استدعاء الدالة لتحديث حالة الزر عند تحميل الصفحة
updateButtonState();
