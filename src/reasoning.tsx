import "./Reasoning.css";
import { useOnScreen } from "./use-on-screen";

export default function Reasoning() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const [titleRef, isTitleVisible] = useOnScreen(options);
  const [jordhyRef, isJordhyVisible] = useOnScreen(options);
  const [hakamRef, isHakamVisible] = useOnScreen(options);
  return (
    <section className="reasoning">
      <div className="reasoning-container">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`reasoning-title ${
            isTitleVisible ? "animate-visible" : ""
          }`}
        >
          Why Kak Alvin?
        </h2>

        <div className="reasoning-grid">
          <div
            ref={jordhyRef as React.RefObject<HTMLDivElement>}
            className={`reasoning-card jordhy ${
              isJordhyVisible ? "animate-visible" : ""
            }`}
          >
            <p>
              Buatku, kakak asuh itu mirip peran mentor di series Start-Up,
              seseorang yang bisa kasih arahan, dorongan, dan insight berharga
              supaya langkah yang ku ambil lebih terarah. Punya mentor bikin
              perjalanan kuliah ga terasa sendirian, apalagi sekarang ada Hakam
              juga, jadi ada tempat buat diskusi dan tanya langsung dari
              pengalaman nyata. Aku pengen belajar bukan cuma soal akademik
              (survive di IF) atau skill, tapi gimana cara hadapin tantangan,
              lihat peluang, karir, dan berkembang lebih pd. <br />
              <span className="name">~ Jordhy</span>
            </p>
          </div>

          <div
            ref={hakamRef as React.RefObject<HTMLDivElement>}
            className={`reasoning-card hakam ${
              isHakamVisible ? "animate-visible" : ""
            }`}
          >
            <p>
              Akuu udah tau kakak dari TEC dan udah jadi IT staff juga di bawah
              kakak. aku merasa kalau kakak bisa bantu aku berkembang lebih jauh
              kerenn lagii. Aku juga ingin bisa main dan belajar barengg sama
              kakak. Aku harap pokoknyaa per-kasuh dan desuh-an ini bisa membuat
              satu sama lain berkembang dan semakin keren lagii. Semangatt kakkk
              and jorrr!! <br />
              <span className="name">~ Hakam</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
