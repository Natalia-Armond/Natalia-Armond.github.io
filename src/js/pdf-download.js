// Função para download do currículo em PDF
function downloadCV() {
    // Abre o currículo em nova janela e aciona impressão
    const cvWindow = window.open('curriculum.html', '_blank');
    
    cvWindow.onload = function() {
        setTimeout(() => {
            cvWindow.print();
        }, 500);
    };
}

// Adiciona evento ao botão de download
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.btn-cv');
    if (downloadBtn && downloadBtn.textContent.includes('Baixar PDF')) {
        downloadBtn.onclick = function(e) {
            e.preventDefault();
            downloadCV();
        };
    }
});