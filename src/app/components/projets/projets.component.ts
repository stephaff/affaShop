import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {

  constructor(
    private router: Router
  ){}

  goTo(){
    this.router.navigate(['home'])
  }

}
