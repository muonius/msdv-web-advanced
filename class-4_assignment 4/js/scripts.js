/* create an object
 1. contains questions and corresponding answers
 2. create a checkAnswer function
 3. the function loops through each word in input and match each word in stored answer

 result 
const ai = {...};
let result = ai.checkAnswer(question);
*/

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
      answer: "september",
    },
    {
      question: "can i help you with anything",
      answer: "improve the homework",
    },

    {
      question: "what class is this class",
      answer: "web advanced",
    },
  ],
  checkAnswer: function (input = "") {
    if (input.replace(/[^a-z0-9]/gi, "") === "") alert("type something");
    else {
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
      console.log(output[i].answer);
    }
  },
};

let ans = prompt("Ask away");
ai.checkAnswer(ans);
