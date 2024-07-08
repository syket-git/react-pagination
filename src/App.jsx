import Pagination from "./components/Pagination";
import RecipeCard from "./components/RecipeCard";
import useRecipes from "./hooks/useRecipes";

export default function App() {
  const { recipes, skip, setSkip, total } = useRecipes();

  return (
    <div className="my-10 px-10">
      <div className="font-bold flex gap-10 justify-center ">
        {recipes.map((recipe, i) => {
          return <RecipeCard {...recipe} key={i} />;
        })}
      </div>
      <Pagination skip={skip} setSkip={setSkip} total={total} />
    </div>
  );
}
