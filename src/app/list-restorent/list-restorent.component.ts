import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-list-restorent',
  templateUrl: './list-restorent.component.html',
  styleUrls: ['./list-restorent.component.scss']
})
export class ListRestorentComponent implements OnInit {
 collection:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe(
      (result)=>{
        this.collection=result;
        console.log(this.collection);
        
      }
    );

  }
  deleteResto(id){
    this.commonService.deleteResto(id).subscribe(
      (data)=>{
    this.commonService.getRestoList();
      }
    );
  }

}
