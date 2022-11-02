import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import changeNum from "./reducers/upDown";
import { IncAction, DecAction } from "./Actions";
const App = () => {
  const currState = useSelector((data) => data.changeNum);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <span
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(DecAction())}
            >
              <span>-</span>
            </span>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={currState}
            />
            <span
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(IncAction())}
            >
              <span>+</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
