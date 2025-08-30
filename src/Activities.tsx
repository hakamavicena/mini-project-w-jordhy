import "./Activities.css";

export default function Activities() {
  const data = [
    { title: "Act 1", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Act 2", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Act 3", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Act 4", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Act 5", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Act 6", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
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
