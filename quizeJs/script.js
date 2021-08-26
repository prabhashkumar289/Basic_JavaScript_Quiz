const quizDB = [
    {
        question: "Q1: Which of the following language was developed as the first purely object programming language?",
        a: "SmallTalk",
        b: "C++",
        c: "Kotlin",
        d: "Java",
        ans: "ans1"
    },
    {
        question: "Q2: Who developed object-oriented programming?",
        a: "Adele Goldberg",
        b: "Dennis Ritchie",
        c: "Alan Kay",
        d: "Andrea Ferro",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following is not an OOPS concept?",
        a: "Encapsulation",
        b: "Polymorphism",
        c: "Exception",
        d: "Abstraction",
        ans: "ans3"
    },
    {
        question: "Q4: Which feature of OOPS described the reusability of code?",
        a: "Abstraction",
        b: "Encapsulation",
        c: "Polymorphism",
        d: "Inheritance",
        ans: "ans4"
    },
    {
        question: "Q5: Which of the following language supports polymorphism but not the classes?",
        a: "C++ programming language",
        b: "Java programming language",
        c: "Ada programming language",
        d: "C# programming language",
        ans: "ans3"
    },
    {
        question: "Q6: Which among the following feature is not in the general definition of OOPS?",
        a: "Modularity",
        b: "Efficient Code",
        c: "Code reusability",
        d: "Duplicate or Redundant Data",
        ans: "ans4"
    },
    {
        question: "Q7: Which feature of OOPS derives the class from another class?",
        a: "Inheritance",
        b: "Data hiding",
        c: "Encapsulation",
        d: "Polymorphism",
        ans: "ans1"
    },
    {
        question: "Q8: Define the programming language, which does not support all four types of inheritance?",
        a: "Smalltalk",
        b: "Kotlin",
        c: "Java",
        d: "C++",
        ans: "ans3"
    },
    {
        question: "Q9: A single program of OOPS contains _______ classes?",
        a: "Only 1",
        b: "Only 999",
        c: "Only 100",
        d: "Any number",
        ans: "ans4"
    },
    {
        question: "Q10: Which operator from the following can be used to illustrate the feature of polymorphism?",
        a: "Overloading <<",
        b: "Overloading &&",
        c: "Overloading | |",
        d: "Overloading +=",
        ans: "ans1"
    },
    {
        question: "Q11: Which two features of object-oriented programming are the same?",
        a: "Abstraction and Polymorphism features are the same",
        b: "Inheritance and Encapsulation features are the same",
        c: "Encapsulation and Polymorphism features are the same",
        d: "Encapsulation and Abstraction",
        ans: "ans4"
    },
    {
        question: "Q12: Which header file is required by the C++ programming language to use the OOPS concept?",
        a: "stdio.h",
        b: "iostream.h",
        c: "stdlib.h",
        d: "We can easily use the OOPS concepts in c++ programs without using any header file.",
        ans: "ans4"
    },
    {
        question: "Q13: Which of the following definition is incorrect for polymorphism?",
        a: "Polymorphism helps in redefining the same functionality",
        b: "Polymorphism concept is the feature of object-oriented programming (OOP)",
        c: "It always increases the overhead of function definition",
        d: "Ease in the readability of the program",
        ans: "ans3"
    },
    {
        question: "Q14: Which among the following cannot be used for the concept of polymorphism?",
        a: "Static member function",
        b: "Constructor Overloading",
        c: "Member function overloading",
        d: "Global member function",
        ans: "ans1"
    },
    {
        question: "Q15: Which function best describe the concept of polymorphism in programming languages?",
        a: "Class member function",
        b: "Virtual function",
        c: "Inline function",
        d: "Undefined function",
        ans: "ans2"
    },
    {
        question: "Q16: Which member function is assumed to call first when there is a case of using function overloading or abstract class?",
        a: "Global function",
        b: "Local function",
        c: "Function with lowest priority",
        d: "Function with the highest priority",
        ans: "ans4"
    },
    {
        question: "Q17: Is it true to use polymorphism in the C programming language?",
        a: "True",
        b: "False",
        c: "Not Know",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q18: Which of the following language uses the classes but not the polymorphism concept?",
        a: "Procedure Oriented language",
        b: "Object-based language",
        c: "Class-based language",
        d: "If classes are used, then the polymorphism concept will always be used in the programming languages.",
        ans: "ans2"
    },
    {
        question: "Q19: Which of the following OOP concept is not true for the C++ programming language?",
        a: "A class must have member functions",
        b: "C++ Program can be easily written without the use of classes",
        c: "At least one instance should be declared within the C++ program",
        d: "C++ Program must contain at least one class",
        ans: "ans4"
    },
    {
        question: "Q20: What is the extra feature in classes which was not in the structures?",
        a: "Member functions",
        b: "Data members",
        c: "Public access specifier",
        d: "Static Data allowed",
        ans: "ans1"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    }
    );
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
         <h3> You Scored ${score}/${quizDB.length} ✌🤞</h3>
         <button class="btn" onclick="location.reload()">Play Again </button>
         `;

        showScore.classList.remove('scoreArea');
    }
}
)



