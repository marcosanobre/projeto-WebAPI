// Importação do metodo Default
import { default as defineImagem } from "./mostrarVideos.js";


//import { idGrupoSelecionado, txtGrupoSelecionado } from "./mostrarVideos.js";

//import { baseData } from "./mostrarVideos.js";
//const idGrupoSelecionado = require('./mostrarVideos.js');
//const txtGrupoSelecionado = require('./mostrarVideos.js');
//const {baseData} = require('./mostrarVideos.js');

const urlParams = new URLSearchParams(window.location.search);
const idGrupoSelecionado = urlParams.get('gid');
function grupoSelecionado( idGrupo ) {
    const urlFetchGrupo = `http://localhost:3000/grupo/${idGrupo}`;
    fetch(urlFetchGrupo)
        .then( (response) => {
                return response.json();
        })
        .then( (grupo) => {
            const labelGrupo = document.getElementById("grupo_selecionado");
            labelGrupo.innerHTML = grupo[0].titulo;
            defineImagem(idGrupo);
            return grupo[0].titulo;
        })
        .catch(function() {
            // handle the error
        });
}
const txtGrupoSelecionado = grupoSelecionado(idGrupoSelecionado);


const formulario = document.querySelector("[data-formulario]");

async function criarVideo( evento ) {
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor( Math.random() * 10 ).toString();

    try {
        await conectaApi.criaVideo( titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";            
    } catch (e) {
        alert(e);
    };
};

formulario.addEventListener( "submit", evento => criarVideo( evento ) );

/* 
document.querySelector("[data-formulario]").addEventListener( "Submit", async function( event ) {
    event.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const descricao = document.querySelector('#descricao').value;
    const url = document.querySelector('#url').value;
    const imagem = document.querySelector('#imagem').value;

    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "/";

    }
);
*/

