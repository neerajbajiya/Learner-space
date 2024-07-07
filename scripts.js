let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {currentSlideIndex = 0}    
    if (n < 0) {currentSlideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[currentSlideIndex].style.display = "block";  
}

function submitQuiz() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById("quiz-result");
    if (answer) {
        if (answer.value === "Paris") {
            result.textContent = "Correct!";
        } else {
            result.textContent = "Incorrect!";
        }
    } else {
        result.textContent = "Please select an answer.";
    }
}
