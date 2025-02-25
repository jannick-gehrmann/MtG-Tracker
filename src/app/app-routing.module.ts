import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TypeTrackerComponent } from './type-tracker/type-tracker.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'type-tracker', component: TypeTrackerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
