import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneQuizPartComponent } from './quiz-form/one-quiz-part/one-quiz-part.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    QuizFormComponent,
    OneQuizPartComponent,
    QuizResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
