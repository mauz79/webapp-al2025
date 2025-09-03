
fetch('players_storico.json')
    .then(response => response.json())
    .then(data => {
        const searchInput = document.getElementById('searchInput');
        const playerData = document.getElementById('playerData');

        function displayPlayer(player) {
            return `
                <div class="player">
                    <h2>${player.Nome}</h2>
                    <p><strong>Squadra 2025-2026:</strong> ${player.Squadra2025}</p>
                    <p><strong>Ruolo:</strong> ${player.Ruolo}</p>
                    <p><strong>Stagione 2024-2025:</strong> ${player.Stagione2024}</p>
                    <p><strong>Storico:</strong> ${player.Storico.join(', ')}</p>
                </div>
            `;
        }

        function updateDisplay() {
            const query = searchInput.value.toLowerCase();
            playerData.innerHTML = '';
            const filtered = data.filter(player => player.Nome.toLowerCase().includes(query));
            filtered.forEach(player => {
                playerData.innerHTML += displayPlayer(player);
            });
        }

        searchInput.addEventListener('input', updateDisplay);
    });
