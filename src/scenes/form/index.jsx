// Import UI components from Material UI
import { Box, Button, TextField } from "@mui/material";

// Import Formik for form state management and validation
import { Formik } from "formik";

// Import Yup for schema-based form validation
import * as yup from "yup";

// Import hook for handling responsive designs (media queries)
import useMediaQuery from "@mui/material/useMediaQuery";

// Import a custom Header component (likely a reusable styled header)
import Header from "../../components/Header";

// =================== FORM COMPONENT ===================
const Form = () => {
  // Hook: checks if the screen width is at least 600px (non-mobile view)
  // Returns true if screen is wider than 600px
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Function called when form is submitted successfully
  // `values` will contain all input values entered by the user
  const handleFormSubmit = (values) => {
    console.log(values); // logs submitted form values to console
  };

  return (
    <Box m="20px"> {/* Adds margin around the whole form container */}
      {/* Header component with title and subtitle */}
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      {/* Formik wrapper handles form state, validation, and submission */}
      <Formik
        onSubmit={handleFormSubmit}          // function to call when form is submitted
        initialValues={initialValues}        // initial form values (defined below)
        validationSchema={checkoutSchema}    // validation schema using Yup
      >
        {({
          values,        // contains current values of all form fields
          errors,        // contains validation errors for fields
          touched,       // tracks whether a field has been focused/edited
          handleBlur,    // handles blur event (when leaving an input)
          handleChange,  // handles input changes
          handleSubmit,  // handles form submission
        }) => (
          // Actual HTML <form> that Formik manages
          <form onSubmit={handleSubmit}>
            {/* Grid container for arranging fields */}
            <Box
              display="grid"  // enables CSS grid layout
              gap="30px"      // spacing between grid items
              gridTemplateColumns="repeat(4, minmax(0, 1fr))" 
              // defines 4 equal-width columns
              sx={{
                // Responsive: on mobile, every field takes full width (span 4)
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* ================= FORM FIELDS ================= */}

              {/* First Name Input */}
              <TextField
                fullWidth                // take full available width
                variant="filled"         // filled style input
                type="text"              // plain text input
                label="First Name"       // label shown above input
                onBlur={handleBlur}      // mark as touched on blur
                onChange={handleChange}  // update Formik state on change
                value={values.firstName} // bind to Formik state
                name="firstName"         // must match initialValues key
                error={!!touched.firstName && !!errors.firstName} // show error only if touched & has error
                helperText={touched.firstName && errors.firstName} // show validation message
                sx={{ gridColumn: "span 2" }} // spans 2 columns
              />

              {/* Last Name Input */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }} // also spans 2 columns
              />

              {/* Email Input */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }} // spans entire row
              />

              {/* Contact Number Input */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Address 1 Input */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Address 2 Input */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            {/* Submit button aligned to right */}
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// =================== VALIDATION ===================

// Regex for validating phone numbers (supports multiple formats)
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// Yup schema for validation rules
const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),  // must be non-empty
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"), // must be valid email
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid") // must match regex
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

// =================== INITIAL VALUES ===================
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

// Export component
export default Form;
