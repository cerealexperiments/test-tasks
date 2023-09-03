import useCategories from "./hooks/useCategories";

function App() {
  const categoriesQuery = useCategories();
  console.log(categoriesQuery.data);
  return <div></div>;
}

export default App;
