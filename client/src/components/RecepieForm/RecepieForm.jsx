import PropTypes from "prop-types";

import "./RecepieForm.scss";

import { Form } from "react-router-dom";

function RecepieForm({ rums, ingredients }) {
  return (
    <Form className="form-recepie" method="post" encType="multipart/form-data">
      <label className="label-recepie" htmlFor="name">
        Nouvelle recette
      </label>{" "}
      <input className="input-recepie" type="text" id="name" name="name" />
      <label className="label-recepie" htmlFor="rumId">
        Illustration
      </label>
      <input
        className="input-illustration-recepie"
        type="file"
        id="illustration"
        name="illustration"
        placeholder="Sélectionnez un fichier ..."
        label="File upload"
      />
      <label className="label-recepie" htmlFor="rumId">
        Rhum
      </label>
      <select className="select-recepie" id="rumId" name="rumId" required>
        <option value="">Sélectionnez un rhum</option>
        {rums.map((rum) => (
          <option className="option-recepie" key={rum.id} value={rum.id}>
            {rum.name}
          </option>
        ))}
      </select>
      <label className="label-recepie" htmlFor="ingredients">
        Ingrédients
      </label>
      <select className="select-recepie" id="ingredients" name="ingredientId">
        <option value="">Sélectionnez un ingrédient</option>
        {ingredients.map((ing) => (
          <option className="option-recepie" key={ing.id} value={ing.id}>
            {ing.name}
          </option>
        ))}
      </select>
      <label className="label-recepie" htmlFor="quantity">
        quantité
      </label>
      <input
        className="input-recepie"
        id="quantity"
        type="number"
        name="quantity"
        placeholder="Quantité"
      />
      <button className="button-recepie" type="submit">
        Ajouter
      </button>
    </Form>
  );
}

RecepieForm.propTypes = {
  rums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,

      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,

      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default RecepieForm;
