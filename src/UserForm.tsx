import { FormWrapper } from "./FormWrapper"; // Importing FormWrapper component

// Define props type for UserForm component
type UserData = {
  firstName: string; // First name
  lastName: string; // Last name
  age: string; // Age
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void; // Function to update form fields
}

// UserForm component definition
export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Details"> {/* FormWrapper for user details */}
      <label>First Name</label> {/* Input for first name */}
      <input 
        autoFocus 
        required 
        type="text" 
        value={firstName} 
        onChange={e => updateFields({ firstName: e.target.value })} 
      />
      <label>Last Name</label> {/* Input for last name */}
      <input 
        required 
        type="text" 
        value={lastName} 
        onChange={e => updateFields({ lastName: e.target.value })} 
      />
      <label>Age</label> {/* Input for age */}
      <input 
        required 
        min={1} 
        type="number" 
        value={age} 
        onChange={e => updateFields({ age: e.target.value })} 
      />
    </FormWrapper>
  );
}