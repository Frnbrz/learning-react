const baseUrl  = "https://cataas.com/cat/says/";

export const getImage = async (fact) => {
  return await fetch(`${baseUrl}${fact}`).then((response) => response.json());
};
