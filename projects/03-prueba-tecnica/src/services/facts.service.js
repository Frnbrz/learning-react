const baseUrl = "https://catfact.ninja/fact";

export const getFact = async () => {
  return await fetch(baseUrl).then((response) => response.json());
};
