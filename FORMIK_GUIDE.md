# Formik Form Validation Guide

## What is Formik?

Formik is a popular library that simplifies form state management and validation in React. It handles:
- Form state management
- Validation (with built-in Yup support)
- Error handling
- Field touch tracking
- Form submission

## Installation

```bash
npm install formik yup
```

## Key Concepts

### 1. **useFormik Hook**
The main hook for managing form state and validation.

```javascript
const formik = useFormik({
    initialValues: { /* initial form values */ },
    validationSchema: Yup.object({ /* validation rules */ }),
    onSubmit: (values) => { /* handle form submission */ }
})
```

### 2. **formik.values**
Object containing current form field values.
```javascript
formik.values.username  // Current username value
formik.values.remarks   // Current remarks value
```

### 3. **formik.errors**
Object containing validation error messages for each field.
```javascript
formik.errors.username  // Error message for username (if any)
```

### 4. **formik.touched**
Object tracking which fields have been touched (blurred).
```javascript
formik.touched.username  // true if field was blurred
```

### 5. **formik.handleChange**
Function to handle input changes.
```javascript
<input onChange={formik.handleChange} name="username" />
```

### 6. **formik.handleBlur**
Function to mark field as touched when user leaves the field.
```javascript
<input onBlur={formik.handleBlur} name="username" />
```

### 7. **formik.handleSubmit**
Function to handle form submission with validation.
```javascript
<form onSubmit={formik.handleSubmit}>
```

### 8. **formik.resetForm()**
Resets form values to initial values.
```javascript
formik.resetForm();
```

## Validation with Yup

Yup is a schema validation library that works great with Formik.

### Basic Validation Rules

```javascript
const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be at most 20 characters")
        .required("Username is required"),
    
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    
    rating: Yup.number()
        .min(1, "Rating must be at least 1")
        .max(5, "Rating must be at most 5")
        .required("Rating is required"),
    
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required")
})
```

## Example Usage

### Your CommentsForm Component

```javascript
import { useFormik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be at most 20 characters")
        .required("Username is required"),
    remarks: Yup.string()
        .min(5, "Remarks must be at least 5 characters")
        .max(500, "Remarks must be at most 500 characters")
        .required("Remarks are required"),
    rating: Yup.number()
        .min(1, "Rating must be at least 1")
        .max(5, "Rating must be at most 5")
        .required("Rating is required")
})

export default function CommentsForm({ addNewComment }) {
    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("Form Submitted:", values);
            addNewComment(values);
            formik.resetForm();
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* Username */}
            <label htmlFor="username">Username:</label>
            <textarea
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="username"
                style={{
                    borderColor: formik.touched.username && formik.errors.username 
                        ? "red" 
                        : "black"
                }}>
            </textarea>
            {formik.touched.username && formik.errors.username && (
                <p style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.username}
                </p>
            )}
            <br /> <br />

            {/* Remarks */}
            <label htmlFor="remarks">Remarks:</label>
            <textarea
                name="remarks"
                value={formik.values.remarks}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="remarks"
                style={{
                    borderColor: formik.touched.remarks && formik.errors.remarks 
                        ? "red" 
                        : "black"
                }}>
            </textarea>
            {formik.touched.remarks && formik.errors.remarks && (
                <p style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.remarks}
                </p>
            )}
            <br /> <br />

            {/* Rating */}
            <label htmlFor="rating">Ratings:</label>
            <input 
                type="number" 
                name="rating" 
                id="rating" 
                value={formik.values.rating} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min="1" 
                max="5"
                style={{
                    borderColor: formik.touched.rating && formik.errors.rating 
                        ? "red" 
                        : "black"
                }} />
            {formik.touched.rating && formik.errors.rating && (
                <p style={{ color: "red", fontSize: "12px" }}>
                    {formik.errors.rating}
                </p>
            )}
            <br /> <br />

            <button type="submit">Submit</button>
        </form>
    )
}
```

## Step-by-Step Breakdown

1. **Setup Validation Schema**: Define validation rules using Yup
2. **Create useFormik Hook**: Pass initial values, validation schema, and submit handler
3. **Bind Form Elements**: 
   - Use `formik.values.fieldName` for input values
   - Use `formik.handleChange` for onChange handler
   - Use `formik.handleBlur` for onBlur handler
4. **Display Errors**: Show errors only when field is touched AND has errors
5. **Handle Submission**: Use `formik.handleSubmit` to validate and submit
6. **Reset Form**: Call `formik.resetForm()` after successful submission

## Best Practices

✅ **DO:**
- Always use Yup for schema validation
- Check `formik.touched` before showing errors
- Reset form after successful submission
- Use meaningful error messages

❌ **DON'T:**
- Mix Formik with useState for form fields
- Show all errors at once without user interaction
- Forget to set the `name` attribute on form fields
- Forget `onBlur` handler for proper touch tracking

## Common Validation Rules

```javascript
// Text field
email: Yup.string().email().required()

// Password
password: Yup.string().min(8).required()

// Number
age: Yup.number().min(18).max(100).required()

// Checkbox
agree: Yup.boolean().oneOf([true], "You must agree")

// Select dropdown
country: Yup.string().oneOf(['USA', 'UK', 'India']).required()

// Custom validation
username: Yup.string().test('unique', 'Username taken', async (value) => {
    const response = await fetch(`/api/check-username?u=${value}`);
    return response.ok;
})
```

## Advantages of Formik

1. **Reduced Boilerplate**: No need for multiple useState calls
2. **Built-in Validation**: Integrates seamlessly with Yup
3. **Error Management**: Automatic error tracking and display
4. **Touch Tracking**: Know which fields user has interacted with
5. **Form Reset**: Simple form resetting
6. **Performance**: Optimized re-renders

Happy Form Building! 🎉

