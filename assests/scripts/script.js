document.addEventListener('DOMContentLoaded',ready)


function ready(){
    var location = window.location.href

let currentL=location.split('/')


 let NavbarLinks = document.querySelectorAll('.nav-icon')  
 NavbarLinks.forEach((bar)=>{
     bar.addEventListener('click',function(){
         let  value = this.innerText
        
         if(value==='Cart'){
         window.location.href= '/checkout.html'
         }else if(value==='Account'){
           window.location.href= '/dashboard.html'
         }else if(value==='Logout'){
            window.location.href= '/index.html'
         }
         

     })
 })
 let home_icon = document.querySelector('#home-icon')
 home_icon.addEventListener('click',function(){
     window.location.href='index.html'
 })
  if(currentL[3]==='authentication.html'){

  
    // authentication
     let loginForm= document.querySelector('#login_form')
     let signupForm= document.querySelector('#sign_up_form')
     let forgotpasswordForm =document.querySelector('#forgot-password')
     let forgpassbtn = document.querySelector('#forgot-password-instead') 
     let signupbtn = document.querySelector('#signup-instead') 
     let loginbtn = document.querySelector('#login-instead') 

   signupbtn.addEventListener('click',  function(e){
    loginForm.style.display= 'none'
    forgotpasswordForm.style.display="none" 
    signupForm.style.display='block'
  
    
    } )
    
    forgpassbtn.addEventListener('click',function(){
     loginForm.style.display='none'
     signupForm.style.display='none'
     forgotpasswordForm.style.display='block'
    })
    
    loginbtn.addEventListener('click',function(){
        loginForm.style.display='block'
        signupForm.style.display='none'
        forgotpasswordForm.style.display='none'
     
    })

    
    document.querySelector('#fullname').addEventListener('keyup', function(){
        let  value =this.value
        let label = document.querySelector('#reg_name_label')
        let patt = /[0-9]/g
        
        if(value.length<5){
            label.style.color='red'
            label.innerHTML='Full Name too Short  <i class="fas fa-stop-circle"></i>'
        }else if(patt.test(value)==true){
            label.style.color='red'
            label.innerHTML='Name cannot contain Numbers <i class="fas fa-stop-circle"></i> '
        }else{
            label.style.color='green'
            label.innerHTML='Full Name  <i class="fas fa-check"></i>'
        }
        }
    )

    document.querySelector('#reg_password').addEventListener('keyup', function(e){
     
        let  value =this.value
        let label = document.querySelector('#reg_pass_label')
        let hasNumeric = /[0-9]/g
        let hasUpperCase = /[A-Z]/
        let hasLowerCase = /[a-zA-Z]/
        let hasChaacters = /[@|#|.|||(|)]/
        
        if(value.length<6 || value.length>15){
            label.style.color='red'
            label.innerHTML='Password must be between 6 and 15 characters long  <i class="fas fa-stop-circle"></i>'
        }else if(hasNumeric.test(value)==false){
            label.style.color='red'
            label.innerHTML='Password Must Contain atleast one Number  <i class="fas fa-stop-circle"></i>'
        }else if(hasLowerCase.test(value)==false ){
            label.style.color='red'
            label.innerHTML='Password Must Contain atleast one Letter  <i class="fas fa-stop-circle"></i>'
        } else {
            label.style.color='green'
            label.innerHTML='Password  <i class="fas fa-check"></i>'
        }
        }
    )
    document.querySelector('#confirm_password').addEventListener('keyup',function(){
        let  value = this.value
        let password= document.querySelector('#reg_password').value;
        let label = document.querySelector('#reg_pass_conf_label')

        if (value!==password){
          label.style.color='red'
          label.innerHTML='Confirmation Password Must match Desired Password <i class="fas fa-stop-circle"></i> '
        }else{
            label.style.color='green'
            label.innerHTML='Confirmation Password  <i class="fas fa-check"></i>'
        }
    })



    let SignupForm = document.querySelector('#signupForm')
    SignupForm.addEventListener('submit',function(e){
            e.preventDefault()
           let fullname = e.target[0].value
           let email = e.target[1].value
           let password =  e.target[2].value
           let confpassword =  e.target[3].value

           
            
    })
  }else if(currentL[3]==='address-book.html'){
    //    select address     
    let Adaddressbtn = document.querySelector('#add-new-address')
    let addressbook = document.querySelector('#add-address')
    let currentStyle = getComputedStyle(addressbook)
    let addressLoc = document.querySelector("#address-settings")



    Adaddressbtn.addEventListener('click',function () {

    if(currentStyle.display==='none'){
        addressbook.style.display='block'
        addressLoc.style.display='none'

    }else{
        addressbook.style.display='none'
    }
    })

    let recipient = document.querySelector('#recipient')
    let box = document.querySelector('#poBOX')
    let reclocation = document.querySelector('#location')
    let recphone = document.querySelector('#phone')

    recipient.addEventListener('keyup',function (e) {
       let value = this.value
       
       let regex = /[a-zA-Z]/g
       if(value.length<6){
        document.querySelector('#'+this.id+'Label').style.color='red'
        document.querySelector('#'+this.id+'Label').innerHTML= 'Address Name too Short'

       }else if(regex.test(value)===false){
        document.querySelector('#'+this.id+'Label').style.color='red'
        document.querySelector('#'+this.id+'Label').innerHTML= 'Invalid Address Name'
     
       }else if(/[0-9]/g.test(value)===true){
        document.querySelector('#'+this.id+'Label').style.color='red'
        document.querySelector('#'+this.id+'Label').innerHTML= 'Address Name cannot contain Numbers or Symbols'
       }else{
        document.querySelector('#'+this.id+'Label').style.color='green'
        document.querySelector('#'+this.id+'Label').innerHTML= 'P.O BOX <i class="fas fa-check"></i>'

       }        
    })
    box.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        if(value.length<4){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'P.O BOX too Short'
 
        }else if(/[0-9]/g.test(value)===true && regex.test(value)===false){
            document.querySelector('#'+this.id+'Label').style.color='green'
            document.querySelector('#'+this.id+'Label').innerHTML= 'Address Name <i class="fas fa-check"></i>'
       }else{
        
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'P.O BOX is must keep fomart ( 123-400) '
        }        
     })
     reclocation.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        if(value.length<6){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location Name too Short'
 
        }else if(regex.test(value)===false){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Invalid Location Name'
      
        }else if(/[0-9]/g.test(value)===true){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location cannot contain Numbers or Symbols'
        }else{
         document.querySelector('#'+this.id+'Label').style.color='green'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location <i class="fas fa-check"></i>'
 
        }        
     })
     recphone.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        phoneprefix = /[+254]/
        if(value.length!==13){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Invalid Phone Number (Use Format +254 XXX XXX XXX)'
 
        }else if(regex.test(value)===true){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Invalid Phone Number (Use Format +254 XXX XXX XXX)'
      
        }else if(/[0-9]/g.test(value)===false){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Invalid Phone Number (Use Format +254 XXX XXX XXX)'
        }else if(phoneprefix.test(value)===false){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Invalid Phone Number (Use Format +254 XXX XXX XXX)'
         
        }else if(value.slice(0,4)!=='+254' ){   
            document.querySelector('#'+this.id+'Label').style.color='red'
            document.querySelector('#'+this.id+'Label').innerHTML= 'Invalid Phone Number (Use Format +254 XXX XXX XXX)'
            
        } else{ 
          
         document.querySelector('#'+this.id+'Label').style.color='green'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Phone <i class="fas fa-check"></i>'
 
        }        
     })
 

    addressbook.addEventListener('submit',function (e) {
        e.preventDefault()
    }) 


}else if(currentL[3]==='personal-details.html'){

    let personalDetails = document.querySelector('#personalDetails')
    let updtPassbtn = document.querySelector('#triggerPasswordUpdate')
    let updatePasswordForm = document.querySelector('#updatePassword')

    updtPassbtn.addEventListener('click',function () {
        let style_state = getComputedStyle(updatePasswordForm)
        if(style_state.display==='none'){
            updatePasswordForm.style.display= 'block'       
        }else{  
            updatePasswordForm.style.display='none'
        }
    })


    updatePasswordForm.addEventListener('submit',function (e) {
        e.preventDefault()
    })

    let modifyName = document.querySelector('#modifyName')
    let cancelNameMod = document.querySelector('#cancelNameMod')
    let modifyPhone = document.querySelector('#modifyPhone')
    let cancelPhoneMod = document.querySelector('#cancelPhoneMod')
    let currentName = document.querySelector('#currentName')
    let currentPhone = document.querySelector('#currentPhone')

    modifyName.addEventListener('click',function (e) {
        textValue = this.innerText
    
        if(textValue==='Edit'){
            this.innerText= 'Update'
            currentName.disabled=false
        }else if(textValue==='Update'){
            //update Details to Sever
            this.innerText= 'Updating ....'
        }
    })
    modifyPhone.addEventListener('click',function (e) {
        textValue = this.innerText
    
        if(textValue==='Edit'){
            this.innerText= 'Update'
            currentPhone.disabled=false
        }else if(textValue==='Update'){
            //update Phone to Sever
            this.innerText= 'Updating ....'
        }
    })
   cancelNameMod.addEventListener('click',function () {
     modifyName.innerHTML = '<i class="fas fa-pen"></i>Edit ' 
     modifyName.disabled= false
    currentName.disabled=true
     //get previous value
     
   })

    cancelPhoneMod.addEventListener('click',function () {
    modifyPhone.innerHTML = '<i class="fas fa-pen"></i>Edit ' 
    modifyPhone.disabled=false
    currentPhone.disabled=true
    //get previous value
    })


    currentName.addEventListener('keyup',function () {
    let regex = /[0-9]/g
    console.log(this.value)
     let value = this.value
     
     if(value.length<6 || value.length>25){
         this.style.color = 'red'
         modifyName.disabled= true
     }else if(regex.test(value)===true){
        this.style.color = 'red'
        modifyName.disabled= true
     }else{
        this.style.color = 'green'
        modifyName.disabled= false
     }
    
    })
    currentPhone.addEventListener('keyup',function () {
        let regex = /[0-9]/g
      
         let value = this.value
         
         if(value.length!==13){
             this.style.color = 'red'
             modifyPhone.disabled= true
         }else if(regex.test(value)===false || /[a-zA-Z]/g.test(value)===true  || value.slice(0,4)!=='+254' ){
            this.style.color = 'red'
            modifyPhone.disabled= true
         }else{
            this.style.color = 'green'
            modifyPhone.disabled= false
         }
        
    })

    let current_password = document.querySelector('#current_password')
    let new_password = document.querySelector('#new_password')
    let confirm_new_password = document.querySelector('#confirm_new_password')
    let updatePassword = document.querySelector('#updatePassword')

    current_password.addEventListener('keyup',function () {
        let value = this.value
        let label = document.querySelector('#'+this.id+'Label')
        let lettCheck = /[a-zA-Z]/
        let numCheck = /[0-9]/
        
       if(value.length<6){
           label.innerText ='Password Must contain atleast 6 Characters'
           label.style.color= 'red'
       }else if(lettCheck.test(value)===false || numCheck.test(value)===false){
        label.innerText ='Password Must Include Letters and Numbers'
        label.style.color= 'red'
       }else{
        label.innerHTML ="Current Password <i class='fas fa-check'></i>"
        label.style.color= 'green'
       }

    })
    new_password .addEventListener('keyup',function () {
        let value = this.value
        let label = document.querySelector('#'+this.id+'Label')
        let lettCheck = /[a-zA-Z]/
        let numCheck = /[0-9]/
        
       if(value.length<6){
           label.innerText ='Password Must contain atleast 6 Characters'
           label.style.color= 'red'
       }else if(lettCheck.test(value)===false || numCheck.test(value)===false){
        label.innerText ='Password Must Include Letters and Numbers'
        label.style.color= 'red'
       }else{
        label.innerHTML ="New Password <i class='fas fa-check'></i>"
        label.style.color= 'green'
       }

    })
    confirm_new_password.addEventListener('keyup',function () {
       let value = this.value
    
       let label = document.querySelector('#'+this.id+'Label')
        if(new_password.value!==value){
            label.innerHTML ='Confirmation Password  must match Desired Password'
            label.style.color= 'red'
        }else{
            label.innerHTML ="Confirm New Password <i class='fas fa-check'></i>"
            label.style.color= 'green'
        }
    })
  


}else if(currentL[3]==='checkout.html'){
   let cart_itm = document.querySelector('#cart-checkout')
   let addr_itm = document.querySelector('#delivery-address') 
   let paym_opt = document.querySelector('#paym_opt')
   let addQuantity = document.querySelectorAll('.addQuantity')
   let decQuantity = document.querySelectorAll('.decQuantity')
   let prodTotal = document.querySelectorAll('.itmPrice')
   let totalCart =document.querySelector('#cartTotal')
   let eachItemTotal = document.querySelectorAll('.totalPriceCalc')
   let cartOkayBTN = document.querySelector('#cartOkay')
   let addressOkayBTN = document.querySelector('#addressOkay')
   eachItemTotal.forEach((itm)=>{
  
       totalCart.innerText= Number(totalCart.innerText)+Number(itm.innerText)

   })
   addQuantity.forEach(elm=> {
     
       elm.addEventListener('click',function (e) {
        let valueinput = document.querySelector('#'+this.classList[1])
        let currValue = Number(valueinput.value)   
        valueinput.value=currValue+1;
        let toDisplayTotal = document.querySelector('#priceTotal'+this.classList[1])
        let unitPrice  = document.querySelector('#unitPrice'+this.classList[1]).innerText    
        toDisplayTotal.innerText = Number(valueinput.value) * Number(unitPrice)
        totalCart.innerText= Number(totalCart.innerText) + Number(unitPrice)
           
     })
   }); 
   decQuantity.forEach(elm=> {
    elm.addEventListener('click',function (e) {
     let valueinput = document.querySelector('#'+this.classList[1])
     let currValue = Number(valueinput.value) 
    
    
     if(valueinput.value>1){
        valueinput.value=currValue-1;
        let toDisplayTotal = document.querySelector('#priceTotal'+this.classList[1])
        let unitPrice  = document.querySelector('#unitPrice'+this.classList[1]).innerText    
        toDisplayTotal.innerText = Number(valueinput.value) * Number(unitPrice)  
        totalCart.innerText= Number(totalCart.innerText) - Number(unitPrice)
     }  else{
        this.disabled=true;
        let toDisplayTotal = document.querySelector('#priceTotal'+this.classList[1])
        let unitPrice  = document.querySelector('#unitPrice'+this.classList[1]).innerText    
        toDisplayTotal.innerText = Number(valueinput.value) * Number(unitPrice)  
        toDisplayTotal.innerText = Number(valueinput.value) * Number(unitPrice)  
        
        
     }
     
  
  })
   })
   
   cartOkayBTN.addEventListener('click',function(){
       //do server processing
        cart_itm.style.display='none'
        addr_itm.style.display='block' 

   })
   addressOkayBTN.addEventListener('click',function(){
    //do server processing
     cart_itm.style.display='none'
     addr_itm.style.display='none' 
     paym_opt.style.display= 'block'

})

  

  
   
 

  



}else if(currentL[3]==='view-product.html'){
   
    let image_prev = document.querySelectorAll('.image-prev')
    let preview_magnified = document.querySelectorAll('#preview-magnified')
    let magnify_prod_image = document.querySelector('#magnify-prod-image')
    image_prev.forEach((item)=>{
       
        item.addEventListener('click',function () {
            let value = this.src;
             magnify_prod_image.innerHTML ="  <img id='preview-magnified' src="+value+" alt='A50'>"         
           
        })
    })





}else if(currentL[3]==='account-recovery.html'){
    let recovered_account = document.querySelector('#recovered_account')
    let confpassword = document.querySelector('#confpassword')
    let newpassword = document.querySelector('#newpassword')

    recovered_account.addEventListener('submit',function (e) {
        e.preventDefault();

    })
    newpassword.addEventListener('keyup',function () {
        let value = this.value
       
        let letterCheck = /[a-zA-Z]/
        let numCheck = /[0-9]/
        let label = document.querySelector('#'+this.id+'Label')
     
        if(value.length<6){
            label.style.color='red'
            label.innerHTML= 'Password is too short'
        }else if(letterCheck.test(value)===false){
         label.style.color='red'
         label.innerHTML= 'Password must include Letters'
        }else if(numCheck.test(value)===false){
            label.style.color='red'
            label.innerHTML= 'Password must include Numbers'
        }else{
            label.style.color='green'
            label.innerHTML= "New Password <i class='fas fa-check'></i> "
        }
        
    })
    confpassword.addEventListener('keyup',function () {
        let value = this.value
        let label = document.querySelector('#'+this.id+'Label')
       if(newpassword.value!==value){
        label.style.color='red'
        label.innerHTML= "Confirmation Password Must Match Desired Password "
       }else{
        label.style.color='green'
        label.innerHTML= "Confirm New Password <i class='fas fa-check'></i> "
       }
        

    })
  
    
}


    

    
   
   
 

     
     


}