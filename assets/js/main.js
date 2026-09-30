document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Search Engine Multi-Tab Switching Logic
    const tabs = document.querySelectorAll('.search-tab');
    const panels = document.querySelectorAll('.search-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active classes from all tabs
            tabs.forEach(t => {
                t.classList.remove('active-tab', 'bg-blue-600', 'text-white');
                t.classList.add('bg-gray-100', 'text-gray-700');
            });

            // Add active styling to clicked tab
            tab.classList.add('active-tab', 'bg-blue-600', 'text-white');
            tab.classList.remove('bg-gray-100', 'text-gray-700');

            // Hide all panels
            panels.forEach(panel => panel.classList.add('hidden'));

            // Show target panel
            const target = tab.getAttribute('data-target');
            const targetPanel = document.getElementById(`panel-${target}`);
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
            }
        });
    });

    // Auto-Scrolling Packages Carousel (Every 3 Seconds)
    const track = document.getElementById('package-track');
    if (track) {
        let scrollInterval;
        const cardWidth = 370; // Card width + gap approximation

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                    track.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }, 3000);
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        startAutoScroll();

        // Pause auto-scroll on hover
        track.addEventListener('mouseenter', stopAutoScroll);
        track.addEventListener('mouseleave', startAutoScroll);
    }
});