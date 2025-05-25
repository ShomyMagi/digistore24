document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#mc_embed_signup form");
  if (!form) return;

  const emailInput = form.querySelector('input[type="email"]');

  form.addEventListener("submit", (e) => {
    if (!emailInput.value.trim()) {
      e.preventDefault();
      alert("Email is required.");
      emailInput.focus();
    }
  });
});
