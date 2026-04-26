const users = {
  "@admin": {
    id: "123456",
    status: "Гарант",
    reason: "Проверенный пользователь"
  },
  "@scammer": {
    id: "999999",
    status: "Скаммер",
    reason: "Обман в сделках"
  }
};

function search() {
  const value = document.getElementById("input").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (users[value]) {
    const u = users[value];
    result.innerHTML = `
      <div class="card">
        <h2>${value}</h2>
        <p>ID: ${u.id}</p>
        <p class="${u.status === "Скаммер" ? "bad" : "good"}">${u.status}</p>
        <p>${u.reason}</p>
      </div>
    `;
  } else {
    result.innerHTML = `
      <div class="card">
        <p>Пользователь неизвестный</p>
      </div>
    `;
  }
}