import { useState } from "react";
import { Search, ShieldCheck, AlertTriangle, Crown, X } from "lucide-react";
import "./styles.css";

const mockUsers: any = {
  "@admin": {
    username: "@admin",
    id: "123456789",
    status: "Гарант",
    reason: "Проверенный гарант базы",
    addedAt: "26.04.2026",
    addedBy: "@moderator",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=Admin",
  },
  "@scammer": {
    username: "@scammer",
    id: "987654321",
    status: "Скаммер",
    reason: "Жалобы на обман в сделках",
    addedAt: "20.04.2026",
    addedBy: "@support",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=Scam",
  },
};

export default function App() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const [report, setReport] = useState(false);
  const [light, setLight] = useState(false);

  function search() {
    const key = query.trim().toLowerCase();
    const found = mockUsers[key];

    if (found) {
      setUser(found);
      setNotFound(false);
    } else {
      setUser(null);
      setNotFound(true);
    }
  }

  return (
    <main className={light ? "app light" : "app"}>
      <div className="blob one" />
      <div className="blob two" />

      <header>
        <div>
          <p className="mini">Telegram Mini App</p>
          <h1>ScamCheck Base</h1>
          <span>Проверка пользователей на скам</span>
        </div>

        <button className="theme" onClick={() => setLight(!light)}>
          {light ? "🌙" : "☀️"}
        </button>
      </header>

      <section className="search glass">
        <Search size={20} />
        <input
          placeholder="@username или Telegram ID"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={search}>Найти</button>
      </section>

      <section className="stats">
        <div className="stat glass"><b>1248</b><span>Всего в базе</span></div>
        <div className="stat glass"><b>342</b><span>Проверенные</span></div>
        <div className="stat glass"><b>58</b><span>Гаранты</span></div>
        <div className="stat glass"><b>221</b><span>Скаммеры</span></div>
        <div className="stat glass"><b>93</b><span>Сомнительные</span></div>
        <div className="stat glass"><b>41</b><span>Рассылка</span></div>
      </section>

      {user && (
        <section className="profile glass">
          <img src={user.avatar} className="avatar" />
          <h2>{user.username}</h2>
          <p>ID: {user.id}</p>

          <div className={user.status === "Скаммер" ? "badge bad" : "badge good"}>
            {user.status}
          </div>

          <div className="info">
            <b>Описание / причина</b>
            <p>{user.reason}</p>
            <small>Добавлен: {user.addedAt}</small>
            <small>Кто добавил: {user.addedBy}</small>
          </div>
        </section>
      )}

      {notFound && (
        <section className="unknown glass">
          <AlertTriangle />
          <h3>Пользователь неизвестный</h3>
          <p>Рекомендуем использовать проверенных гарантов в сделке.</p>
        </section>
      )}

      <button className="reportBtn" onClick={() => setReport(true)}>
        Пожаловаться
      </button>

      <footer className="bottom glass">
        <div>
          <b>Безопасная сделка</b>
          <p>Проверяйте пользователей перед оплатой.</p>
        </div>
        <Crown />
      </footer>

      {report && (
        <div className="modalBg">
          <div className="modal glass">
            <button className="close" onClick={() => setReport(false)}>
              <X size={20} />
            </button>

            <h2>Жалоба</h2>
            <input placeholder="username / ID" />
            <input placeholder="Причина" />
            <input placeholder="Доказательства / ссылка" />
            <textarea placeholder="Комментарий" />
            <button className="reportBtn">Отправить</button>
          </div>
        </div>
      )}
    </main>
  );
}