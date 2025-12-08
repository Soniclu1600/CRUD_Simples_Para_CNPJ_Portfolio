import { useState } from "react";
import "./empresasDownload.css"
import { useEffect } from "react";
import { SearchBar } from "../components/searchbar/Searchbar.jsx";
import "../components/searchbar/searchbar.css";
import { CSVLink } from 'react-csv';


export default function DownloadEmpresas () {
    const [ result, setResult ] = useState([]);
    const [ arrayCSV, setArrayCSV ] = useState([]);
    const [ canDownload, setCanDownload ] = useState(false);

    const fetchCity = (cityCode) => {
        fetch('http://localhost:3000/CNPJ/Get/Estabelecimentos/'+cityCode)
        .then((response) => response.json())
        .then((json) => {
            setArrayCSV(json.municipios)
            setCanDownload((prev) => !prev)
            console.log(json)
        });
    };

    const headers = [
        {label: "CNPJ", key: "CNPJ"},
        {lanbel: "matriz_filial", key: "matriz_filial"},
        {label: "Nome_Da_Empresa", key: "Nome_Da_Empresa"},
        {label: "Data_de_Inicio", key: "Data_de_Inicio"},
        {label: "CNAE_Primaria", key: "CNAE_Primaria"},
        {label: "CNAE_Secundaria", key: "CNAE_Secundaria"},
        {label: "Endereco", key: "Endereco"},
        {label: "Telefone", key: "Telefone"},
        {label: "Email", key: "Email"}
    ];

    const csvLink = {
        filename: "CNPJ_Municipo.csv",
        headers: headers,
        data: arrayCSV
    };

    return (
        <>
        <SearchBar setResult={setResult} />
        <button className="searchButton" onClick={() => fetchCity(result)}>Procurar CNPJs desta cidade!</button>
        {canDownload ?
            <CSVLink {...csvLink}>Baixar o CSV!</CSVLink>
        : <div className="loadingDiv">
            <p className="loadingText">Carregando..</p>
            <div className="loadingAnim"></div>
        </div>}
        </>
    );
};