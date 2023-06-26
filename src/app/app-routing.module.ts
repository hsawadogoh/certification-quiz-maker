import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';

const routes: Routes = [
  {
    path: '',
    component: QuizFormComponent,
  },
  {
    path: 'results',
    component: QuizResultComponent,
  },
  {
    path: '**',
    component: QuizFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
