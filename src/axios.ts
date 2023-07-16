import axios from "axios";

const APP_URL = process.env.REACT_APP_STRAPI_URL;

export const client = axios.create({
    baseURL: APP_URL,
});

// client.interceptors.request.use((config) => {
//     config.headers.Authorization = localStorage.getItem("token");
//     return config;
// });

// client.interceptors.response.use(
//     (config) => {
//         return config;
//     },
//     async (error) => {
//         const originalReq = error.config;

//         if (
//             error.response.status === 403 &&
//             error.config &&
//             !error.config._isRetry
//         ) {
//             originalReq._isRetry = true;

//             try {
//                 localStorage.setItem(
//                     "token",
//                     `${process.env.REACT_APP_STRAPI_TOKEN}`,
//                 );

//                 return client.request(originalReq);
//             } catch (error) {
//                 console.log("Not auth! Error:" + error);
//                 localStorage.removeItem("token");
//             }
//         }

//         throw error;
//     },
// );

export default client;
