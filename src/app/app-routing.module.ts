import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineeringComponent } from './engineering/engineering.component';
import { ArtsComponent } from './arts/arts.component';
import { ScienceComponent } from './science/science.component';
import { VocationalComponent } from './vocational/vocational.component';


const routes: Routes = [
  { path: '', component: EngineeringComponent },
  { path: 'engineering', component: EngineeringComponent },
  { path: 'arts', component: ArtsComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'vocational', component: VocationalComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
