import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
    subject: Yup.string().required("This field is required"),
    comments: Yup.string().required("This field is required"),
});

export interface FormikValues {
    name: string;
    email: string;
    subject: string;
    comments: string;
}

export const initialValues = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};
