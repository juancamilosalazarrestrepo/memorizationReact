import { memo } from "react";
import "../App.css";

const ContadorHijo = () => {
  console.log("hijo contador se renderiza");
  return (
    <div className="containerHijo">
      <h3>Hijo del contador</h3>
    </div>
  );
};

export default memo(ContadorHijo);
