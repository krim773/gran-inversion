
export default function Card({ firstName, lastName, age, hairColor, increaseAge }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "300px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={increaseAge}>Increase Age for {firstName} {lastName}</button>
    </div>
  );
}
