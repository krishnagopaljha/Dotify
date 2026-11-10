const emailInput = document.getElementById('emailInput');
const resultDiv = document.getElementById('result');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const variationCount = document.getElementById('variationCount');

function sanitizeInput() {
    emailInput.value = emailInput.value.replace(/[^a-zA-Z0-9]/g, '').replace(/@gmail\.com/i, '');
}

function renderEmptyState(message) {
    resultDiv.innerHTML = `<div class="empty-state">${message}</div>`;
}

function generateDotVariations() {
    const emailInputValue = emailInput.value.trim();
    resultDiv.innerHTML = '';

    if (!emailInputValue) {
        renderEmptyState('Enter a Gmail username to generate aliases.');
        variationCount.textContent = '0';
        return;
    }

    const variations = getDotVariations(emailInputValue);
    variationCount.textContent = variations.length;

    variations.forEach((variation) => {
        const item = document.createElement('p');
        item.className = 'result-item';
        item.textContent = `${variation}@gmail.com`;
        resultDiv.appendChild(item);
    });
}

function getDotVariations(username) {
    if (username.length === 1) return [username];

    const variations = [];
    const subVariations = getDotVariations(username.slice(1));

    subVariations.forEach((variation) => {
        variations.push(username[0] + variation);
        variations.push(username[0] + '.' + variation);
    });

    return Array.from(new Set(variations));
}

async function copyAllVariations() {
    const text = Array.from(resultDiv.querySelectorAll('.result-item'))
        .map((item) => item.textContent.trim())
        .join('\n');

    if (!text) {
        renderEmptyState('Generate some aliases first.');
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copied';
        setTimeout(() => {
            copyBtn.textContent = 'Copy all';
        }, 1200);
    } catch (error) {
        copyBtn.textContent = 'Copy failed';
        setTimeout(() => {
            copyBtn.textContent = 'Copy all';
        }, 1200);
    }
}

emailInput.addEventListener('input', sanitizeInput);
generateBtn.addEventListener('click', generateDotVariations);
copyBtn.addEventListener('click', copyAllVariations);
emailInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generateDotVariations();
    }
});

renderEmptyState('Enter a Gmail username to generate aliases.');
variationCount.textContent = '0';
