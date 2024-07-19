import { sendData } from "./api.service";

const addRecipe = async (data) => {
  try {
    const { name, rumId, illustration, ...rest } = data;
    const ingredients = Object.keys(rest)
      .filter((key) => key.startsWith("ingredient"))
      .map((key) => rest[key]);

    const payload = {
      name,
      rumId,
      illustration,
      ingredients,
    };

    const url = "/api/arranged_rum";
    const response = await sendData(url, payload, "POST");
    if (response.status === 201) {
      return { success: true };
    }
    throw new Error("Invalid response from server");
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export default addRecipe;
