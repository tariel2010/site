// Пример JavaScript кода
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт загружен!');
    
    // Пример обработчика событий
    document.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Форма отправлена!');
    });
});
