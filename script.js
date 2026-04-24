function copyIP() {
    const ipText = document.querySelector('.ip-value')?.textContent || 'ip.gg';
    navigator.clipboard.writeText(ipText).then(() => {
        const notification = document.getElementById('notification');
        notification.textContent = '✓ IP скопирован в буфер обмена!';
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2500);
    }).catch(err => {
        console.error('Ошибка копирования:', err);
    });
}

function scrollToInstructions() {
    document.getElementById('instructions').scrollIntoView({ behavior: 'smooth' });
}

function toggleAccordion(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const arrow = header.querySelector('.accordion-arrow');
    const item = header.parentElement;
    
    content.classList.toggle('active');
    item.classList.toggle('active');
    
    if (content.classList.contains('active')) {
        arrow.textContent = '^';
    } else {
        arrow.textContent = 'v';
    }
}

// Карусель оружия
let currentWeapon = 0;
const totalWeapons = 9;

function changeWeapon(direction) {
    const containers = document.querySelectorAll('#legendary-weapons .weapon-container');
    
    currentWeapon += direction;
    
    if (currentWeapon < 0) {
        currentWeapon = totalWeapons - 1;
    } else if (currentWeapon >= totalWeapons) {
        currentWeapon = 0;
    }
    
    containers.forEach((container, index) => {
        container.style.display = index === currentWeapon ? 'flex' : 'none';
    });
}

// Карусель кастомных крафтов
let currentCustomCraft = 0;

function changeCustomCraft(direction) {
    const containers = document.querySelectorAll('#custom-crafts .weapon-container');
    
    currentCustomCraft += direction;
    
    if (currentCustomCraft < 0) {
        currentCustomCraft = totalWeapons - 1;
    } else if (currentCustomCraft >= totalWeapons) {
        currentCustomCraft = 0;
    }
    
    containers.forEach((container, index) => {
        container.style.display = index === currentCustomCraft ? 'flex' : 'none';
    });
}

// Анимация шагов при скролле
const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.step').forEach(step => {
    stepObserver.observe(step);
});
