export default function HeaderExercises() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "24px",
        color: "#ffffff",
      }}
    >
      <div>
        <span
          style={{
            fontSize: "12px",
            opacity: 0.7,
            display: "block",
          }}
        >
          info
        </span>
        <h1
          style={{
            fontSize: "28px",
            margin: 0,
            marginTop: "4px",
          }}
        >
          Exercícios
        </h1>
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: 500,
        }}
      >
        4
      </div>
    </header>
  );
}
