import { Component } from '@angular/core';
import {Upicap} from 'upi-intent';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  transId:any
  amount:any;
  vpa_id:any
  constructor() {}
 async pay(){
 await Upicap.startPayment({
    vpa:'',
    amount:this.amount,
    merchant_code:'',
    name:'',
    trans_id:this.transId
  }).then(res=>{
    console.log(res)
    alert(JSON.stringify(res))
  })
  }
}
/* href="upi://pay?pa=squardellallp@sbi&pn=Squardella Gaming LLP&tr=utx_5698454&mc=5817&am=10.00" */
