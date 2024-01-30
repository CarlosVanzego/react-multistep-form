import { ReactElement, useState } from "react"; // Importing ReactElement and useState from React library

// Custom hook useMultistepForm definition
export function useMultistepForm(steps: ReactElement[]) {
  // State to manage current step index
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Function to move to the next step
  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i; // Prevent moving beyond the last step
      return i + 1; // Move to the next step
    });
  }

  // Function to move to the previous step
  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i; // Prevent moving beyond the first step
      return i - 1; // Move to the previous step
    });
  }

  // Function to go to a specific step
  function goTo(index: number) {
    setCurrentStepIndex(index); // Set current step index to the specified index
  }

  // Return an object containing various properties and functions for managing multistep form
  return {
    currentStepIndex, // Current step index
    step: steps[currentStepIndex], // Current step component
    steps, // Array of all steps
    isFirstStep: currentStepIndex === 0, // Boolean indicating if current step is the first step
    isLastStep: currentStepIndex === steps.length - 1, // Boolean indicating if current step is the last step
    goTo, // Function to go to a specific step
    next, // Function to move to the next step
    back, // Function to move to the previous step
  };
}