document.addEventListener("DOMContentLoaded", function() {
    const screenWidth = window.screen.width; // Ancho de la pantalla
    const screenHeight = window.screen.height; // Alto de la pantalla

    const table = document.getElementById('tetrisFalling');
    
    // Llenar la tabla con los valores de la matriz
    for (let i = 0; i < screenHeight; i+=15) {
        const row = table.insertRow();
        for (let j = 0; j < screenWidth; j+=15) {
            const cell = row.insertCell();
            cell.textContent = "";
        }
    }
});
