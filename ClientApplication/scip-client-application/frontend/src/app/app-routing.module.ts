import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeafoodComponent } from './pages/seafood/seafood.component';


const routes: Routes = [
  { path: '', component: SeafoodComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
