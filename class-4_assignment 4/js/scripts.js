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
    { question: "how are you", answer: "getting better" },
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
      answer: "as much as I can",
    },
  ],
  checkAnswer: function (input) {
    let replaced = input.toLowerCase().split(" ");
    replaced = replaced.map((d) => d.replace(/[^a-z0-9]/gi, ""));
    const output = this.stored;
    output.forEach((o) => {
      o.count = 0;
      for (let r of replaced) {
        if (o.question.includes(r)) {
          o.count++;
        }
      }
      let i = output.indexOf(Math.max(...output[i].count));

      console.log(i);
    });
  },
};

ai.checkAnswer("How are you today?");
