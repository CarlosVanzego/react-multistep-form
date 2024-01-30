import { ReactNode } from "react" // Importing ReactNode type

// Define props type for FormWrapper component
type FormWrapperProps = {
  title: string; // Title of the form
  children: ReactNode; // Child components
}
// FormWrapper component definition
export function FormWrapper({ title, children }: 
  FormWrapperProps) {
    return (
      <>
    <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem"}}>{title}</h2>
    <div 
      style={{ 
        display: "grid", 
        gap: "1rem .5rem", 
        justifyContent: "flex-start", 
        gridTemplateColumns: "auto minmax(auto, 400px"
        }}
      >
        
        {children}
      </div>
    </>
  )
}