# unicap
Native android Capacitor Plugins for Ionic

##
This an Example for using Ts Angular Ionic 
####
find more 
https://www.npmjs.com/package/upi-intent

###
Use in .ts
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
  })
  }
```
