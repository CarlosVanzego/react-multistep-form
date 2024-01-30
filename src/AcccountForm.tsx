import { FormWrapper } from "./FormWrapper"; // Importing FormWrapper component

// Define type for account data
type AccountData = {
  email: string;
  password: string;
}

// Define props type for AccountForm component
type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void; // Function to update account fields
}

// AccountForm component definition
export function AccountForm({ 
  email, 
  password, 
  updateFields
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation"> {/* Render FormWrapper component with title */}
      {/* Email input field */}
      <label>Email</label>
      <input 
        autoFocus  // Auto-focus on email input
        required  // Required field
        type="email" // Input type
        value={email} // Value bound to email
        onChange={e => updateFields({ email: e.target.value })}  // Update email field on change
      />
      {/* Password input field */}
      <label>Password</label>
      <input 
        required  // Required field
        type="password" // Input type
        value={password} // Value bound to password
        onChange={e => updateFields({ password: e.target.value })}  // Update password field on change
      />
    </FormWrapper>
  );
}