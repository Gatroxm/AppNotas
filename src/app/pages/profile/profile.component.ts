import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  usuarioLogin: string;
  constructor() { }

  ngOnInit(): void {
    this.usuarioLogin = JSON.parse(localStorage.getItem('usuario'));
  }

}
