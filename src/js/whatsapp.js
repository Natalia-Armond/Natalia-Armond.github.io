// Função para enviar mensagem via WhatsApp
function enviarWhatsApp() {
    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Validação básica
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Número do WhatsApp (substitua pelo seu número)
    const numeroWhatsApp = '5531984992870';
    
    // Monta a mensagem
    const textoMensagem = `*Contato do Portfólio*%0A%0A` +
                         `*Nome:* ${nome}%0A` +
                         `*Email:* ${email}%0A%0A` +
                         `*Mensagem:*%0A${mensagem}`;
    
    // URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;
    
    // Abre o WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Limpa o formulário
    document.getElementById('contact-form').reset();
}