import axios from "axios";

const APP_URL =
    process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_LOCAL_HOST
        : process.env.REACT_APP_DEPLOY_HOST;

const nodemailerClient = axios.create({
    baseURL: APP_URL,
});

export default nodemailerClient;
