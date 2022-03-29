import { Component, OnInit } from '@angular/core';
import { Oferta } from './oferta-model/oferta.model';
import { OfertaService } from './oferta.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  ofertas: Array<Oferta> = [];
  constructor(
    private ofertaService: OfertaService
    ) { }

  ngOnInit(): void {
    this.carregarOferta();
  }

  carregarOferta(): void{
    this.ofertaService.obterOferta().subscribe(_ => {
      if(_.success){
        this.ofertas = _.result as Array<Oferta>;
        console.log(_.result)
      }
    })
  }

}
