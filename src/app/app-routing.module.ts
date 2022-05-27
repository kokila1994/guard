import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAuthenticationGuard } from './child-authentication.guard';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { Child1Component } from './dashboard/leftnav/child1/child1.component';
import { Child2Component } from './dashboard/leftnav/child2/child2.component';
import { LeftnavComponent } from './dashboard/leftnav/leftnav.component';
import { MainbodyComponent } from './dashboard/mainbody/mainbody.component';
import { RightnavComponent } from './dashboard/rightnav/rightnav.component';
import { AuthenticationGuard } from './my services/authentication.guard';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"mainbody",component:MainbodyComponent,canActivate:[AuthenticationGuard]},
  {path:"leftnav",component:LeftnavComponent},
  {path:"leftnav",canActivateChild:[ChildAuthenticationGuard],
  children:[{path:"child1",component:Child1Component},
  {path:"child2",component:Child2Component}
]
},
  // {path:"leftnav",loadChildren:()=>import('./dashboard/leftnav/leftnav.module').then(m=>m.LeftnavModule)},
  {path:"rightnav",component:RightnavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
