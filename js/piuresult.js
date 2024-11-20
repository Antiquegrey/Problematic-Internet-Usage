document.addEventListener('DOMContentLoaded', () => {
    // Simulated Data (Replace with actual user input if needed)
    const usageTime = localStorage.getItem('usageTime') || '4 hours/day';
    const websites = localStorage.getItem('websites') || 'youtube.com, google.com';
    const patterns = localStorage.getItem('patterns') || 'Social Media, Streaming';

    // Extract usage hours for dynamic content
    const usageHours = parseInt(usageTime.split(' ')[0]) || 0;

    // Populate dynamic content
    document.getElementById('timeAnalysis').textContent = usageHours;

    // Restart button functionality
    document.getElementById('restartButton').addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'prediction.html';
    });

    // Generate Usage Chart (Bar Chart)
    const usageCtx = document.getElementById('usageChart').getContext('2d');
    new Chart(usageCtx, {
        type: 'bar',
        data: {
            labels: ['Your Usage', 'Average Usage (3 hrs)', 'High Usage (6 hrs)'],
            datasets: [{
                label: 'Daily Usage in Hours',
                data: [usageHours, 3, 6],
                backgroundColor: ['#4e54c8', '#8f94fb', '#f14668'],
                borderWidth: 1,
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, max: 8 }
            }
        }
    });

    // Generate Behavioral Patterns Chart (Pie Chart)
    const patternsCtx = document.getElementById('patternsChart').getContext('2d');
    const patternCounts = {
        'Online Shopping': patterns.includes('Online Shopping') ? 1 : 0,
        'Social Media': patterns.includes('Social Media') ? 1 : 0,
        'Streaming': patterns.includes('Streaming') ? 1 : 0
    };
    new Chart(patternsCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(patternCounts),
            datasets: [{
                data: Object.values(patternCounts),
                backgroundColor: ['#f9c74f', '#43aa8b', '#4e54c8'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
});
