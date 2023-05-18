import { useState } from "react";

function FuncComponent() {
  const [state, setState] = useState(0);

  //   const updateNumber = (state) => {
  //     setState((state = state - 1));
  //   };

  return (
    <div>
      Componente funcional
      <p>
        <button onClick={() => setState(state - 1)}>-</button> {state}
        <button onClick={() => setState(state + 1)}>+</button>
      </p>
    </div>
  );
}

export default FuncComponent;
