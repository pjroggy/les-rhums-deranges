import { useLoaderData } from "react-router-dom";

import RecepiesList from "../../components/RecepieList/RecepieList";

function Recepies() {
  const { recepies } = useLoaderData();

  return (
    <>
      <h1>Recettes</h1>
      <RecepiesList recepies={recepies} />
    </>
  );
}

export default Recepies;
