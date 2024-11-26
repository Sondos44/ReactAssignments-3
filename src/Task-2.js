import { getImageUrl } from "./utils.js";

export default function Profile({ size }) {
  return (
    <Avatar
      size={size}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, "b")}
      alt={person.name}
      width={size < 90 ? "s" : "b"}
      height={size}
    />
  );
}
