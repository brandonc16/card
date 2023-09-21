import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  brandInfo = {};
  dataBrands:any;
  totalBrands: any;
  constructor(public apiService:apiService){}
  modoVisualizacion = 'cuadros'; 

  cambiarModoVisualizacion(modo: string) {
    this.modoVisualizacion = modo;
  }
 ngOnInit(): void {
   this.getBrands();
 }
  getBrands(){
    this.apiService.brandList().subscribe((resp:any)=>{
      this.totalBrands = resp.Tot_Marcas
      this.brandInfo = resp.Marcas
      this.dataBrands = Object.values(this.brandInfo);

    })
  }
  actionButton(){
    alert('sijala')
  }
}

