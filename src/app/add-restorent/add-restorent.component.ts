import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restorent',
  templateUrl: './add-restorent.component.html',
  styleUrls: ['./add-restorent.component.scss']
})
export class AddRestorentComponent implements OnInit {
  alert:boolean=false;
  addRestaurant=new FormGroup({
    name:new FormControl(''),
    Address:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl('')
    

  })
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }
  createResto(){
    //console.log(this.addRestaurant.value);
    this.commonService.addResto(this.addRestaurant.value).subscribe(
      (result)=>{
        this.alert=true;
        this.addRestaurant.reset({});
        console.log("Get data from service",result);
        
      }
    );
    
  }
  closeAlert(){
    this.alert=false;
  }

}
