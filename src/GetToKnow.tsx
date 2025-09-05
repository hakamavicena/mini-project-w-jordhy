import "./GetToKnow.css";

export default function GetToKnow() {
  return (
    <section id="about" className="banner-container">
      <h2 className="section-title">Get to Know Us</h2>

      <div className="banner overlay">
        <img src="../public/jordhy.jpeg" />
        <div className="banner-text">
          <h2>Branenda Jordhy</h2>
          <p>Jor, IF'24 yang percaya segelintir baris kode bisa bikin hal keren terjadi.
            Lagi suka explore data science, webdev, dan iOS biar makin jago bikin sesuatu yang kepake.
            Fun fact: dia suka banget nih, sama Keshi, matcha, listening to Clairo, reading, tv series Dark, Game of Thrones,
            bubble tea dan kucing. Lately, dia lagi suka jogging di saraga biar ga blackout pas kelas OR.
          </p>
          {/* <a href="#" className="banner-link">Connect with me ›</a> */}
        </div>
      </div>

      <div className="banner overlay ">
        <img src="../public/hakam.jpeg" />
        <div className="banner-text">
          <h2>Hakam Avicena</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.</p>
          {/* <a href="#" className="banner-link">Connect with me ›</a> */}
        </div>
      </div>

    </section>
  );
}
