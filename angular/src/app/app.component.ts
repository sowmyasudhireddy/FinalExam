import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { ValidateAnswerService } from './services/validateanswers.service';
import { createAotCompiler } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: any;
  correct_answer: String;
  selected_option: String;
  score = 0;
  answersMap = {};

  constructor(private questionService: QuestionsService, private validateAnserservice: ValidateAnswerService) { }

  ngOnInit() {
    this.questionService.getquestions().subscribe((res) => {
      this.questions = res;
      this.createMap(res);
    }, err => {
      console.log(err);
    });
  }

  createMap(questions) {
    questions.forEach(question => {
      this.answersMap[question.question] = question.correct_answer;
    });
    console.log(this.answersMap);
  }

  selectedOption(event, question) {
    console.log(this.answersMap[question.question], event.target.value);
    if (this.answersMap[question.question] === event.target.value) {
      this.score++;
    }
  }

  showScore() {
    alert(`Score : ${this.score} / ${this.questions.length}`);
  }
}
