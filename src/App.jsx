import "./App.css";
import { Button } from "./Button";

const App = () => {
  const btns = [
    {
      cls: "btn-ac",
      label: "AC",
    },
    {
      cls: "btn-c",
      label: "C",
    },

    {
      cls: "btn-per",
      label: "%",
    },
    {
      cls: "btn-divide",
      label: "/",
    },
    {
      cls: "btn-7",
      label: "7",
    },
    {
      cls: "btn-8",
      label: "8",
    },
    {
      cls: "btn-9",
      label: "9",
    },
    {
      cls: "btn-x",
      label: "x",
    },
    {
      cls: "btn-4",
      label: "4",
    },
    {
      cls: "btn-5",
      label: "5",
    },
    {
      cls: "btn-6",
      label: "6",
    },
    {
      cls: "btn-minus",
      label: "-",
    },
    {
      cls: "btn-1",
      label: "1",
    },
    {
      cls: "btn-2",
      label: "2",
    },
    {
      cls: "btn-3",
      label: "3",
    },
    {
      cls: "btn-plus",
      label: "+",
    },
    {
      cls: "btn-0",
      label: "0",
    },
    {
      cls: "btn-dot",
      label: ".",
    },
    {
      cls: "btn-equal",
      label: "=",
    },
  ];
  return (
    <div className="wrapper flex-center">
      <div className="calculator">
        <div className="display arbutus-regular">0.0</div>

        <Button cls="btn-ac" label="AC" />
        <Button cls="btn-c" label="C" />
        <Button cls="btn-per" label="%" />
        <Button cls="btn-divide" label="/" />
        <Button cls="btn-7" label="7" />
        <Button cls="btn-8" label="8" />
        <Button cls="btn-9" label="9" />
        <Button cls="btn-x" label="x" />
        <Button cls="btn-4" label="4" />
        <Button cls="btn-5" label="5" />
        <Button cls="btn-6" label="6" />
        <Button cls="btn-minus" label="-" />
        <Button cls="btn-1" label="1" />
        <Button cls="btn-2" label="2" />
        <Button cls="btn-3" label="3" />
        <Button cls="btn-plus" label="+" />
        <Button cls="btn-0" label="0" />
        <Button cls="btn-dot" label="." />
        <Button cls="btn-equal" label="=" />
      </div>
    </div>
  );
};

export default App;
