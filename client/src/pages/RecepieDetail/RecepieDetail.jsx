import { Link, useLoaderData } from "react-router-dom";

function ReciepieDetails() {
    const recepie  = useLoaderData();
    console.info(recepie);
  return (
    <>
      <h1>{recepie.name}</h1>
      <img className="illustration" src={recepie.illustration} alt="illustration de la recette" />
      <p>Rhum : {recepie.rum.name}</p>
      <ul>
        {recepie.ingredients && recepie.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name} ({ingredient.quantity} {ingredient.unit})
          </li>
        ))}
      </ul>
      <Link to={`/recettes/${recepie.id}/edit`}>Modifier</Link>
    </>
  );
}

export default ReciepieDetails;
