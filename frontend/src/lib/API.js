import axios from "axios";


const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PATIENT_BASE_URL
});

export const importPatientAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_IMPORT_PATIENTS_BASE_URL + '/import-patients'
});

export default API