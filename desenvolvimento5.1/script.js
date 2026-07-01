const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "Atividade Desenvolvimento 5.1";
link.innerText = "Acesse o site da Proz Educação";

listaNaoOrdenada.innerHTML = `
    <li>Item simples 1</li>
    <li>Item simples 2</li>
    <li>Item simples 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://c1ntiia-portifolio-html-css.netlify.app/" target="_blank">Portifólio</a></li>
    <li><a href="https://github.com/c1ntiia" target="_blank">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/c%C3%ADntia-concei%C3%A7%C3%A3o-a2a2781b9/" target="_blank">LinkedIn</a></li>
`;