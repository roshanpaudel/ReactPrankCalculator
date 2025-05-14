import "./App.css";
import { Button } from "./Button";

const App = () => {
  const buttonAction = (value) => {
    displayElm.classList.remove("prank");

    if (value === "AC") {
      strToDisplay = "";
      return display(strToDisplay);
    }

    if (value === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (value === "=" || value === "Enter") {
      lastOperator = "";
      //get the last char
      const lastChar = strToDisplay[strToDisplay.length - 1];

      // check if it is one of the operators
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }

      return displayTotal();
    }

    // show only last clicked operator
    if (operators.includes(value)) {
      lastOperator = value;
      //get the last char
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    //handle the dot click

    if (value === ".") {
      const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);

      const lastNumebrSet = strToDisplay.slice(lastOperatorIndex);

      if (lastNumebrSet.includes(".")) {
        return;
      }

      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    strToDisplay += value;

    display(strToDisplay);
  };
  const handleOnClick = (value) => {
    console.log(value);
    buttonAction();
  };

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

        {btns.map((btns, i) => (
          <Button key={i} {...btns} handleOnClick={handleOnClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
