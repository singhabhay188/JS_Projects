let questions = [
    {
      "question": "What is the default value of a boolean variable in Java if it's not explicitly initialized?",
      "options": ["true", "false", "It depends on the compiler.", "It's not allowed to leave a boolean variable uninitialized."],
      "correctOption": 1
    },
    {
      "question": "In Java, which keyword is used to explicitly allocate memory to an object?",
      "options": ["new", "create", "alloc", "malloc"],
      "correctOption": 0
    },
    {
      "question": "What is the purpose of the static keyword in Java?",
      "options": ["It indicates that a variable or method belongs to an instance of the class.", "It allows a method to be overridden in a subclass.", "It denotes a variable or method as belonging to the class rather than an instance.", "It is used to declare constant values."],
      "correctOption": 2
    },
    {
      "question": "Which data structure in Java is based on the Last-In-First-Out (LIFO) principle?",
      "options": ["Queue", "Set", "Stack", "List"],
      "correctOption": 2
    },
    {
      "question": "What is the Java keyword used to handle exceptions?",
      "options": ["try", "catch", "throw", "finally"],
      "correctOption": 1
    },
    {
      "question": "What is the Java keyword used to exit from a loop prematurely?",
      "options": ["stop", "break", "exit", "return"],
      "correctOption": 1
    },
    {
      "question": "Which Java package provides classes for working with files and directories?",
      "options": ["java.util", "java.io", "java.nio", "java.file"],
      "correctOption": 1
    },
    {
      "question": "In Java, what is the term used to describe the process of converting an object into a sequence of bytes for storage or transmission?",
      "options": ["Serialization", "Encapsulation", "Inheritance", "Polymorphism"],
      "correctOption": 0
    }
  ]
  

  let questionText = document.getElementById('question');
  let optionsText = document.getElementById('options');
  let nextButton = document.getElementById('next');

  let cquestionIndex = -1;
  let score = 0;
  let isGameFinished = false;

  function setQuestion(){
    cquestionIndex++;
    if(cquestionIndex==questions.length){
        finishQuiz();
        return;
    }

    //hide the button
    nextButton.style.opacity = 0;

    let cquestion = questions[cquestionIndex];
    optionsText.innerHTML = "";
    questionText.innerText = `${cquestionIndex+1}. ${cquestion.question}`;
    for(let i=0;i<4;i++){
        let li = document.createElement('li');
        li.setAttribute('id',`${i}`);
        li.innerText = cquestion.options[i];
        optionsText.appendChild(li);
    }

    //change next question to finish quiz if this is last question
    if(cquestionIndex==questions.length-1) nextButton.innerText = 'Finish Quiz';
  }

  function startQuiz(){
    isGameFinished = false;
    nextButton.innerText = 'Next Question' 
    cquestionIndex=-1;
    score=0;
    setQuestion();
  }

  function finishQuiz(){
    isGameFinished = true;
    questionText.innerText = `Your Score is ${score} out of 8.`;
    optionsText.innerHTML = "";
    nextButton.innerText = 'Play Again' 
  }


  nextButton.addEventListener('click',()=>{
    if(isGameFinished){
        //game is finished no more question hence start new Game
        isGameFinished = false;
        startQuiz();
    }
    //else we will be moving to new question
    else               setQuestion();
  })

  startQuiz();



  optionsText.addEventListener('click',(dets)=>{
      if(dets.target.tagName=='LI'){
        let cOptionSelected = dets.target.id;
        let correctOption = questions[cquestionIndex].correctOption;

        //highlight the correct option to green
        optionsText.childNodes[correctOption].classList.add('correct');

        //if the option selected is different from ans then color it red
        if(correctOption!=cOptionSelected) optionsText.childNodes[cOptionSelected].classList.add('incorrect');
        else  score++;

        //now no more option can be hovered or selected
        for(let i=0;i<4;i++){
          optionsText.childNodes[i].classList.add('restricted');
        }
        
        nextButton.style.opacity = 1;
      } 
  })