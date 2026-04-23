import {useState} from "react";

export default function Form() {
    // One state object for all fields
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        // Get the 'name' and 'value' from the input that triggered the change
        const {name, value} = event.target;

        // Update the state object dynamically
        setFormData((prevData) => ({
            ...prevData,      // Copy all existing fields
            [name]: value     // Update only the field that changed
        }));
    };

    return (
        <form>
            <label htmlFor="firstName">First Name:</label>
            <input
                name="firstName" // The 'name' must match the state key!
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    );
}