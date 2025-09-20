// Анимация заполнения skill-bars при прокрутке до них
document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Функция для проверки, находится ли элемент в viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Функция для анимации skill-bars
    function animateSkills() {
        skillLevels.forEach(skill => {
            if (isInViewport(skill)) {
                const width = skill.getAttribute('data-width');
                skill.style.width = width;
            }
        });
    }
    
    // Запускаем при загрузке и при прокрутке
    animateSkills();
    window.addEventListener('scroll', animateSkills);
});