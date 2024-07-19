import { Form, Input, useLoaderData } from "react-router-dom";

function RecepieEdit() {
  const { recepie, rums, ingredients } = useLoaderData();

  return (
    <>
      <Form method="put">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" defaultValue={recepie.name} />
        <Input
          inputStyle="box"
          labelStyle="inline"
          type="file"
          placeholder="Selectionnez un fichier ..."
          defaultValue={recepie.image}
          label="File upload"
        />
        <label htmlFor="rum_id">Rhum</label>
        <select id="rumId" name="rumId" defaultValue={recepie.rum_id}>
          {rums.map((rum) => (
            <option key={rum.id} value={rum.id}>
              {rum.name}
            </option>
          ))}
        </select>
        <label htmlFor="ingredient">Ingredient</label>
        {ingredients.map((ingredient) => (
          <input
            key={ingredient.id}
            type="text"
            id="ingredient"
            name="ingredient"
            defaultValue={ingredient.id}
          />
        ))}
        <button type="submit">Modifier</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer</button>
      </Form>
    </>
  );
}

export default RecepieEdit;
