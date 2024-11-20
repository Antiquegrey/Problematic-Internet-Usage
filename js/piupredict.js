document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('predictionForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const usageTime = document.getElementById('usageTime').value.trim();
        const websites = document.getElementById('websites').value.trim();
        const patterns = Array.from(document.querySelectorAll('input[name="patterns"]:checked')).map(input => input.value);

        if (!usageTime || !websites) {
            alert('Please fill out all fields.');
            return;
        }

        if (patterns.length === 0) {
            alert('Please select at least one behavioral pattern.');
            return;
        }

        alert('Form submitted successfully! We will analyze your data shortly.');
        console.log({ usageTime, websites, patterns });
    });
});
