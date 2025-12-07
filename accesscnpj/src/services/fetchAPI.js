import api from "./api.js";

export const fetchMunicipios = async () => {
    try {
        const response = await api.get("/CNPJ/Get/Municipios");
        return response.data;
    } catch (error) {
        console.log("Error when trying to fetch API", error);
        throw error;
    }
}

export const fetchEmpresas = async (codMunicipio) => {
    try {
        const response = await api.get("/CNPJ/Get/Estabelecimentos/"+{codMunicipio});
        return response.data;
    } catch (error) {
        console.log("Error when trying to fetch API", error);
        throw error;
    }
}