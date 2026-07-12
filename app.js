const steps = [
    {
        image: './img/img_crush.svg',
        caption: 'I have been wanting to tell you something...'
    },
    {
        image: './img/img_think.svg',
        caption: 'I can not stop thinking about you'
    },
    {
        image: './img/img_reasons.svg',
        caption: 'There are so many reasons why I adore you'
    },
    {
        image: './img/img_date.svg',
        caption: 'Would you let me take you on a date?'
    },
    {
        image: './img/img_dinner.svg',
        caption: 'Dinner, just the two of us'
    },
    {
        image: './img/img_sunset.svg',
        caption: 'Watch the sunset with me?'
    },
    {
        image: './img/img_dance.svg',
        caption: 'One dance? I promise to be gentle'
    },
    {
        image: './img/img_beach.svg',
        caption: 'Sand, waves, and you'
    },
    {
        image: './img/img_adventure.svg',
        caption: 'Any adventure with you sounds perfect'
    },
    {
        image: './img/img_letter2.svg',
        caption: 'I wrote this just for you...'
    },
    {
        image: './img/img_proposal.svg',
        caption: 'Will you be mine?'
    }
];

const romanticMessages = [
    'Every time my phone lights up with your name...',
    'My heart beats a little faster...',
    'I save your texts just to read them again...',
    'I daydream about us...',
    'Your smile is my favorite thing...',
    'I look for you in every crowd...',
    'I replay our conversations...',
    'You are all I think about...',
    'I am yours, completely...',
    'I never want to stop knowing you...',
    'You are my best daydream...',
    'I carry your laugh in my heart...',
    'Every moment with you feels like magic...',
    'I saved the good memes for you...',
    'You are the notification I always want...',
    'My favorite place is wherever you are...',
    'I would cross oceans just to see you smile...',
    'You make ordinary moments feel like fairy tales...',
    'I am already planning our future...',
    'You are the best thing that ever happened to me...'
];

const encouragingPhrases = [
    'C\'mon, just a little curiosity...',
    'You know you are curious...',
    'My heart is on the line here!',
    'I promise it is worth saying Yes...',
    'Just one date? Please?',
    'Your future self will thank you...',
    'I am not giving up that easily...',
    'This could be the best decision ever!',
    'Imagine all the laughs ahead...',
    'I will be the best plus-one ever...'
];

const crushMemories = [
    'The way your eyes light up when you smile',
    'How your laugh makes everything better',
    'The sound of your voice on the phone',
    'When you say my name',
    'The way you care about people',
    'How you always know what to say',
    'That moment when our hands almost touched',
    'The time you looked at me and I forgot to breathe',
    'Your amazing taste in music',
    'The way you believe in me',
    'How you make everyone feel special',
    'That stupid thing you do that I adore'
];

const dateIdeas = [
    'Coffee and conversation',
    'Sunset at the beach',
    'Stargazing on a rooftop',
    'Cooking together',
    'A long drive with no destination',
    'Movie night under the stars',
    'Picnic in the park',
    'Ice cream and people-watching',
    'A spontaneous weekend trip',
    'Dinner and dancing'
];

const surpriseMessages = [
    'If I could rewrite the alphabet, I would put U and I together',
    'I love you more than yesterday, but less than tomorrow',
    'You are the reason I check my phone so often',
    'If you were a vegetable, you would be a cute-cumber',
    'I like you more than pizza. And I REALLY like pizza',
    'Do you believe in love at first sight, or should I walk by again?',
    'I was wondering if you had an extra heart. Mine seems to have been stolen',
    'If I could rearrange the alphabet, I would put Y and O together',
    'I am not a photographer, but I can picture us together',
    'You must be a magician, because whenever I look at you, everyone else disappears'
];

const surpriseQuestions = [
    'If we could travel anywhere, where would you take me?',
    'What is your favorite way to spend a lazy Sunday?',
    'Coffee or tea? (wrong answers only accepted for first dates)',
    'Beach or mountains?',
    'Early bird or night owl?',
    'Pineapple on pizza: yes or no? (careful with this one)',
    'If you could have dinner with anyone, dead or alive, who?',
    'What is the most romantic thing you have ever done?'
];

let currentStep = 0;
let encourageIndex = 0;
let surpriseIndex = 0;
let emailSent = false;
let totalSteps = steps.length;
const image = document.getElementById('mainImage');
const caption = document.getElementById('caption');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const stepIndicator = document.getElementById('step-indicator');
const finalSection = document.getElementById('finalSection');
const heartsContainer = document.getElementById('hearts-container');
const loveMessage = document.getElementById('loveMessage');
const loveSubtext = document.getElementById('loveSubtext');
const currentStepEl = document.getElementById('currentStep');
const totalStepsEl = document.getElementById('totalSteps');
const replayButton = document.getElementById('replay');
const surpriseButton = document.getElementById('surpriseButton');
const surpriseSection = document.getElementById('surpriseSection');
const surpriseText = document.getElementById('surpriseText');
const heartsDisplay = document.getElementById('heartsDisplay');
const imageWrapper = document.getElementById('image-wrapper');
const emailStatus = document.getElementById('emailStatus');

function sendLoveEmail() {
    if (emailSent) return;
    emailSent = true;

    try {
        if (typeof emailjs === 'undefined') {
            console.warn('EmailJS is not loaded.');
            return;
        }

        emailjs.init('GJz0a2Pm3D5uHAgSa');

        const templateParams = {
            to_email: 'aideprogramming@gmail.com',
            message: 'I love you! 💖',
        };

        emailjs.send('service_c1wxuc7', 'template_gyir5xi', templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                if (emailStatus) {
                    emailStatus.classList.remove('hidden');
                    setTimeout(() => emailStatus.classList.add('hidden'), 5000);
                }
            }, function(error) {
                console.log('Failed to send email:', error);
                alert('Failed to send the email. Please try again!');
            });
    } catch (error) {
        console.error('EmailJS error:', error);
        alert('Something went wrong while sending your love letter.');
    }
}

function updateStepIndicator() {
    const total = steps.length;
    let dots = '';
    for (let i = 0; i < total; i++) {
        if (i === currentStep) {
            dots += '<span class="dot active"></span>';
        } else if (i < currentStep) {
            dots += '<span class="dot completed"></span>';
        } else {
            dots += '<span class="dot"></span>';
        }
    }
    stepIndicator.innerHTML = dots;
}

function updateStepCounter() {
    if (currentStepEl) {
        currentStepEl.textContent = Math.min(currentStep + 1, totalSteps);
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    const symbols = ['❤', '💕', '💖', '💗', '💝', '🌹', '✨', '⭐', '💫', '🎵', '💌'];
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 20 + 16) + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

function startHeartsRain() {
    setInterval(createFloatingHeart, 300);
}

function getRandomEncouragement() {
    const phrase = encouragingPhrases[encourageIndex % encouragingPhrases.length];
    encourageIndex++;
    return phrase;
}

function getRandomMemory() {
    return crushMemories[Math.floor(Math.random() * crushMemories.length)];
}

function getRandomSurprise() {
    const msg = surpriseMessages[surpriseIndex % surpriseMessages.length];
    surpriseIndex++;
    return msg;
}

function getRandomDateIdea() {
    return dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
}

function getRandomQuestion() {
    return surpriseQuestions[Math.floor(Math.random() * surpriseQuestions.length)];
}

function showSurpriseContent() {
    const surpriseTypes = ['message', 'date', 'question'];
    const type = surpriseTypes[Math.floor(Math.random() * surpriseTypes.length)];

    if (type === 'message') {
        surpriseText.textContent = getRandomSurprise();
    } else if (type === 'date') {
        surpriseText.textContent = 'How about: ' + getRandomDateIdea() + '?';
    } else {
        surpriseText.textContent = getRandomQuestion();
    }

    surpriseSection.classList.remove('hidden');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createFloatingHeart(), i * 200);
    }
}

function finishRomanticFlow() {
    image.src = steps[steps.length - 1].image;
    caption.textContent = 'And now, the most important question... Do you love me?';
    stepIndicator.style.display = 'none';
    currentStepEl.style.display = 'none';
    yesButton.textContent = 'Yes, I do! ❤';
    noButton.style.display = 'none';
    noButton.disabled = true;
    noButton.style.pointerEvents = 'none';
    yesButton.onclick = function() {
        caption.textContent = 'I love you too! Now and forever ❤';
        finalSection.classList.remove('hidden');
        sendLoveEmail();
        startHeartsRain();
        document.title = 'My Love for You ❤';
        createFloatingHeart();
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    };
}

function handleYesClick() {
    currentStep++;
    updateStepIndicator();
    updateStepCounter();

    if (currentStep >= steps.length) {
        finishRomanticFlow();
        return;
    }

    image.src = steps[currentStep].image;

    if (currentStep === 1) {
        caption.textContent = getRandomMemory();
    } else if (currentStep === 3) {
        caption.textContent = getRandomDateIdea();
    } else {
        caption.textContent = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    }

    if (currentStep > 2) {
        yesButton.textContent = 'Yes! ❤';
    }

    for (let i = 0; i < 3; i++) {
        setTimeout(() => createFloatingHeart(), i * 150);
    }
}

yesButton.addEventListener('click', handleYesClick);

noButton.addEventListener('mouseover', function() {
    const button = document.getElementById('noButton');
    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.transition = 'all 0.2s ease-out';
    caption.textContent = getRandomEncouragement();
});

noButton.addEventListener('click', function() {
    caption.textContent = getRandomEncouragement();
    const button = document.getElementById('noButton');
    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;
    button.style.left = Math.random() * maxX + 'px';
    button.style.top = Math.random() * maxY + 'px';
});

replayButton.addEventListener('click', function() {
    yesButton.onclick = null;
    yesButton.addEventListener('click', handleYesClick);

    currentStep = 0;
    encourageIndex = 0;
    emailSent = false;
    image.src = steps[0].image;
    caption.textContent = steps[0].caption;
    yesButton.style.display = 'inline-block';
    yesButton.textContent = 'Tell me more ❤';
    noButton.style.display = 'inline-block';
    noButton.disabled = false;
    noButton.style.pointerEvents = 'auto';
    noButton.style.position = 'relative';
    noButton.style.left = 'auto';
    noButton.style.top = 'auto';
    finalSection.classList.add('hidden');
    surpriseSection.classList.add('hidden');
    stepIndicator.style.display = 'flex';
    currentStepEl.style.display = 'inline';
    updateStepIndicator();
    updateStepCounter();
    heartsContainer.innerHTML = '';
});

surpriseButton.addEventListener('click', function() {
    surpriseIndex = 0;
    showSurpriseContent();
    const btnTexts = ['Another One! 💌', 'Surprise Me Again ✨', 'One More 💕'];
    surpriseButton.textContent = btnTexts[Math.floor(Math.random() * btnTexts.length)];
});

updateStepIndicator();
updateStepCounter();
