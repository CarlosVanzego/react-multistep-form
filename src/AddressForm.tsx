import { FormWrapper } from "./FormWrapper"; // Importing FormWrapper component

// Define type for address data
type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
}

// Define props type for AddressForm component
type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void; // Function to update address fields
}

// AddressForm component definition
export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address"> {/* Render FormWrapper component with title */}
      {/* Street input field */}
      <label>Street</label>
      <input
        autoFocus  // Auto-focus on street input
        required  // Required field
        type="text" // Input type
        value={street} // Value bound to street
        onChange={e => updateFields({ street: e.target.value })} // Update street field on change
      />
      {/* City input field */}
      <label>City</label>
      <input
        required  // Required field
        type="text" // Input type
        value={city} // Value bound to city
        onChange={e => updateFields({ city: e.target.value })} // Update city field on change
      />
      {/* State input field */}
      <label>State</label>
      <input
        required  // Required field
        type="text" // Input type
        value={state} // Value bound to state
        onChange={e => updateFields({ state: e.target.value })} // Update state field on change
      />
      {/* Zip input field */}
      <label>Zip</label>
      <input
        required  // Required field
        type="text" // Input type
        value={zip} // Value bound to zip
        onChange={e => updateFields({ zip: e.target.value })} // Update zip field on change
      />
    </FormWrapper>
  );
}