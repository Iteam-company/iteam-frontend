import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
});

export interface FormikValues {
    email: string;
}

export const initialValues = {
    email: "",
};
