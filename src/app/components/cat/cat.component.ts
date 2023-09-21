import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  catInfo1: any = {};
  dataArr: any
constructor(public apiService: apiService){
}

ngOnInit(): void {
  this.getCategories();
}

getCategories(){
  this.apiService.catList().subscribe((resp:any)=>{
    this.catInfo1 = resp.Categorias;
     this.dataArr = Object.values(this.catInfo1);
  })
}



}
