const counters = document.querySelectorAll('.count');
  let animationActivated = false;

  const updateCount = () => {
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const increment = Math.ceil(target / 100);

          if (count < target) {
              counter.innerText = '+' + (count + increment);
          }
      });

      if (+counters[0].innerText < +counters[0].getAttribute('data-count')) {
          requestAnimationFrame(updateCount);
      }
  };

  const handleScroll = () => {
      const countingSection = document.querySelector('.counting');
      const sectionPosition = countingSection.getBoundingClientRect();

      // Verificar si la sección está dentro de la ventana visible
      if (sectionPosition.top <= window.innerHeight && !animationActivated) {
          animationActivated = true;
          updateCount();
      }
  };

  // Escuchar eventos de desplazamiento
  window.addEventListener('scroll', handleScroll);

  // También puedes considerar desencadenar la animación al cargar la página si la sección ya está visible
  handleScroll();
  
  function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}