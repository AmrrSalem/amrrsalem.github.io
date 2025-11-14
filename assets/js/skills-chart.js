/* =============================================================================
   INTERACTIVE SKILLS VISUALIZATION
   Using Chart.js for radar chart
   ============================================================================= */

const initSkillsChart = () => {
    const chartContainer = document.querySelector('#skills .section-container');
    if (!chartContainer) return;

    // Create chart canvas element
    const chartWrapper = document.createElement('div');
    chartWrapper.className = 'skills-chart-wrapper';
    chartWrapper.style.cssText = `
        max-width: 800px;
        margin: 3rem auto;
        padding: 2rem;
        background: var(--bg-white);
        border-radius: 15px;
        box-shadow: var(--shadow-md);
    `;

    chartWrapper.innerHTML = `
        <h3 style="text-align: center; margin-bottom: 2rem; color: var(--text-dark);">
            <i class="fas fa-chart-radar"></i> Technical Proficiency Overview
        </h3>
        <canvas id="skillsRadarChart"></canvas>
    `;

    // Insert after section title
    const subtitle = chartContainer.querySelector('.section-subtitle');
    if (subtitle) {
        subtitle.after(chartWrapper);
    }

    // Chart.js configuration
    const ctx = document.getElementById('skillsRadarChart');
    if (!ctx) return;

    const skillsData = {
        labels: [
            'Python',
            'Machine Learning',
            'Deep Learning',
            'Data Analysis',
            'SQL/Databases',
            'Cloud (AWS)',
            'Streamlit/Dashboards',
            'NLP',
            'Computer Vision',
            'IoT Integration'
        ],
        datasets: [{
            label: 'Proficiency Level',
            data: [95, 90, 85, 92, 88, 75, 90, 82, 78, 80],
            backgroundColor: 'rgba(8, 145, 178, 0.2)',
            borderColor: 'rgba(8, 145, 178, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(15, 76, 129, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(8, 145, 178, 1)',
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    };

    const config = {
        type: 'radar',
        data: skillsData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        callback: function(value) {
                            return value + '%';
                        },
                        color: 'var(--text-light)',
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        color: 'var(--text-dark)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'Proficiency: ' + context.parsed.r + '%';
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };

    // Create chart with theme-aware colors
    const chart = new Chart(ctx, config);

    // Update chart colors when theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-theme') {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

                if (isDark) {
                    chart.options.scales.r.grid.color = 'rgba(255, 255, 255, 0.1)';
                    chart.options.scales.r.ticks.color = '#d1d5db';
                    chart.options.scales.r.pointLabels.color = '#f3f4f6';
                } else {
                    chart.options.scales.r.grid.color = 'rgba(0, 0, 0, 0.1)';
                    chart.options.scales.r.ticks.color = '#6b7280';
                    chart.options.scales.r.pointLabels.color = '#1f2937';
                }

                chart.update();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
};

// Initialize chart when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load Chart.js dynamically if not already loaded
    if (typeof Chart === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
        script.onload = initSkillsChart;
        document.head.appendChild(script);
    } else {
        initSkillsChart();
    }
});
