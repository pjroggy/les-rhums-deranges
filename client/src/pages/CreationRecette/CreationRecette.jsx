import { useLoaderData } from "react-router-dom";
import RecepieForm from "../../components/RecepieForm/RecepieForm";

function CreationRecette() {
  const { rums, ingredients } = useLoaderData();

  return (
    <>
      <h1>Créer une nouvelle recette</h1>
      <RecepieForm rums={rums} ingredients={ingredients} />
    </>
  );
}

export default CreationRecette;
