import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SeafoodComponent } from './pages/seafood/seafood.component';
import { DairyComponent } from './pages/dairy/dairy.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'seafood', component: SeafoodComponent },
  { path: 'dairy', component: DairyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
