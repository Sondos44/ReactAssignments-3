export default function Profile2() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
        <Btn color="danger"> Click </Btn>
      </Card>

      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
        <Btn color="primary"> Click </Btn>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="card">
      <div>{children}</div>
    </div>
  );
}

function Btn({ color, children }) {
  return (
    <button
      className={
        color === "primary"
          ? "btn-primary"
          : color === "secondary"
          ? "btn-secondary"
          : color === "danger"
          ? "btn-danger"
          : null
      }
    >
      {children}
    </button>
  );
}
