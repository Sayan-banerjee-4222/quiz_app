class QuizApp {
    constructor() {
        this.currentPlayer = null;
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.userAnswers = [];
        this.categories = [];
        this.currentQuizConfig = null;
        this.gameState = 'welcome';
        this.quantitativeQuestions = this.getQuantitativeQuestions();
        
        this.initializeApp();
        this.bindEvents();
    }
    
    getQuantitativeQuestions() {
        return [
            {
                question: "If a train travels 120 km in 2 hours, what is its average speed?",
                correct_answer: "60 km/h",
                incorrect_answers: ["50 km/h", "70 km/h", "80 km/h"],
                category: "Quantitative Aptitude",
                difficulty: "easy",
                type: "multiple"
            },
            {
                question: "What is 15% of 240?",
                correct_answer: "36",
                incorrect_answers: ["30", "40", "42"],
                category: "Quantitative Aptitude",
                difficulty: "easy",
                type: "multiple"
            }
        ];
    }
    
    initializeApp() {
        // Initialize UI elements
        this.showScreen('welcomeScreen');
        
        // Check for existing player data
        const savedPlayer = localStorage.getItem('quizPlayer');
        if (savedPlayer) {
            this.currentPlayer = JSON.parse(savedPlayer);
            document.getElementById('playerName').value = this.currentPlayer.name;
            document.getElementById('avatarColor').value = this.currentPlayer.avatarColor;
        }
    }
    
    bindEvents() {
        // Welcome screen events
        document.getElementById('enterQuiz').addEventListener('click', () => {
            this.handlePlayerRegistration();
        });
        
        // Main menu navigation
        document.getElementById('navSolo').addEventListener('click', () => {
            this.showScreen('setupScreen');
        });
        
        document.getElementById('navMultiplayer').addEventListener('click', () => {
            this.showScreen('multiplayerScreen');
        });
        
        document.getElementById('navLeaderboard').addEventListener('click', () => {
            this.showScreen('leaderboardScreen');
        });
        
        // Setup screen events
        document.getElementById('startQuiz').addEventListener('click', () => {
            this.startQuiz();
        });
        
        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showScreen('mainMenuScreen');
        });
        
        // Multiplayer screen events
        document.getElementById('backToMenuFromMultiplayer').addEventListener('click', () => {
            this.showScreen('mainMenuScreen');
        });
        
        // Quiz screen events
        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        document.getElementById('finishQuiz').addEventListener('click', () => {
            this.finishQuiz();
        });
        
        // Results screen events
        document.getElementById('viewLeaderboard').addEventListener('click', () => {
            this.showScreen('leaderboardScreen');
        });
        
        document.getElementById('playAgain').addEventListener('click', () => {
            this.showScreen('mainMenuScreen');
        });
        
        // Leaderboard screen events
        document.getElementById('backToMenuFromLeaderboard').addEventListener('click', () => {
            this.showScreen('mainMenuScreen');
        });
    }
    
    handlePlayerRegistration() {
        const playerName = document.getElementById('playerName').value.trim();
        const avatarColor = document.getElementById('avatarColor').value;
        
        if (!playerName) {
            this.showNotification('Please enter your name to continue', 'error');
            return;
        }
        
        // Save player info
        this.currentPlayer = {
            name: playerName,
            avatarColor: avatarColor,
            scores: []
        };
        
        localStorage.setItem('quizPlayer', JSON.stringify(this.currentPlayer));
        
        // Update UI with player info
        document.getElementById('userName').textContent = playerName;
        document.getElementById('userAvatar').textContent = playerName.charAt(0).toUpperCase();
        document.getElementById('userAvatar').style.backgroundColor = avatarColor;
        
        // Show player info and best score
        document.getElementById('userInfo').style.display = 'flex';
        document.getElementById('currentRank').style.display = 'block';
        
        // Show main menu
        this.showScreen('mainMenuScreen');
    }
    
    showScreen(screenId) {
        // Hide all screens
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show the requested screen
        document.getElementById(screenId).classList.add('active');
    }
    
    startQuiz() {
        // Get quiz configuration
        const numQuestions = document.getElementById('numQuestions').value;
        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('difficulty').value;
        const type = document.getElementById('type').value;
        
        this.currentQuizConfig = {
            numQuestions,
            category,
            difficulty,
            type
        };
        
        // Show loading screen
        document.getElementById('loadingScreen').style.display = 'block';
        
        // Load questions (in a real app, this would be an API call)
        setTimeout(() => {
            this.questions = this.quantitativeQuestions;
            this.setupQuiz();
            document.getElementById('loadingScreen').style.display = 'none';
        }, 1500);
    }
    
    setupQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        
        // Update quiz stats
        document.getElementById('currentQ').textContent = 1;
        document.getElementById('totalQ').textContent = this.questions.length;
        document.getElementById('currentScore').textContent = 0;
        
        // Show quiz screen
        this.showScreen('quizScreen');
        
        // Display first question
        this.displayQuestion();
    }
    
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        
        // Update progress bar
        const progressPercent = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progressPercent}%`;
        
        // Display question info
        document.getElementById('questionCategory').textContent = question.category;
        
        // Display difficulty indicator
        const difficultyIndicator = document.getElementById('difficultyIndicator');
        difficultyIndicator.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            dot.className = 'difficulty-dot';
            if ((question.difficulty === 'easy' && i === 0) ||
                (question.difficulty === 'medium' && i < 2) ||
                (question.difficulty === 'hard' && i < 3)) {
                dot.classList.add('active');
            }
            difficultyIndicator.appendChild(dot);
        }
        
        // Display question text
        document.getElementById('questionText').textContent = question.question;
        
        // Display answers
        const answersGrid = document.getElementById('answersGrid');
        answersGrid.innerHTML = '';
        
        // Combine correct and incorrect answers
        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        
        // Shuffle answers
        for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
        }
        
        // Create answer buttons
        allAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.addEventListener('click', () => this.selectAnswer(answer, button));
            answersGrid.appendChild(button);
        });
        
        // Hide next/finish buttons
        document.getElementById('nextQuestion').style.display = 'none';
        document.getElementById('finishQuiz').style.display = 'none';
    }
    
    selectAnswer(answer, button) {
        // Clear previous selection
        const answerButtons = document.querySelectorAll('.answer-btn');
        answerButtons.forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Select new answer
        button.classList.add('selected');
        this.selectedAnswer = answer;
        
        // Show next button if not last question
        if (this.currentQuestion < this.questions.length - 1) {
            document.getElementById('nextQuestion').style.display = 'block';
        } else {
            document.getElementById('finishQuiz').style.display = 'block';
        }
    }
    
    nextQuestion() {
        if (!this.selectedAnswer) {
            this.showNotification('Please select an answer', 'error');
            return;
        }
        
        // Check if answer is correct
        const currentQ = this.questions[this.currentQuestion];
        const isCorrect = this.selectedAnswer === currentQ.correct_answer;
        
        if (isCorrect) {
            this.score++;
            document.getElementById('currentScore').textContent = this.score;
        }
        
        // Store user answer
        this.userAnswers.push({
            question: currentQ.question,
            userAnswer: this.selectedAnswer,
            correctAnswer: currentQ.correct_answer,
            isCorrect: isCorrect
        });
        
        // Move to next question
        this.currentQuestion++;
        document.getElementById('currentQ').textContent = this.currentQuestion + 1;
        this.selectedAnswer = null;
        
        // Display next question or finish quiz
        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }
    
    finishQuiz() {
        // Save score
        this.currentPlayer.scores.push({
            score: this.score,
            total: this.questions.length,
            date: new Date().toISOString(),
            category: this.questions[0].category
        });
        
        localStorage.setItem('quizPlayer', JSON.stringify(this.currentPlayer));
        
        // Display results
        document.getElementById('finalScore').textContent = `${this.score}/${this.questions.length}`;
        
        // Show achievements
        const achievements = document.getElementById('achievementBadges');
        achievements.innerHTML = '';
        
        if (this.score === this.questions.length) {
            const badge = document.createElement('span');
            badge.className = 'achievement-badge achievement-new';
            badge.textContent = 'Perfect Score!';
            achievements.appendChild(badge);
        }
        
        if (this.score > (this.questions.length * 0.8)) {
            const badge = document.createElement('span');
            badge.className = 'achievement-badge achievement-personal-best';
            badge.textContent = 'Excellent!';
            achievements.appendChild(badge);
        }
        
        // Show results details
        const resultsDetails = document.getElementById('resultsDetails');
        resultsDetails.innerHTML = '<h3>Question Breakdown:</h3>';
        
        this.userAnswers.forEach((answer, index) => {
            const detail = document.createElement('div');
            detail.style.marginBottom = '15px';
            detail.innerHTML = `
                <p><strong>Q${index + 1}:</strong> ${answer.question}</p>
                <p style="color: ${answer.isCorrect ? '#27ae60' : '#e74c3c'}">
                    Your answer: ${answer.userAnswer} ${answer.isCorrect ? '✓' : '✗'}
                </p>
                ${!answer.isCorrect ? `<p style="color: #27ae60">Correct answer: ${answer.correctAnswer}</p>` : ''}
            `;
            resultsDetails.appendChild(detail);
        });
        
        // Show results screen
        this.showScreen('resultsScreen');
    }
    
    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});