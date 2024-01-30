import { FormEvent, useState } from "react"; // Importing necessary modules
import { AccountForm } from "./AcccountForm"; // Importing AccountForm component
import { AddressForm } from "./AddressForm"; // Importing AddressForm component
import { useMultistepForm } from "./useMultistepForm"; // Importing custom hook useMultistepForm
import { UserForm } from "./UserForm"; // Importing UserForm component

// Define type for form data
type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

// Initial form data
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

// App component definition
function App() {
  const [data, setData] = useState(INITIAL_DATA); // State to manage form data

  // Function to update form fields
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  // Destructure values from custom hook useMultistepForm
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = 
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  // Function to handle form submission
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next(); // Move to next step if not the last step
    alert("Successful Account Creation"); // Display alert for successful account creation
  }

  // Render the App component
  return (
    <div 
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        {/* Display current step and step count */}
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem"}}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step} {/* Render current step */}
        <div 
          style={{ 
            marginTop: "1rem", 
            display: "flex", 
            gap: ".5rem", 
            justifyContent: "flex-end"
          }}
        >
          {/* Back button */}
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {/* Next/Finish button */}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App; // Export App component as default