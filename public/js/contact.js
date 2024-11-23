document.querySelector('#save-data').addEventListener('click', function(event) {
    event.preventDefault();

    const form = document.querySelector('.contact-form');
    const formData = new FormData(form);
    
    let formObject = {};
    let isError = false;
    formData.forEach((value, key) => {
        if (!value) {
            isError = showErrorMessage(key);
            return;
        }

        if (key === "email") {
            const emailValid = isEmailValid(value);
            if (!emailValid) {
                isError = showErrorMessage(key);
                return;
            }
        }

        if (key === "phone") {
            const phoneValid = isPhoneValid(value);
            if (!phoneValid) {
                isError = showErrorMessage(key);
                return;
            }
        }

        formObject[key] = value;
    });

    if (isError) {
        return
    }
    
    console.log("User data:", formObject);

    document.querySelector('.contact-title').classList.add("hidden");
    document.querySelector('.contact-form').classList.add("hidden");
    document.querySelector('.user-data').classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    Object.entries(formObject).forEach(([key, value]) => {
        const field = document.querySelector(`.user-data .${key}-result span`);
        if (field) {
            field.textContent = value;
        }
    })

    const { 
        city, 
        street, 
        unit, 
        name: username, 
        email, 
        surname, 
        weight, 
        height, 
        age, 
        experience, 
        luckyNumber 
    } = formObject;

    const address = `${city}, ${street}, ${unit}`
    document.querySelector(`.user-data .address-result span`).textContent = address;

    const averageText = document.querySelector('.average-text');
    const average = (+weight + +height + +age + +experience + +luckyNumber) / 5;
    const rounded = Math.round((average + Number.EPSILON) * 100) / 100

    averageText.innerHTML = `${username} ${surname} (${email}): <span class="average">${rounded}</span>`;

    const averageTextSpan = document.querySelector('.average-text .average');
    averageTextSpan.style.color = rounded < 100 ? "green" : rounded < 150 ? "orange" : "red"
});

document.querySelector('#start-new-contact').addEventListener('click', function(event) {
    location.reload();
});

const handleOnInputsChange = () => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorMessage = document.querySelector(`.error-input-message.${input.id}`);
            if (errorMessage) {
                errorMessage.classList.add("hidden")
            }
        });
    });
}

const showErrorMessage = (key) => {
    const errorMessage = document.querySelector(`.error-input-message.${key}`);

    if (!errorMessage) {
        return false;
    }

    errorMessage.classList.remove("hidden")
    return true;
}

const isEmailValid = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const isPhoneValid = (phone) => /^[+]?[0-9]+$/.test(phone);