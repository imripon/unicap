# unicap
Native android Capacitor Plugins for Ionic

## This an Example for using Ts Angular Ionic 
#### find more on
https://www.npmjs.com/package/upi-intent
### Install via npm
```bash
npm install upi-intent
```
### Import in Ionic
```bash
import {Upicap} from 'upi-intent';
```
### Use in .ts
```bash
async pay(){
 await Upicap.startPayment({
    vpa:'YOUR_UPI_ID',
    amount:'10.00',
    merchant_code:'UPI_MERCHANT_CODE',
    name:'UPI_MERCHANT_NAME',
    trans_id:'UNIQE_TRANSCATION_ID'
  }).then(res=>{
    console.log(res)
    alert(JSON.stringify(res))
  }).catch(err=>{
    console.log(err.message)
})
  }
```
### Interfaces


#### Transaction

| Prop                | Type                |
| ------------------- | ------------------- |
| **`vpa`**           | <code>string</code> |
| **`amount`**        | <code>string</code> |
| **`name`**          | <code>string</code> |
| **`trans_id`**      | <code>string</code> |
| **`merchant_code`** | <code>string</code> |
