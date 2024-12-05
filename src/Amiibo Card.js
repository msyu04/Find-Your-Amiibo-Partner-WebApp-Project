export default function AmiiboCard({ info, info2 }) {
  if (info) {
    return (
      <section id="amiibo_card">
        <h1 className="character_info">{info.name}</h1>
        <h1 className="character_info">Game Series: {info.amiiboSeries}</h1>
        <p>
          <img
            src={info.image}
            alt={info.name}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
        </p>
        <h2 className="character_info">Release Date: {info.release[info2]}</h2>
      </section>
    );
  }
}
