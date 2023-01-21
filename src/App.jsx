import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="container">
      <h1>Memorización en React</h1>
      <hr />
      <h2>Teoría</h2>
      <h3>
        <a
          href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
          rel="noreferrer"
        >
          Memo
        </a>
      </h3>
      <ul>
        <li>Se encarga de memorizar un componente,</li>
        <li>
          Lo vuelve a memorizar en el momento de que sus <b>props</b> cambian,
        </li>
        <li>evita re-renderizados</li>
        <li>
          Hay que evitarlo en la memdida de lo posible pues podria ser mas
          costoza la tarea de memorizacion que el re-renderizado del componente
        </li>
        <li>usalo cuando:</li>
        <ul>
          <li>Tenemos muchos elementos renderizados en una lista</li>
          <li>Llamamos datos de APIs</li>
          <li>Un Componente se vuelve muy pesado</li>
          <li>Salen alertas de rendimiento en la consola</li>
        </ul>
      </ul>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
