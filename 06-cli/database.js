const { readFile } = require("fs")
const { promisify } = require("util")

const readFileAsync = promisify(readFile)

// outra forma de obter dados do Json
// const dadosJson = require('./herois.json')

class Database {
    constructor() {
        this.NOME_ARQUIVO = "herois.json"
    }

    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf8")
        return JSON.parse(arquivo.toString())
    }

    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrado = dados.filter(item => (id ? item.id === id : true))
        return dadosFiltrado
    }
}

module.exports = new Database()