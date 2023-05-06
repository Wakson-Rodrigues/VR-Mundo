import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bloco}>
        <h1 className={styles.titulo}>Espaço</h1>
        <h2 className={styles.subtitulo}>Viaje pelo universo sem sair do sofá</h2>

        <p className={styles.paragrafo}>
        Sinta a emoção de viajar pelo espaço em sua casa, entao apertem os cintos e desfrute com a experiencia de realidade virtual aqui no VR MUNDO
        </p>
      </div>
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/874tzml-dSw?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
