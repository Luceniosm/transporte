import { Component, OnInit } from '@angular/core';
import { OfertaService } from './oferta.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(
    private ofertaService: OfertaService
    ) { }

  ngOnInit(): void {
    this.carregarOferta();
  }

  carregarOferta(): void{
    this.ofertaService.obterOferta().subscribe(_ => {
      if(_.success){
        console.log(_.result)
      }
    })
  }

}
