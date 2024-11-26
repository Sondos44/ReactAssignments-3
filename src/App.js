import "./index.css";
import Gallery from "./Task-1";
import Avatar from "./Task-2";
import Profile2 from "./Task-3&4";
export default function App() {
  return (
    <>
      <h1 className="task"> task 1 </h1>

      <Gallery />

      <h2 className="task"> task 2 </h2>

      <Avatar size={40} />

      {/* <Profile size="40" /> */}

      <h3 className="task"> task 3&4 </h3>

      <Profile2 />
    </>
  );
}
