document.addEventListener("DOMContentLoaded", () => {
        const texts = [
            "¡Hola!",
            "¡Buen día agencia!",
            "¡Seguimos firmes!",
            "¡Buenas energías!",
            "¡Ánimo!",
            "¡A meter fichas!",
            "¡Hoy se recupera!",
            "¡Buenas ventas!",
            "¡Buena semana!"
        ];

        const titleElement = document.getElementById("changing-title");
        let index = 0;

        const changeText = () => {
            // Fade out
            titleElement.classList.remove("visible");

            setTimeout(() => {
                // Change text
                titleElement.textContent = texts[index];

                // Fade in
                titleElement.classList.add("visible");

                // Next index
                index = (index + 1) % texts.length;
            }, 500); // 500ms matches the CSS transition duration
        };

        // Inicial delay para mostrar el primer texto con animación
        setTimeout(() => {
            titleElement.classList.add("visible");
        }, 100);

        // Cambia cada 1.5 segundos
        setInterval(changeText, 1500);
    });
