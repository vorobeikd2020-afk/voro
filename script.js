document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    changeBackgroundColor();
    createCounter();
    handleForm();
    addSkills();
    showTime();
});
function changeBackgroundColor() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const body = document.body;
    
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    
    let currentColor = 0;
    
    changeColorBtn.addEventListener('click', function() {
        currentColor = (currentColor + 1) % colors.length;
        body.style.background = colors[currentColor];
        console.log('Цвет изменен!');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    changeBackgroundColor(); 
});
function createCounter() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    let count = 0;
    
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
}

function handleForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        alert('Спасибо, ' + name + '! Ваше сообщение отправлено.');
        
        contactForm.reset();
    });
}

function addSkills() {
    const addSkillBtn = document.getElementById('addSkillBtn');
    const skillsList = document.getElementById('skillsList');
    
    const newSkills = [
        'React',
        'Node.js',
        'Python',
        'Git'
    ];
    
    let skillIndex = 0;
    
    addSkillBtn.addEventListener('click', function() {
        if (skillIndex < newSkills.length) {
            const newSkill = document.createElement('li');
            newSkill.textContent = newSkills[skillIndex];
            skillsList.appendChild(newSkill);
            skillIndex++;
        } else {
            addSkillBtn.textContent = 'Все навыки добавлены!';
            addSkillBtn.disabled = true;
        }
    });
}
addSkillBtn.addEventListener('click', function() {
    if (skillIndex < newSkills.length) {
        const newSkill = document.createElement('li');
        newSkill.textContent = newSkills[skillIndex];
        newSkill.className = 'new-item';
        skillsList.appendChild(newSkill);
        skillIndex++;
    }
});
function showTime() {
    const timeElement = document.createElement('div');
    timeElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
    `;
    document.body.appendChild(timeElement);
    
    function updateTime() {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString();
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}