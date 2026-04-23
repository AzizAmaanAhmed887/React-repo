import {useFormik} from "formik"
import * as Yup from "yup"

// Validation Schema using Yup
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

export default function CommentsForm({addNewComment}) {
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
            formik.resetForm(); // Resets form to initial values
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
                    borderColor: formik.touched.username && formik.errors.username ? "red" : "black"
                }}>
            </textarea>
            {formik.touched.username && formik.errors.username && (
                <p style={{color: "red", fontSize: "12px"}}>{formik.errors.username}</p>
            )}
            <br/> <br/>

            {/* Remarks */}
            <label htmlFor="remarks">Remarks:</label>
            <textarea
                name="remarks"
                value={formik.values.remarks}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="remarks"
                style={{
                    borderColor: formik.touched.remarks && formik.errors.remarks ? "red" : "black"
                }}>
            </textarea>
            {formik.touched.remarks && formik.errors.remarks && (
                <p style={{color: "red", fontSize: "12px"}}>{formik.errors.remarks}</p>
            )}
            <br/> <br/>

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
                    borderColor: formik.touched.rating && formik.errors.rating ? "red" : "black"
                }}/>
            {formik.touched.rating && formik.errors.rating && (
                <p style={{color: "red", fontSize: "12px"}}>{formik.errors.rating}</p>
            )}
            <br/> <br/>

            <button type="submit">Submit</button>
        </form>
    )
}