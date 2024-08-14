
const form = document.getElementById("inscricaoForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;



    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();


    doc.setFontSize(16);
    doc.text("Projeto Terraço das Artes ONG Sem Fins Lucrativos", 10, 10);
    doc.setFontSize(12);
    doc.text("Ficha de Inscrição para Aula de Karate", 10, 20);
    doc.setFontSize(12);
    doc.text("Professor Gerson Moraes", 10, 30);
    doc.text("", 10, 40);


    doc.setFontSize(12);
    doc.text(`Nome Completo: ${nome}`, 10, 50);
    doc.text(`Email: ${email}`, 10, 60);
    doc.text(`Telefone: ${telefone}`, 10, 70);
    doc.text(`Idade: ${idade}`, 10, 80);
    doc.text(`Nível de Experiência: ${nivel}`, 10, 90);


    doc.save("dados_aluno.pdf");


    const mensagem = `Olá! Gostaria de me inscrever nas aulas de Karatê. Aqui estão meus dados:\n\nNome Completo: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nIdade: ${idade}\nNível de Experiência: ${nivel}`;

    const phoneNumber = '5521992770861';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;


    window.open(whatsappUrl, '_blank');
});

const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
let counter = 0;
const size = slideImages[0].clientWidth;

document.getElementById('next').addEventListener('click', () => {
    if (counter >= slideImages.length - 1) counter = -1;
    slides.style.transition = "transform 0.5s ease-in-out";
    counter++;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.getElementById('prev').addEventListener('click', () => {
    if (counter <= 0) counter = slideImages.length;
    slides.style.transition = "transform 0.5s ease-in-out";
    counter--;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
