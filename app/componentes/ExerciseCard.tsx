type ExerciseCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export default function ExerciseCard({ title, subtitle, imageSrc }: ExerciseCardProps) {
  return (
    <article
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        marginBottom: "16px",
        borderRadius: "16px",
        backgroundColor: "#2a2a2f",
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "12px",
          objectFit: "cover",
          marginRight: "12px",
        }}
      />

      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: "12px",
          color: "#999999",
          marginBottom: "4px",
        }}>
          item
        </div>

        <h2 style={{ fontSize: "18px", margin: 0 }}>{title}</h2>
        <p style={{ fontSize: "14px", color: "#b0b0b0", margin: 0 }}>
          {subtitle}
        </p>
      </div>

      <div style={{ fontSize: "20px", marginLeft: "12px", color: "#b0b0b0" }}>
        &gt;
      </div>
    </article>
  );
}
