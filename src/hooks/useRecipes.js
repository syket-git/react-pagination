import { useEffect, useState } from "react";

const useRecipes = () => {
  const limit = 5;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchRecipes = () => {
      fetch(`https://dummyjson.com/recipes?limit=${5}&skip=${skip}`)
        .then((res) => res.json())
        .then((data) => {
          setTotal(data.total);
          setRecipes(data.recipes);
        })
        .catch(() => {
          setRecipes([]);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchRecipes();
  }, [limit, skip]);

  return {
    loading,
    skip,
    setSkip,
    recipes,
    total,
  };
};
export default useRecipes;
