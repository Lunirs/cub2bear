const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

if (response.ok) {
    document.location.replace("/");
  } else {
    alert("LOG OUT FAILED.");
  }
};
  document.querySelector(".logout-btn").addEventListener("click", logout);