import connection from "./connection.js";

export function getMunicipios(description) {
    return new Promise((resolve, reject) => {
        connection.all("SELECT * FROM municipio WHERE descricao like ?", [('%'+description+'%')], (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getCidadeCod(description) {
    return new Promise((resolve, reject) => {
        connection.all("SELECT codigo FROM municipio WHERE descricao=(?)", description, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

export function getEmpresas(codMunicipio) {
    return new Promise((resolve, reject) => {
        connection.all('SELECT concat(cnpj_basico, cnpj_ordem, cnpj_dv) as CNPJ, matriz_filial, nome_fantasia as Nome_Da_Empresa, data_inicio_atividades as Data_de_Inicio, cnae_fiscal as CNAE_Primaria, cnae_fiscal_secundaria as CNAE_Secundaria, concat(tipo_logradouro, " ", logradouro, " ", numero, " ", complemento, ", ", bairro, ", ", uf) as Endereco, concat(ddd1, telefone1) as Telefone, correio_eletronico as Email FROM estabelecimento WHERE municipio=(?)', codMunicipio, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}
