export const handleButtonClick = (value, currentDisplay, setDisplay) => {
  if (currentDisplay === 'Error') {
    // If the display shows 'Error', reset it with the new value
    if (value === 'C') {
      setDisplay('0'); // Clear the display
    } else if (value === '=') {
      setDisplay('Error'); // Prevent '=' from doing anything after an error
    } else {
      setDisplay(value); // Start a new expression
    }
    return;
  }

  if (value === 'C') {
    setDisplay('0'); // Clear the display
  } else if (value === '=') {
    try {
      // Replace symbols with operators
      const sanitizedExpression = currentDisplay
        .replace(/÷/g, '/')
        .replace(/x/g, '*');

      // Evaluate the expression
      const result = Function(
        `"use strict"; return (${sanitizedExpression})`
      )();
      setDisplay(result.toString());
    } catch {
      setDisplay('Error'); // Handle invalid expressions
    }
  } else {
    // Append the button value to the display
    setDisplay(currentDisplay === '0' ? value : currentDisplay + value);
  }
};
