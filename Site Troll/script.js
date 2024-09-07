function rollDice() {
    const numRolls = parseInt(document.getElementById('numRolls').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    for (let i = 0; i < numRolls; i++) {
        const roll = Math.floor(Math.random() * 20) + 1;
        const result = document.createElement('p');
        result.textContent = `Roll ${i + 1}: ${roll}`;
        resultsDiv.appendChild(result);
    }
}
