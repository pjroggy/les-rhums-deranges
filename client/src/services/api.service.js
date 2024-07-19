import { redirect } from "react-router-dom";

export async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
}

export async function sendData(url, data, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: http,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return null;
  }
}

export async function handleFormAction(
  request,
  actionFunction,
  successRedirectPath,
  localStorageHandler = null
) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const result = await actionFunction(data);
  if (result.success) {
    if (localStorageHandler) {
      localStorageHandler(result);
    }
    return redirect(successRedirectPath);
  }
  return null;
}