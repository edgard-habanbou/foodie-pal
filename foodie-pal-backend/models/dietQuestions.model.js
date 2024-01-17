const mongoose = require("mongoose");

const questionAnswerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const dietQuestionsSchema = new mongoose.Schema({
  Diet: {
    sectionName: String,
    questions: [questionAnswerSchema],
  },
});

const dietQuestions = mongoose.model("dietQuestions", dietQuestionsSchema);

module.exports = dietQuestions;
