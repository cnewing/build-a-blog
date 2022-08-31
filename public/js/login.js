async function loginFormHandler(event) {
  event.preventDefault();

  const user = document.querySelector("#userI");
  const password = document.querySelector("#passI");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      user,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
