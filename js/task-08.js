const formEl = document.querySelector(".login-form");

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = { mail: "", password: "" };

  if (mail === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    formData.mail = mail;
    formData.password = password;
    console.log(formData);
    event.currentTarget.reset();
  }
};

const setForm = formEl.addEventListener("submit", handleFormSubmit);
