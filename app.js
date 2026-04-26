const users = {
  "@haflc": {
    id: "64030689",
    status: "Неизвестный",
    reason: "Не найден в базе"
  },
  "@scam": {
    id: "999999",
    status: "Скаммер",
    reason: "Мошенник"
  }
};

function search() {
  const value = document.getElementById("input").value.toLowerCase();
  const result = document.getElementById("result");

  if (users[value]) {
    const u = users[value];
    result.innerHTML = `
      <div class="profile glass">
        <h2>${value}</h2>
        <p>ID: ${u.id}</p>
        <p>${u.status}</p>
        <p>${u.reason}</p>
      </div>
    `;
  } else {
    result.innerHTML = `
      <div class="profile glass">
        <p>Пользователь неизвестный</p>
      </div>
    `;
  }
}