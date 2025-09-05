import "./Activities.css";

export default function Activities() {
  const data = [
    { title: "Main PS", desc: "Jadi ajang adu skill sambil ketawa bareng, bisa main bola, nba 2k, dan game compe/santai lainnya. 🎮👾" },
    { title: "Olahraga", desc: "Entah jogging sore, tenis, badminton, golf, atau olahraga lainnya. Bikin badan sehat dan ga bungkuk karena ngoding depan layar mulu. 🏀🏐🎾🏌🏻‍♂️⛹🏼‍♂️ " },
    { title: "Nobar", desc: "Nonton film bareng biar makin seru dan rame. (FYI: sequel film The Conjuring lagi tayang, siapa berani ikut? 😱🍿)" },
    { title: "Board games", desc: "Main bareng biar makin seru, bisa serius mikirin strat atau sekadar ketawa bareng dari momen kocaknya. 🎲♟️" },
    { title: "Hackathon", desc: "Ikut lomba bareng, seru ngulik ide, ngoding ga tidur, dan ngerasain capek + puasnya bikin project jadi nyata. 💻⌨️" },
    { title: "Perfomative male", desc: "Baca buku bareng, labubu, matcha, hunting coffeeshop or strolling around Bandung (kami anak gane baru). 🍵🚶🏼" },
  ];

  return (
    <section className="activities">
      <div className="activities-container">
        <h2 className="activities-title">Activities</h2>
        <div className="activities-list">
          {data.map((item, idx) => (
            <div className="activities-row" key={idx}>
              <div className="activities-col title">{item.title}</div>
              <div className="activities-col desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
