import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  tableitem: any =[];
  showedititem: boolean = false;
  editrow: any ='';

  constructor() { 

  }

  ngOnInit() {
  }
 

  item:any[] =["Computers","Mobile","Television","Tablet","Headphones","Adapter",
  "Powerbank","DataCable","ScreenGuards","SDCards","KeyBoard","Mouse","Charger","PenDrive","RAM",
  "MobileCover","Laptop","Speaker","VideoGame","SmartWatch"];

   myitem:any[]=[

         {"name":"Computers","price":"100000","quantity":"100"},
         {"name":"Mobile","price":"400000","quantity":"200"},
         {"name":"Television","price":"1200000","quantity":"240"},
         {"name":"Tablet","price":"1500000","quantity":"300"},
         {"name":"Headphones","price":"100000","quantity":"150"},
         {"name":"Adapter","price":"20000","quantity":"950"},
         {"name":"Powerbank","price":"43000","quantity":"490"},
         {"name":"DataCable","price":"11000","quantity":"2100"},
         {"name":"ScreenGuards","price":"16000","quantity":"3000"},
         {"name":"SDCards","price":"300450","quantity":"4500"},
         {"name":"KeyBoard","price":"22000","quantity":"1200"},
         {"name":"Mouse","price":"6000","quantity":"1043"},
         {"name":"Charger","price":"50000","quantity":"2270"},
         {"name":"PenDrive","price":"14555","quantity":"3466"},
         {"name":"RAM","price":"68000","quantity":"6100"},
         {"name":"MobileCover","price":"18000","quantity":"4677"},
         {"name":"Laptop","price":"170000","quantity":"289"},
         {"name":"Speaker","price":"60100","quantity":"1540"},
         {"name":"VideoGame","price":"12967","quantity":"900"},
         {"name":"SmartWatch","price":"147000","quantity":"1578"}
         ];

msg:string=" ";
saveitem(newitem:string)
{
  this.item.push(newitem);
  this.msg="Item Added Successfully !";
}
   //class end here     
   
   savemyitem(name:string,price:number,quantity:number)
   {
     var newitem ={"name":name,"price":price,"quantity":quantity};
     this.myitem=this.myitem.concat(newitem);
     this.msg="Item Added Successfully to shopping-list!";
   }

   delitem(index:number)
   {
     var status=confirm("Are you sure ?");
     if(status==true)
     {
       this.myitem.splice(index,1);
       this.msg="Item Deleted Successfully from shopping-list";
     }
   }
   
   delmyitem(index:number)
   {
     var status=confirm("Are you sure ?");
     if(status==true)
     {
       this.item.splice(index,1);
       this.msg="Item Deleted Successfully from  shopping-list";
     }
   }

   edititem(val: any) 
   {
     this.editrow = val ;
   }
}
