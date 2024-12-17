document.getElementById('formulario-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const titulo = document.getElementById('titulo').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode integrar com um serviço de e-mail
    // Por exemplo, usando EmailJS ou um backend próprio
    
    // Exemplo usando mailto (solução básica)
  const mailtoLink = `mailto:jesshinoda@hotmail.com?subject=${encodeURIComponent(titulo)}&body=${encodeURIComponent(
        `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`
    )}`;

    window.location.href = mailtoLink;

    // Limpa o formulário após o envio
    this.reset();
    alert('Mensagem enviada com sucesso!');
}); 