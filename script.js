function copyIPFromNav() {
    const ipText = document.querySelector('.ip-value')?.textContent || 'ip.gg';
    navigator.clipboard.writeText(ipText).then(() => {
        const navBtn = document.getElementById('nav-ip-btn');
        navBtn.classList.add('copied');
        setTimeout(() => {
            navBtn.classList.remove('copied');
        }, 1500);
        
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

function copyIPFromCenter() {
    const ipText = document.querySelector('.ip-value')?.textContent || 'ip.gg';
    navigator.clipboard.writeText(ipText).then(() => {
        const centerBtn = document.getElementById('center-ip-btn');
        centerBtn.classList.add('copied');
        setTimeout(() => {
            centerBtn.classList.remove('copied');
        }, 1500);
        
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
    const item = content.parentElement;
    
    content.classList.toggle('active');
    item.classList.toggle('active');
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

// Анимация при загрузке страницы
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('header').classList.add('visible');
    }, 100);
    
    setTimeout(() => {
        document.querySelector('.hero').classList.add('visible');
    }, 800);
    
    setTimeout(() => {
        document.querySelector('.instructions').classList.add('visible');
    }, 1800);
    
    setTimeout(() => {
        document.querySelector('.game-modes').classList.add('visible');
    }, 2600);
    
    setTimeout(() => {
        document.querySelector('.resources').classList.add('visible');
    }, 3400);
    
    setTimeout(() => {
        document.querySelector('.custom-section').classList.add('visible');
    }, 4000);
    
    setTimeout(() => {
        document.querySelector('.discord-section').classList.add('visible');
    }, 4600);
    
    setTimeout(() => {
        document.querySelector('footer').classList.add('visible');
    }, 5200);
});

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

// Анимация секций при скролле
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.instructions, .game-modes, .resources, .custom-section, .discord-section, footer').forEach(section => {
    sectionObserver.observe(section);
});

// Анимация аккордеона при скролле
const accordionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.accordion-item').forEach(item => {
    accordionObserver.observe(item);
});

// Анимация карточек режимов при скролле
const modeCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 250);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.mode-card').forEach(card => {
    modeCardObserver.observe(card);
});

// Анимация карточек ресурс-паков при скролле
const resourceCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.resource-card').forEach(card => {
    resourceCardObserver.observe(card);
});
