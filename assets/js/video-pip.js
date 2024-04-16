window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const videoContainer = document.getElementById('video-container');
    const closeButton = document.getElementById('close-btn');
  
    closeButton.addEventListener('click', () => {
      // Tornar o vídeo uma div normal no início da página
      videoContainer.style.position = 'static';
      closeButton.style.display = 'none';
    });
  
    let isWatching = false;
    let isScrolling = false;
  
    video.addEventListener('playing', () => {
      isWatching = true;
    });
  
    window.addEventListener('scroll', () => {
      if (!isWatching) {
        isScrolling = true;
      }
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === video && isScrolling) {
        // Tornar o vídeo uma div flutuante
        videoContainer.style.position = 'fixed';
        videoContainer.style.top = '50%';
        videoContainer.style.left = '50%';
        videoContainer.style.transform = 'translate(-50%, -50%)';
        videoContainer.style.zIndex = '9999';
        closeButton.style.display = 'block'; // Mostrar botão de fechar
      }
    });
  
    video.addEventListener('mouseleave', () => {
      // Tornar o vídeo uma div normal no início da página
      videoContainer.style.position = 'static';
      closeButton.style.display = 'none';
    });
  
    // Adicionar marcações de tempo para os momentos específicos do vídeo
    const timeIntervals = [10, 30, 60]; // Exemplo: marcações em segundos
    timeIntervals.forEach((time) => {
      video.addEventListener('timeupdate', () => {
        if (Math.floor(video.currentTime) === time) {
          // Realizar ação desejada ao atingir o intervalo de tempo
          window.scrollTo({ top: 500, behavior: 'smooth' }); // Exemplo: rolar para uma determinada posição
        }
      });
    });
  });