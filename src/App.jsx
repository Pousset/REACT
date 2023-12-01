import { useState, useEffect } from "react";
import "./App.css";

const apiKey = vite.env.API_KEY;

function MainTitle({ title }) {
  return <h1>{title}</h1>;
}

function App() {
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://usohxzugllyjrrubjzmk.supabase.co/rest/v1/pizzas",
        {
          method: "GET",
          headers: {
            apikey: apiKey
          }
        }
      );

      const data = await response.json();

      setPizzas(data);
    }

    loadData();
  }, []);

  //dynamicTitle = variable d'état
  //setDynamicTitle = méthode qui permet de mettre à jour la variable d'état
  //useState = hook qui permet de gérer des variables d'état
  //useState("Negosud") = la valeur d'origine de la variable d'état
  const [dynamicTitle, setDynamicTitle] = useState("Negosud");

  const [pizzas, setPizzas] = useState([]);

  function updateTitle() {
    //dynamicTitle = "Hello, World!";//ne marche pas
    //car dynamicTitle est une variable d'état immutable

    setDynamicTitle(dynamicTitle === "Negosud" ? "Hello, World!" : "Negosud");
  }

  return (
    <div className="App">
      <button onClick={updateTitle}>Click</button>
      <MainTitle title={dynamicTitle} />

      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;