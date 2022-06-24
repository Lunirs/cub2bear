const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
}
  
  
  document.querySelector(".logout-btn").addEventListener("click", logout);