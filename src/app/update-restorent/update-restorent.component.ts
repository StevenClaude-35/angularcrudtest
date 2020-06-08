import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restorent',
  templateUrl: './update-restorent.component.html',
  styleUrls: ['./update-restorent.component.scss']
})
export class UpdateRestorentComponent implements OnInit {
  editRestaurant=new FormGroup({
    name:new FormControl(''),
    Address:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl('')
  });
  constructor(private commonService:CommonService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.commonService.getcurrentdata(this.route.snapshot.params.id).subscribe(
      (result)=>{
        this.editRestaurant=new FormGroup({
          name:new FormControl(result['name']),
          Address:new FormControl(result['Address']),
          mobile:new FormControl(result['mobile']),
          email:new FormControl(result['email'])
        });
      }
    );
  }
  updateResto(){
    this.commonService.updateResto(this.route.snapshot.params.id,this.editRestaurant.value).subscribe(
      (result)=>{
        console.log(result,'data add successfully');
        
      }
    );
  }


}
