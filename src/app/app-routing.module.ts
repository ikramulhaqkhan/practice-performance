import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Practice-Performance',
    pathMatch: 'full'
  },
  {
    path: 'Practice-Performance',
    title: 'Practice - Performance',
    loadChildren: () =>
      import('./practice-performance/practice-performance.module').then(
        (m) => m.PracticePerformanceModule)
  },
  { path: '**', redirectTo: 'Practice-Performance', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }