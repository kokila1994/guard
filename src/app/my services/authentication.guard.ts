import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private service:SharedService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.username=="kokila" && this.service.password=="koki@1234")
      {
        console.log("user authenticated to mainbody component");
        this.router.navigate(['/rightnav'])
        return true;
      }
      else{
        console.log("user restricted");
        return false;
      }
    
  }
  
}
