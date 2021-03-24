import { Component, OnInit } from '@angular/core';
import {ReporteService} from '../reporte.service';
import * as $ from 'jquery';;


@Component({
    selector: 'app-root',
    templateUrl: './reportes.component.html',
    styleUrls: ['reportes.component.css'],
    providers: [ReporteService]
  })

  export class ReportesComponent implements OnInit{

     constructor(private reporteservice: ReporteService) { }

     reportes;

    ngOnInit(): void {
      this.reporteservice.leerReportes().subscribe(response =>{
        this.reportes = response;
      })
    }

    buscar(texto){
      var value = texto.toLowerCase();
      $("#tabla tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    }
  }