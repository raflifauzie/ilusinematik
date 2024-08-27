document.addEventListener('DOMContentLoaded', function () {
    const serviceButtons = document.querySelectorAll('.service-btn');

    serviceButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
            } else {
                this.classList.add('selected');
            }
        });
    });
});