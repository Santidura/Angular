import { Component,OnInit } from '@angular/core';
import { ApiproductosService } from '../service/apiproductos.service';

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  styleUrls: ['./homeapp.component.css']
})
export class HomeappComponent implements OnInit {
  
  products : any[] = [];
  
  constructor(private serviceproducts : ApiproductosService){

  }
  
  ngOnInit(): void {
   this.fillproducts();
  }


  fillproducts(){
    this.serviceproducts.getproducts().subscribe( data => {
      this.products = data;
      console.log(this.products);
    } )
  }

}
