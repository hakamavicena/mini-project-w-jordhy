import "./GetToKnow.css";
import { useOnScreen } from "./use-on-screen";

export default function GetToKnow() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const [titleRef, isTitleVisible] = useOnScreen(options);
  const [jordhyRef, isJordhyVisible] = useOnScreen(options);
  const [hakamRef, isHakamVisible] = useOnScreen(options);
  return (
    <section id="about" className="banner-container ">
      <h2
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className={`section-title ${isTitleVisible ? "animate-visible" : ""}`}
      >
        Get to Know Us
      </h2>

      <div
        ref={jordhyRef as React.RefObject<HTMLDivElement>}
        className={`banner overlay jordhy ${
          isJordhyVisible ? "animate-visible" : ""
        }`}
      >
        <img src="../public/jordhy.jpeg" />
        <div className="banner-text">
          <h2>Branenda Jordhy</h2>
          <p>
            Jor, IF'24 yang percaya segelintir baris kode bisa bikin hal keren
            terjadi. Lagi suka explore data science, webdev, dan iOS biar makin
            jago bikin sesuatu yang kepake. Fun fact: dia suka banget nih, sama
            Keshi, matcha, listening to Clairo, reading, tv series Dark, Game of
            Thrones, bubble tea dan kucing. Lately, dia lagi suka jogging di
            saraga biar ga blackout pas kelas OR.
          </p>
          {/* <a href="#" className="banner-link">Connect with me ›</a> */}
        </div>
      </div>

      <div
        ref={hakamRef as React.RefObject<HTMLDivElement>}
        className={`banner overlay hakam ${
          isHakamVisible ? "animate-visible" : ""
        }`}
      >
        <img src="../public/hakam.jpeg" />
        <div className="banner-text">
          <h2>Hakam Avicena</h2>
          <p>
            Haloo kak! Kenalin lagi aku Hakam IF'24. Aku saat ini lagi belajar
            webdev khususnya backend (pls kak mulai dr mana yah hehe🥹) dan data
            science nih. Aku punya hobii mainn gitarr, larii, sama mainn gamee,
            kuy main bareng🤠 Kalau laguu aku suka lagu-lagunya John Mayer dan
            top 3 movie menurutku La La Land, Train Bullet, samaa Click 😆 Salam
            kenall kakkk semoga bisa semakin gacorr yah!!😎😎
          </p>
          {/* <a href="#" className="banner-link">Connect with me ›</a> */}
        </div>
      </div>
    </section>
  );
}
