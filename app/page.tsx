import HeaderExercises from "./componentes/HeaderExercises";
import ExerciseList from "./componentes/ExerciseList";

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#15151a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <HeaderExercises />
      <ExerciseList />
    </main>
  );
}
