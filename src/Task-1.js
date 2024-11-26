import { getImageUrl } from "./utils.js";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        src={getImageUrl("szV5sdG")}
        alt="Maria Skłodowska-Curie"
        detail={[
          {
            title: "Profession",
            content: "physicist and chemist",
          },
          {
            title: "Awards",
            content:
              "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          },
          {
            title: "Discovered",
            content: "polonium (chemical element)",
          },
        ]}
      />
      <Profile
        name="Katsuko Saruhashi"
        src={getImageUrl("YfeOqp2")}
        alt="Katsuko Saruhashi"
        detail={[
          {
            title: "Profession",
            content: "geochemist",
          },
          {
            title: "Awards",
            content: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
          },
          {
            title: "Discovered",
            content: "a method for measuring carbon dioxide in seawater",
          },
        ]}
      />
    </div>
  );
}

function Profile({ name, src, alt, detail }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <Img src={src} alt={alt} />
      <Details detail={detail} />
    </section>
  );
}

function Img({ src, alt }) {
  return <img className="avatar" src={src} alt={alt} width={70} height={70} />;
}

function Details({ detail }) {
  return (
    <ul>
      {detail.map((detail, index) => (
        <li key={index}>
          <b>{detail.title}:</b> {detail.content}
        </li>
      ))}
    </ul>
  );
}
