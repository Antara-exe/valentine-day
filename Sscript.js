//Handle yes/no answers
function handleAnswer(isYes, nextPage) {
    const responseDiv = document.getElementById('response');
    if (isYes) {
        responseDiv.textContent = "Aww, that's what I hoped to hear! 💕";
        responseDiv.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = nextPage;
        }, 1000); // Delay before navigating
    } 
    else {
        responseDiv.textContent = "No worries, let's keep going... 😊";
        responseDiv.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = nextPage;
        }, 1000);
    }
}
function celebrate() {
        const celebrationDiv = document.getElementById('celebration');
        celebrationDiv.classList.remove('hidden');
        // Add confetti or more animations if desired (extend with libraries like confetti.js)
}

// Define your questions here (array of strings). Customize as needed.
const questions = [
    "Will you be my valentine? 💕",
    "Are you sure? Think again! 😢",
    "Please reconsider... you mean everything to me! 💖",
    "One more chance? I promise it'll be fun! 🎉",
    // Add more if desired, or loop back
];

// Only run this on final.html
if (window.location.pathname.includes('final.html')) {
    // Elements
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const subtitle = document.getElementById('subtitle');
    const container = document.querySelector('.glass-container');
    
    // Variables
    let noClickCount = 0;
    let yesBtnScale = 1;
    let currentQuestionIndex = 0; // Start at Question 1 (index 0)
    
    // Initialize the first question
    question.textContent = questions[currentQuestionIndex];
    
    // Function to move No button
    function moveNoButton() {
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        const maxX = containerRect.width - btnRect.width - 40;
        const maxY = containerRect.height - btnRect.height - 40;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.3s ease';
    }
    
    // NO button interaction
    noBtn.addEventListener('mouseenter', () => {
        if (noClickCount > 0) {
            moveNoButton();
        }
    });
    
    noBtn.addEventListener('click', () => {
        noClickCount++;
        
        // Advance to the next question (if not at the end)
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            question.textContent = questions[currentQuestionIndex];
        } else {
            // Optional: Loop back to first question or keep the last one
            // currentQuestionIndex = 0; // Uncomment to loop
            // question.textContent = questions[currentQuestionIndex];
        }
        
        // Make YES button bigger and more attractive
        yesBtnScale += 0.2;
        yesBtn.style.transform = `scale(${yesBtnScale})`;
        yesBtn.style.background = 'linear-gradient(135deg, #fa73b2ff 0%, #f7bddaff 100%)';
        
        // Move NO button
        moveNoButton();
        
        // Update subtitle (optional, or customize per question)
        subtitle.textContent = "Please reconsider... you mean everything to me! 💕";
    });
    // yesBtn.addEventListener('click', celebrate);
    yesBtn.addEventListener('click', () => {
    const celebration = document.getElementById('celebration');

    // Hide main container (optional)
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';

    // Show celebration
    celebration.classList.remove('hidden');
});

}