import React from "react";
import ReactDOM from "react-dom";
import { PersistaModal } from "./lib";

const App = () => {
  return (
    <div>
      <PersistaModal
        isOpen
        onClose={() => {}}
        actionId="test"
        onNegativeResult={() => {}}
        onPositiveResult={() => {}}
        endTimeoutDuration={1000}
        onResponse={(response) => {}}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
