
export const searchByName = async (name) => {
    const response = await fetch(`/api/search/name/${name}`);
    return response.json();
  };
  
  export const searchByArticul = async (articul) => {
    const response = await fetch(`/api/search/articul/${articul}`);
    return response.json();
  };
  