document.addEventListener("DOMContentLoaded", function() {
    const projetos = [
        { nome: "Projeto 1", descricao: "Projeto extensionista desenvolvido em equipe para um estúdio de dança.", imagem: "img/ballet.JPG", link: "https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2024-1-studio-ballet" },
        { nome: "Projeto 2", descricao: "Projeto de e-commerce.", imagem: "img/commerce1.JPG", link: "https://github.com/Iurytaveira/Tela-E-commerce" },
        { nome: "Projeto 3", descricao: "Projeto extensionista desenvolvido em equipe para uma barbearia.", imagem: "img/elclub.JPG", link: "https://github.com/Iurytaveira/El-Club-System" },
        { nome: "Projeto 4", descricao: "Projeto de e-commerce com API.", imagem: "img/commerce2.JPG", link: "https://github.com/Iurytaveira/e-commerce-com-API" },
        { nome: "Projeto 5", descricao: "Projeto para restaurante desenvolvido em equipe.", imagem: "img/restaurante.JPG", link: "https://github.com/joaovictortbm/Trabalho_Grafos" }
    ];
    
    const listaProjetos = document.getElementById("lista-projetos");
    
    projetos.forEach(projeto => {
        let div = document.createElement("div");
        div.innerHTML = `<img src="${projeto.imagem}" alt="${projeto.nome}" width="200">
                         <h3>${projeto.nome}</h3>
                         <p>${projeto.descricao}</p>
                         <a href="${projeto.link}" target="_blank" class="projeto-botao">Ver Projeto</a>`;
        listaProjetos.appendChild(div);
    });

    // Dados do currículo
    const curriculo = {
        perfilProfissional: [
            "Iniciativa e Agilidade para tomada de decisões",
            "Aptidão para trabalho em equipe",
            "Em constante aprendizado",
            "Perfil questionador",
            "Boa eloquência"
        ],
        idiomas: ["Inglês (intermediário)"],
        escolaridade: "3º ano (Concluído)",
        tecnico: "Automação Industrial – SENAI",
        superior: "Sistemas de Informação – PUC MINAS (Conclusão em dezembro de 2026)",
        cursos: ["Gestão e liderança", "Desenvolvimento Web Full Stack"],
        experiencia: "Trabalhador autônomo"
    };

    // Exibir currículo dinamicamente
    const secaoCurriculo = document.getElementById("curriculo");
    secaoCurriculo.innerHTML = `
        <h2>Currículo</h2>
        <h3>Perfil Profissional</h3>
        <ul>${curriculo.perfilProfissional.map(item => `<li>${item}</li>`).join("")}</ul>
        
        <h3>Outros Idiomas</h3>
        <p>${curriculo.idiomas.join(", ")}</p>

        <h3>Escolaridade</h3>
        <p>${curriculo.escolaridade}</p>

        <h3>Técnico</h3>
        <p>${curriculo.tecnico}</p>

        <h3>Ensino Superior</h3>
        <p>${curriculo.superior}</p>

        <h3>Cursos de curta duração</h3>
        <ul>${curriculo.cursos.map(curso => `<li>${curso}</li>`).join("")}</ul>

        <h3>Experiência Profissional</h3>
        <p>${curriculo.experiencia}</p>

        <a href="https://www.linkedin.com/in/iury-silva-taveira-849873335" target="_blank" class="linkedin-botao">
            <img src="img/icon.JPG" alt="LinkedIn">
        </a>
    `;

    // Mostrar a seção inicial
    mostrarSecao('sobre');
});

function mostrarSecao(secaoId) {
    document.querySelectorAll('.secao').forEach(secao => secao.classList.remove('ativa'));
    document.getElementById(secaoId).classList.add('ativa');
}