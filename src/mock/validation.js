import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),

    contact: Yup.string()
        .min(10, "Invalid number!")
        .max(10, "Invalid number!")
        .required("Required"),

    alternate: Yup.string()
        .min(10, "Invalid number!")
        .max(10, "Invalid number!")
        .required("Required"),

    email: Yup.string()
        .email('Invalid email')
        .required("Required"),

    address: Yup.string()
        .max(100, "Too Long!")
        .required("Required")
});

export const NewSchema = Yup.object().shape({
    card: Yup.string()
        .min(16, "Invalid number!")
        .max(16, "Invalid number!")
        .required("Required"),
    expiry: Yup.string()
        .min(3, "Invalid number!")
        .max(4, "Invalid number!")
        .required("Required"),
    cvv: Yup.string()
        .min(3, "Invalid number!")
        .max(3, "Invalid number!")
        .required("Required")
});