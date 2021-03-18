(function () {
  const darkModeCheckbox = document.getElementById("dark-mode-toggle");
  const toggleDarkMode = (checkbox) => {
    document.body.classList.toggle("dark", checkbox.checked);
  };

  toggleDarkMode(darkModeCheckbox);
  darkModeCheckbox.addEventListener(
    "change",
    toggleDarkMode.bind(darkModeCheckbox)
  );
})();
