const baseUrl = "https://catfact.ninja/fact";

export const getFact = () => {
  return fetch(baseUrl).then((res) => res.json())
};