window.addEventListener('load' , function (){
    const loader = this.document.getElementById('loader');
        loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            setTimeout(function(){
                loader.remove()
            },500)
})

window.addEventListener("load", function () {
    const AboutPage = document.querySelector("#About");
    const about = document.querySelector("#about");
    window.addEventListener("scroll", function () {
        const pagetop = AboutPage.getBoundingClientRect().top;
        const screen = window.innerHeight;
        if (pagetop < screen - 50) {
            about.classList.add('show')
            about.classList.remove('hide')
        } else {
            about.classList.remove('show');
            about.classList.add('hide')
        }
    })
})

window.addEventListener('scroll', function () {
    let SkillDiv = document.getElementById('SkillDiv');
    let bars = document.querySelectorAll('.bar');
    let distance = SkillDiv.getBoundingClientRect().top;
    let height = window.innerHeight;
    if (distance < height - 100) {
        SkillDiv.classList.add("show");

        for (let i = 0; i < bars.length; i++) {
            let bar = bars[i];
            let target = bar.getAttribute('data-target');
            setTimeout(function () {
                bar.style.width = target + "%"
            }, 300)
        }
    } else {
        SkillDiv.classList.remove('show')
        for (let i = 0; i < bars.length; i++) {
            let bar = bars[i]
            bar.style.width = '0%'
        }
    }
});


window.addEventListener('scroll', function () {
    const exp = document.getElementById('Experience');
    const distance = exp.getBoundingClientRect().top;
    if (distance < window.innerHeight) {
        exp.classList.add('show')
    } else {
        exp.classList.remove('show')
    }
})

window.addEventListener("scroll", function () {
    const ProjectsDiv = document.getElementById('Projects');
    const distance = ProjectsDiv.getBoundingClientRect().top;
    if (distance < window.innerHeight - 200) {
        ProjectsDiv.classList.add('show');
    } else {
        ProjectsDiv.classList.remove('show')
    }
})

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('msgBox');
    const feedback = document.querySelector(".feedback")

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const msg = msgInput.value.trim();

    let isValid = true;

    if (name === "") {
        nameInput.classList.add('err');
        feedback.textContent = 'Fill in all fields'
        isValid = false;
    } else {
        nameInput.classList.remove('err');
    }

    if (email === "") {
        emailInput.classList.add('err');
        feedback.textContent = 'Fill in all fields'
        isValid = false;
    } else {
        emailInput.classList.remove('err');
    }

    if (msg === "") {
        msgInput.classList.add('err');
        feedback.textContent = 'Fill in all fields'
        isValid = false;
    } else {
        msgInput.classList.remove('err');
    }

    if (isValid) {
        feedback.style.color = 'green'
        feedback.textContent = 'Message succesfull';
    }

    return isValid;
}
