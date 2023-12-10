document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname;

  nav.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }

    switch (currentPage) {
      case "/index.html":
      case "/":
        if (element.id == "hm") {
          element.classList.add("active");
        }
        break;
      case "features.html":
      case "/features/features.html":
        if (element.id == "ft") {
          element.classList.add("active");
        }
        break;
      case "/pricing/pricing.html":
        if (element.id == "pr") {
          element.classList.add("active");
        }
        break;
    }
  });
});
