# IntelliQuiz - Interactive Quiz Application

A modern, feature-rich quiz application built with vanilla JavaScript, HTML, and CSS. Test your knowledge across multiple subjects with randomized questions and options for an engaging learning experience.

![IntelliQuiz Logo](intelliquiz_logo.svg)

## Features

### 🎯 Core Features
- **Multiple Subject Support**: Choose from various subjects including:
  - Database Management Systems (DBMS)
  - Operating Systems (OS)
  - Computer Networks (CN)
  - Software Engineering (SE)
  - Reasoning
  - History
  - Current Affairs
  - Miscellaneous (random questions from all subjects)

- **Smart Randomization**:
  - Questions are shuffled using Fisher-Yates algorithm for true randomization
  - Answer options are also randomized to prevent memorization
  - Each quiz session provides a unique experience

- **User Management**:
  - Personalized login system
  - Track your progress and best scores per subject
  - Score history saved locally

- **Interactive UI**:
  - Clean, modern design with gradient backgrounds
  - Real-time feedback after each answer
  - Responsive layout for different screen sizes
  - Attractive logo with modern design elements

- **Flexible Quiz Options**:
  - Select number of questions (5, 10, 15, or 20)
  - Subject-specific quizzes or mixed questions
  - Instant results and scoring

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with gradients, animations, and modern design
- **JavaScript (ES6+)**: Core logic and interactivity
- **LocalStorage API**: User data persistence
- **SVG**: Vector graphics for logo

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sayan-banerjee-4222/quiz_app.git
```

2. Navigate to the project directory:
```bash
cd quiz_app
```

3. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or simply double-click the `index.html` file.

## Usage

1. **Login**: Enter your name on the welcome screen
2. **Select Subject**: Choose a subject from the available options
3. **Select Number of Questions**: Pick how many questions you want to answer (5, 10, 15, or 20)
4. **Take the Quiz**: Answer questions by clicking on the options
5. **View Results**: See your score at the end and track your best performance

## Project Structure

```
quiz_app/
├── index.html              # Main HTML file with quiz logic
├── index.js                # Question database and core functions
├── style.css               # Styling and animations
├── intelliquiz_logo.svg    # Application logo
├── questions.json          # Question data (if applicable)
├── script.js               # Additional scripts
├── main.js                 # Main JavaScript logic
├── upload.html             # Upload functionality
├── upload.js               # Upload scripts
├── test.html               # Testing page
├── quiz.html               # Alternative quiz page
├── firebase.js             # Firebase configuration (if used)
└── README.md               # This file
```

## Question Database

The application includes 30-50+ questions per subject covering:
- **DBMS**: SQL, normalization, transactions, indexes, keys
- **OS**: Process management, memory management, scheduling algorithms
- **CN**: Network layers, protocols, TCP/IP, routing
- **SE**: SDLC, testing, design patterns, methodologies
- **Reasoning**: Logical reasoning, patterns, puzzles
- **History**: World history, important events, personalities
- **Current Affairs**: Recent events, politics, sports, achievements

## Features in Detail

### Randomization Algorithm
The app uses the Fisher-Yates shuffle algorithm for both questions and options:
```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

### Score Tracking
- Scores are saved per subject in browser's localStorage
- Best score is highlighted for each subject
- Complete history of attempts is maintained

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Future Enhancements

- [ ] Add timer for each question
- [ ] Implement difficulty levels
- [ ] Add explanations for correct answers
- [ ] Leaderboard system
- [ ] Export results as PDF
- [ ] Dark mode toggle
- [ ] Mobile app version
- [ ] Backend integration for global scores
- [ ] More subjects and questions

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Adding New Questions

To add questions, edit the `db` array in `index.js`:
```javascript
{
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: "Correct Option",
  subject: "subject_code"
}
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Sayan Banerjee**
- GitHub: [@Sayan-banerjee-4222](https://github.com/Sayan-banerjee-4222)

## Acknowledgments

- Thanks to all contributors who help improve this project
- Inspired by the need for better learning tools
- Built with passion for education and technology

## Support

If you like this project, please give it a ⭐ on GitHub!

For issues or questions, please [open an issue](https://github.com/Sayan-banerjee-4222/quiz_app/issues).

---

Made with ❤️ by Sayan Banerjee
