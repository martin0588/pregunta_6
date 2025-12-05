import ExerciseCard from "./ExerciseCard";

const exercises = [
  {
    title: "Puxada frontal",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/puxada-frontal.jpg",
  },
  {
    title: "Remada curvada",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/remada-curvada.jpg",
  },
  {
    title: "Remada unilateral",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/remada-unilateral.jpg",
  },
  {
    title: "Levantamento terra",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "/levantamento-terra.jpg",
  },
];

export default function ExerciseList() {
  return (
    <section style={{ padding: "0 24px 24px 24px" }}>
      {exercises.map((e) => (
        <ExerciseCard
          key={e.title}
          title={e.title}
          subtitle={e.subtitle}
          imageSrc={e.imageSrc}
        />
      ))}
    </section>
  );
}
