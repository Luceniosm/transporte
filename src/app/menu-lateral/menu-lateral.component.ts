import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  show: boolean = false;
  usuarioLogado = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openMenu() {
    this.show = this.show === false ? true : false;
  }

  menuLink(menuLink: string): void {
    this.router.navigate([menuLink]);
    this.show = this.show === false ? true : false;
  }

  sair(): void {
    this.usuarioLogado = false;
    this.menuLink('/');
  }

}
