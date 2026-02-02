// تأثير تتبع الماوس المتوهج
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// مراقب الظهور (Intersection Observer) لتفعيل الـ Progress Bars والأنيميشن
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // تفعيل أشرطة المهارات عند الوصول إليها
            const fills = entry.target.querySelectorAll('.progress-fill');
            fills.forEach(fill => {
                fill.style.width = fill.getAttribute('data-percent');
            });
        }
    });
}, { threshold: 0.1 });

// تطبيق المراقب على كل العناصر التي تحتوي كلاس reveal
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// مبدل الوضع الليلي والنهاري (Theme Switcher)
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});