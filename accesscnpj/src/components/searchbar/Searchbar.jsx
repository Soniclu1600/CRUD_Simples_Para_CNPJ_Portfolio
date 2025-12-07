import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"

export const SearchBar = ({setResult}) => {
    const [input, setInput] = useState();
    const [municipios, setMunicipios] = useState();
    const [open, setOpen] = useState(false);

    const fetchData = (value) => {
        if (value != 0) {
            fetch('http://localhost:3000/CNPJ/Get/Municipios/'+value)
            .then((response) => response.json())
            .then((json) => {
                setMunicipios(json.municipios)
                setResult(json.municipios[0].codigo)
                console.log(municipios)
                });
        };
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    };
    
    useEffect(() => {
        fetchData("florianopolis")
    }, [])

    return (
        <div className="searchbar-container">
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input
                    type="text"
                    className="searchbar-input"
                    placeholder="Digite para pesquisar..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onFocus={() => setOpen((prev) => !prev)}
                />
            </div>
            <div className="searchResults" >
            {open ? municipios.map((municipio)=>(
                  <div
                    className="results"
                    onClick={() => handleChange(municipio.descricao, setOpen(false))}
                  >
                    <span>{municipio.descricao}</span>
                  </div>
              )): <p></p>}
            </div>
        </div>
    );
}; 