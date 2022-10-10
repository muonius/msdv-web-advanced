const form = document.querySelector("#searchForm");
const inp = form.elements.searchBox;
//button onclick function

const button = document.querySelector("button");
button.addEventListener("click", submitQuestion);

function submitQuestion(e) {
  e.preventDefault();
  let question = inp.value;
  ai.checkAnswer(question);
}
//stored questions
const ai = {
  stored: [
    { question: "hello", answer: "hello" },
    { question: "how are you", answer: "getting better" },
    { question: "how's your day", answer: "alright" },
    { question: "what is your name", answer: "HAL" },
    {
      question: "why are you here",
      answer: "sorry...that question needs pondering",
    },
    {
      question: "what is the meaning on life",
      answer: "I am pretty sure it's 42",
    },
    {
      question: "are you happy",
      answer: "as much as I can be",
    },
    {
      question: "what month is this month",
      answer: "October",
    },
    {
      question: "can i help you with anything",
      answer: "improve the homework",
    },
    {
      question: "when is your birthday",
      answer: "september",
    },
    {
      question: "what class is this class",
      answer: "web advanced",
    },
  ],
  checkAnswer: function (input = "") {
    if (input.replace(/[^a-z0-9]/gi, "") === "") {
      let error_label = document.createElement("p");
      error_label.setAttribute("id", "error_label");
      error_label.innerHTML = "Please enter a question";
      form.appendChild(error_label);
    } else {
      let error_label = document.querySelector("#error_label");
      if (error_label) {
        error_label.remove();
        let replaced = input.toLowerCase().split(" ");
        replaced = replaced.map((d) => d.replace(/[^a-z0-9]/gi, ""));
        const output = this.stored;
        let map = [];
        output.forEach((o) => {
          let count = 0;
          for (let r of replaced) {
            if (o.question.includes(r)) {
              count++;
            }
          }
          map.push(count);
        });
        let i = map.indexOf(Math.max(...map));

        let ans = document.createElement("p");
        ans.innerHTML = `Question: ${input} | Answer: ${output[i].answer}`;
        ans.setAttribute("id", "answer");
        form.appendChild(ans);
      } else {
        let replaced = input.toLowerCase().split(" ");
        replaced = replaced.map((d) => d.replace(/[^a-z0-9]/gi, ""));
        const output = this.stored;
        let map = [];
        output.forEach((o) => {
          let count = 0;
          for (let r of replaced) {
            if (o.question.includes(r)) {
              count++;
            }
          }
          map.push(count);
        });
        let i = map.indexOf(Math.max(...map));

        let ans = document.createElement("p");
        ans.innerHTML = `Question: ${input} | Answer: ${output[i].answer}`;
        ans.setAttribute("id", "answer");
        form.appendChild(ans);
      }
    }
  },
};
