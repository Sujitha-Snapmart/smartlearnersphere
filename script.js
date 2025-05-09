function showTab(subject) {
  hideTabs();
  document.getElementById(subject).style.display = "block";
}

function hideTabs() {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => (tab.style.display = "none"));
}

function enableAdmin() {
  const password = document.getElementById("adminPassword").value;
  if (password === "mySecret123") {
    document.getElementById("adminSection").style.display = "block";
  } else {
    alert("Incorrect password");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("vocabForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const word = document.getElementById("word").value.trim();
      const meaning = document.getElementById("meaning").value.trim();
      const example = document.getElementById("example").value.trim();

      if (word && meaning && example) {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
          <p><strong>${word}</strong>: ${meaning}</p>
          <p><em>Example:</em> ${example}</p><hr>
        `;
        document.getElementById("vocabList").appendChild(listItem);
        form.reset();
      }
    });
  }
});
