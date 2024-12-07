import React, { useState, useEffect } from "react";
import './../styles/App.css';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]); // Array of inputted numbers
  const [sum, setSum] = useState(0);         // Running total sum
  const [inputValue, setInputValue] = useState(""); // Current input value

  // Asynchronous effect to recalculate sum when numbers array changes
  useEffect(() => {
    const calculateSum = async () => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    };
    calculateSum();
  }, [numbers]);

  // Handle number input
  const handleAddNumber = (e) => {
    e.preventDefault();
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedValue]);
      setInputValue(""); // Clear input field
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Sum Calculator</h1>

      {/* Input form */}
      <form onSubmit={handleAddNumber}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          style={{ padding: "5px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "5px 10px", marginLeft: "5px" }}>
          Add
        </button>
      </form>

      {/* Display the sum */}
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Total Sum:</strong> {sum}
      </div>

      {/* Display the numbers */}
      {numbers.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <strong>Numbers:</strong> {numbers.join(", ")}
        </div>
      )}
    </div>
  );
};

export default SumCalculator;
