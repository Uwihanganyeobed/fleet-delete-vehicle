// Handle active tab highlight on load
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();

  // Highlight the active tab based on current page
  document.querySelectorAll(".tab").forEach((tab) => {
    const href = tab.getAttribute("href");
    if (href === currentPage) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Handle filter reset buttons
  document.querySelectorAll(".btn-outline").forEach((resetBtn) => {
    resetBtn.addEventListener("click", () => {
      const form = resetBtn.closest(".filters");
      form.querySelectorAll("input, select").forEach((el) => {
        if (el.tagName === "SELECT") {
          el.selectedIndex = 0;
        } else {
          el.value = "";
        }
      });
    });
  });

  // View and Edit button actions
  document.querySelectorAll(".view-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      alert("View details coming soon...");
    })
  );

  document.querySelectorAll(".edit-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      alert("Edit functionality coming soon...");
    })
  );
});
