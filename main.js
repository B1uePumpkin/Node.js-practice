document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab-list a');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            var activePanels = document.querySelectorAll('.tab-panel.active');
            activePanels.forEach(function(panel) {
                panel.classList.remove('active');
            });

            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });

            tab.classList.add('active');
            var activePanel = document.querySelector(tab.getAttribute('href'));
            activePanel.classList.add('active');
        });
    });
});
