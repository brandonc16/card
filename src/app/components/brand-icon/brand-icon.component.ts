import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-icon',
  templateUrl: './brand-icon.component.html',
  styleUrls: ['./brand-icon.component.css']
})
export class BrandIconComponent implements OnInit{
  brandInfo = {};
  dataBrands:any;
  totalBrands: any;
  constructor(public apiService:apiService){}
  ngOnInit(): void {
    this.getListIcons();
  }
  getListIcons(){
    this.apiService.brandIconList().subscribe((resp:any)=>{
      console.log('entro', resp);
      
      this.totalBrands = resp.Tot_Mar
      this.brandInfo = resp.Marcas
      this.dataBrands = Object.values(this.brandInfo);

    })
  }
}
