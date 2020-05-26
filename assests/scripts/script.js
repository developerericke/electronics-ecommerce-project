document.addEventListener('DOMContentLoaded',ready)


function ready(){
    var location = window.location.href

let currentL=location.split('/')
let xhttp = new XMLHttpRequest()
class styler{
    constructor(item){ 
        this.item = item
    }
    applyStyle(color,bg){ 
        this.item.style.color = color
        this.item.style.backgroundColor = bg  
    }
    updateinnerhtml(message){
       this.item.innerHTML = message
    }
 
   
 
 }

 function grabBYID (id){
   return document.querySelector(id);
 } 
 //colorcodes
 let errbg = "#ffcccc";
 let succbg = "#ccffcc";
 let procbg = "black";

 let NavbarLinks = document.querySelectorAll('.nav-icon')  
 NavbarLinks.forEach((bar)=>{
     bar.addEventListener('click',function(){
         let  value = this.innerText
        
         if(value.search('Cart')>-1){
         window.location.href= '/checkout.html'
         }else if(value==='Account'){
           window.location.href= '/dashboard.html'
         }else if(value==='Logout'){
            window.location.href= '/index.html'
         }
         

     })
 })

 function animator(){
     
    let cart = JSON.parse(localStorage.basketDetails)
    
   if(cart===null){
    document.querySelectorAll('.basket_status').forEach((itm)=>{
        itm.innerText=0
        itm.classList.value ='basket_status w3-text-brown'                   
      
    }) 
   }else{
        let cartValue =0;
        cart.forEach((itm)=>{
        cartValue=cartValue + Number(itm.itemQuantity)
        })
        document.querySelectorAll('.basket_status').forEach((itm)=>{
            itm.innerText=cartValue  
            itm.classList.value ='basket_status w3-text-brown'                   
        
        })
    }
   
 }
 function updateCartInput(val){
    document.querySelectorAll('.basket_status').forEach((item)=>{
        item.classList.value ='basket_status '          
    })
    document.querySelectorAll('.cartVALUE').forEach((itm)=>{
        itm.value=val
        let event = new Event('change')
        itm.dispatchEvent(event)
    })
    
 }
 document.querySelectorAll('.cartVALUE').forEach((itm)=>{
    
     itm.addEventListener('change',function(){

        document.querySelectorAll('.basket_status').forEach((item)=>{
            //some useless code
             getComputedStyle(item).animation
            item.classList.value ='basket_status anime-class  w3-text-brown'
         
       
        })
     })
 })
    if (typeof(Storage) !== "undefined") {
         // localStorage.setItem('basketDetails','[{"itemID":"124363","itemQuantity":"0"}]')
           if(localStorage.navigationTrack ===undefined){
                 localStorage.setItem('navigationTrack',null)
           }
            if( localStorage.basketDetails===undefined ){
                localStorage.setItem('basketDetails',null)
                document.querySelectorAll('.basket_status').forEach((itm)=>{
                    itm.innerText=0
                    updateCartInput(0)
                })
           
            }else if(localStorage.basketDetails!=='null'){
                let curr_bask = JSON.parse(localStorage.basketDetails)
                let cartCount =0;
                curr_bask.forEach((itm)=>{
                    cartCount=cartCount+ Number(itm.itemQuantity)
                }) 
                document.querySelectorAll('.basket_status').forEach((itm)=>{
                    itm.innerText=cartCount
                    updateCartInput(cartCount)
                })
            
            }
    
  

    }else{
        alert('no local storage')
    }
 let home_icon = document.querySelector('#home-icon')
 home_icon.addEventListener('click',function(){
     window.location.href='index.html'
 })
 
 if(currentL[3]==='index.html'){
    
   let cartBTN = document.querySelectorAll('.addtoCart')
   var cartCounter;   
   document.querySelectorAll('.basket_status').forEach((itm)=>{
    cartCounter= itm.innerText;
    updateCartInput(cartCounter)
   })
  
   let  cartValue ;
 
   cartBTN.forEach((btn)=>{
 
    btn.addEventListener('click',function(){
        
       let itmID = this.value
       let ITEMID = itmID.split(',')[0].split(':')[1].slice(1,-1)
       let ITEMQuant = itmID.split(',')[1].split(':')[1].slice(1,2)
       let BasketDetails =localStorage.basketDetails
        
  
       
       if(BasketDetails==='null'){
        new Promise((resolve,reject)=>{
            localStorage.basketDetails = '[{"itemID":"'+ITEMID+'","itemQuantity":"'+1+'"}]'
            resolve()
        }).then(()=>{
                
                document.querySelectorAll('.basket_status').forEach((itm)=>{
                    itm.innerText=1;
                    updateCartInput(1)
                })
              
        }).catch((error)=>{
            console.log(error)
        })  
      
        
       }else if(BasketDetails!=='null'){
        let searchRes =BasketDetails.search(ITEMID)
    
        //find if item is already in cart and update only quantity
          if(searchRes==-1){ //
                let curr_bask_status = JSON.parse(localStorage.basketDetails)
            
                curr_bask_status.push({itemID:ITEMID,itemQuantity:"1"})
                localStorage.basketDetails= JSON.stringify(curr_bask_status)
                //update Cart Value
                let curr_bask = JSON.parse(localStorage.basketDetails)
                cartValue  = 0; 
             
                curr_bask.forEach((itm)=>{
                    cartValue=cartValue + Number(itm.itemQuantity)
                })
              console.log(cartValue)
                document.querySelectorAll('.basket_status').forEach((itm)=>{
                    itm.innerText=cartValue
                    updateCartInput(cartValue)
         
                }) 
               
           }else{
                let curr_bask_status = JSON.parse(localStorage.basketDetails)
                let Z= curr_bask_status.filter((itm,index)=>{
                    return itm.itemID === ITEMID
                })
                
                let prev_quantity= JSON.stringify(Z[0])
                
                let quantity_tracker = Number(Z[0].itemQuantity)
                
                quantity_tracker_new = quantity_tracker + 1
               
                
                BasketDetails= localStorage.basketDetails
                let updated_quantity = JSON.stringify({itemID:ITEMID,itemQuantity:quantity_tracker_new.toString()})
                let updatedBasket =BasketDetails.replace(prev_quantity,updated_quantity)
                localStorage.basketDetails= updatedBasket
                
                //update Cart Value
                let curr_bask = JSON.parse(localStorage.basketDetails)
                let initcart=0;
                curr_bask.forEach((itm)=>{
                    initcart=initcart+ Number(itm.itemQuantity)
                })
                    
                    document.querySelectorAll('.basket_status').forEach((itm)=>{
                        itm.innerText=initcart
                        updateCartInput(initcart)                       
                      
                    })
                    
                    
      
        }
       }
    })
   })
   
 }else  if(currentL[3]==='authentication.html'){
    animator()
  
    // authentication
     let loginForm= document.querySelector('#login_form')
     let signupForm= document.querySelector('#sign_up_form')
     let forgotpasswordForm =document.querySelector('#forgot-password')
     let forgpassbtn = document.querySelectorAll('.forgot-password-instead') 
     let signupbtn = document.querySelectorAll('.signup-instead') 
     let loginbtn = document.querySelectorAll('.login-instead') 
   
   signupbtn.forEach(btn=>{
       btn.addEventListener('click',  function(e){
        loginForm.style.display= 'none'
        forgotpasswordForm.style.display="none" 
        signupForm.style.display='block'
      
        
        } )
   }) 
    
    forgpassbtn.forEach((btn)=>{
        btn.addEventListener('click',function(){
            loginForm.style.display='none'
            signupForm.style.display='none'
            forgotpasswordForm.style.display='block'
           })
    }) 
    
    loginbtn.forEach(btn=>{
        btn.addEventListener('click',function(){
            loginForm.style.display='block'
            signupForm.style.display='none'
            forgotpasswordForm.style.display='none'
         
        })
    }) 

    //signup form Validation
    document.querySelector('#fullname').addEventListener('keyup', function(){
        let  value =this.value
        let label = document.querySelector('#reg_name_label')
        let patt = /[0-9]/g
        
        if(value.length<5){
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=true
            label.style.color='red'
            label.innerHTML='Full Name too Short  <i class="fas fa-stop-circle"></i>'
        }else if(patt.test(value)==true){
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=true
            label.style.color='red'
            label.innerHTML='Name cannot contain Numbers <i class="fas fa-stop-circle"></i> '
        }else{
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=false
            label.style.color='green'
            label.innerHTML='Full Name  <i class="fas fa-check"></i>'
        }
        }
    )

    document.querySelector('#reg_password').addEventListener('keyup', function(e){
     
        let  value =this.value
        let label = document.querySelector('#reg_pass_label')
        let hasNumeric = /[0-9]/g

        let hasLetter = /[a-zA-Z]/
        
        
        if(value.length<6 || value.length>15){
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=true
            label.style.color='red'
            label.innerHTML='Password must be between 6 and 15 characters long  <i class="fas fa-stop-circle"></i>'
        }else if(hasNumeric.test(value)==false){
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=true
            label.style.color='red'
            label.innerHTML='Password Must Contain atleast one Number  <i class="fas fa-stop-circle"></i>'
        }else if(hasLetter.test(value)==false){
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=true
            label.style.color='red'
            label.innerHTML='Password Must Contain atleast one Letter  <i class="fas fa-stop-circle"></i>'
        } else {
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=false
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
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=true
          label.style.color='red'
          label.innerHTML='Confirmation Password Must match Desired Password <i class="fas fa-stop-circle"></i> '
        }else{
            signupForm.querySelectorAll('.authenticatebtn')[0].disabled=false
            label.style.color='green'
            label.innerHTML='Confirmation Password  <i class="fas fa-check"></i>'
        }
    })

   

    signupForm.addEventListener('submit',function(e){
      e.preventDefault();
      
      document.querySelector('body').scrollTop=0
      let signupData = []
      let label= document.querySelector("#"+this.id+"").querySelectorAll('label')
      let defaultLabels=function() {
        label.forEach((label)=>{
            label.style.color='black'
        })
        label[0].innerHTML='FullName'
        label[1].innerHTML='Email'
        label[2].innerHTML='Password'
        label[3].innerHTML='Confirm Password'
    
      }
     let inputs= document.querySelector("#"+this.id+"").querySelectorAll('.w3-input')
     inputs.forEach((input)=>{
         signupData.push(input.name+'='+ input.value)
     })
    let statusBar = grabBYID('#signup_status')
     xhttp.onreadystatechange= function(){
         if(this.readyState===1){
            statusBar.style.backgroundColor='wheat'
            statusBar.style.color = 'green'
            statusBar.innerText ='Signing Up...'
            defaultLabels()
         }else if(this.readyState===4){
             if(this.status===200){
                 statusBar.style.backgroundColor='#ccffcc'
                 statusBar.style.color = 'black'
                 statusBar.innerText ='Registration Was Succesfull'
                 inputs.forEach((input)=>{
                     input.value=''                    
                 })
                 defaultLabels()
                
             }else if(this.status===403){
                statusBar.style.backgroundColor='#ffcccc'
                statusBar.style.color = 'black'
                statusBar.innerText ='Your Request cannot be Completed'
                inputs.forEach((input)=>{
                    input.value=''                    
                })
                defaultLabels()
             }else if(this.status===0){
                statusBar.style.backgroundColor='#ffcccc'
                statusBar.style.color = 'black'
                statusBar.innerText ='Oops. You seem to have lost your Internet Connection'
             }
         }
     }
     xhttp.open('POST','http://localhost:9090/addUser',true)
     xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
     
     xhttp.send(signupData.join('&'))

    })
    loginForm.addEventListener('submit',function(e){
        e.preventDefault();
        document.querySelector('body').scrollTop=0
        let login_progress = document.querySelector('#login_progress')
        let xhttp = new XMLHttpRequest();
    
        let inputs =document.querySelector('#'+this.id+'').querySelectorAll('.w3-input')

         
         let LoginData=[]
         
         inputs.forEach((input)=>{
             LoginData.push(input.name+'='+input.value)
         })
         xhttp.onreadystatechange=function(){
     
                if(this.readyState===1){
                    login_progress.style.backgroundColor = 'wheat'
                    login_progress.innerText='Authenticating'
                    login_progress.style.color = 'green'
                }else if(this.readyState===4){
                    if(this.status==0){
                        login_progress.style.backgroundColor = '#ffcccc'
                        login_progress.innerText='Oops. You seem to have lost your internet connection'
                        login_progress.style.color = 'black'
                    }else if(this.status===200){
                        login_progress.style.backgroundColor = '#ccffcc'
                        login_progress.innerText='Success'
                        login_progress.style.color = 'black'                 
                    }else if(this.status===401){
                        login_progress.style.backgroundColor = '#ffcccc'
                        login_progress.innerText='Invalid Login Details'
                        login_progress.style.color = '#000000'
                    }
                }
            
        }
         xhttp.open('POST',/*Post Route where Login hits i.e /login */'http://localhost:9090/loginUser',true)
         xhttp.setRequestHeader('Content-type',"application/x-www-form-urlencoded") 
         xhttp.send(LoginData.join('&'))  
      })
    forgotpasswordForm.addEventListener('submit',function(e){
        e.preventDefault();
        document.querySelector('body').scrollTop=0
        let statusbar = document.querySelector('#processStatus')
        let recovery_email = document.querySelector('#recovery_email')
      
        xhttp.onreadystatechange= function(){
            if(this.readyState===1){
               statusbar.style.backgroundColor= 'wheat'
               statusbar.style.color='green'
               statusbar.innerText= 'Processing ...'
            }else if(this.readyState===4){
                if(this.status===200){
                    statusbar.style.backgroundColor= '#ccffcc'
                    statusbar.style.color='black'
                    statusbar.innerText= 'An Email has been sent to '+ recovery_email.value + ' with account recovery instructions'
                }else if(this.status===401){
                    statusbar.style.backgroundColor= '#ffcccc'
                    statusbar.style.color='black'
                    statusbar.innerText= 'The  email you provided is incorrect'
                }else if(this.status===404){
                    statusbar.style.backgroundColor= '#ffcccc'
                    statusbar.style.color='black'
                    statusbar.innerText= 'Something went wrong'
                }
            }
        }
        
        xhttp.open('POST','http://localhost:9090/recoverAccount',true)
        xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhttp.send('recovery_email='+recovery_email.value)
      })

}else if(currentL[3]==='address-book.html'){
    animator()
    //    select address     
 
    let addressbook = document.querySelector('#add-address')
    let selectDefault = document.querySelectorAll('.defSelect ')
    let delAddress = document.querySelectorAll('.delAddress')

    function addresslabelsDef(){
        addressbook.querySelectorAll('input').forEach((input)=>{
            input.value=''
        })
        addressbook.querySelectorAll('label').forEach((label)=>{
           label.style.color = 'black'
        })
        document.querySelector('#recipientLabel').innerHTML= 'Recipient Name'
        document.querySelector('#poBOXLabel').innerHTML= 'P.O BOX'
        document.querySelector('#locationLabel').innerHTML= 'Location'
        document.querySelector('#phoneLabel').innerHTML= 'Phone'
        document.querySelector('#locDescLabel').innerHTML= 'Location Description'
        document.querySelector('#CountyLabel').innerHTML= 'County'
    }
    selectDefault.forEach((btn)=>{
        btn.addEventListener('click',function(){
            let id = btn.parentNode.id;
             
         
            xhttp.onreadystatechange= function(){
                if(this.readyState===1){
                  btn.style.fontWeight ='bold'
                  btn.style.color = "green"
                  btn.innerHTML  ='<span class="w3-small">Updating to default </span><img class="loadgif" src="./assests/images/833.gif" alt="loader">'
                   
                  document.querySelector('#'+id).querySelectorAll('.delAddress')[0].style.display= 'none'
                }else if(this.readyState===4){
                    if(this.status===200){
                        btn.style.backgroundColor=succbg
                        btn.style.color = 'black'
                        btn.innerHTML  ='Default Selected'
                       
                        setTimeout(()=>{
                           window.location.reload()
                        },200)
                    }else{
                        
                    
                        btn.style.color = 'red'
                        btn.innerHTML  ='Something is wrong.'

                        setTimeout(()=>{
                            btn.style.backgroundColor='white'
                            btn.style.color = 'blue'
                            btn.innerHTML  ='Select as Default'
                        },2500)
                       
                    }
                }
            }
            xhttp.open('POST','http://localhost:9090/updateloc',true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.send('address_id='+id)
        
        })
    })
    delAddress.forEach((btn)=>{
        btn.addEventListener('click',function(){
            let id = btn.parentNode.id;
             
         
            xhttp.onreadystatechange= function(){
                if(this.readyState===1){
                  btn.style.fontWeight ='bold'
                 
                  btn.innerHTML  ='<span class="w3-small">Processing </span><img class="loadgif" src="./assests/images/833.gif" alt="loader">'
                  
                }else if(this.readyState===4){
                    if(this.status===200){
                        window.location.reload()
                       
                    }else{
                                               
                        btn.innerHTML  ='Something is Wrong.'

                        setTimeout(()=>{
                         
                            btn.innerHTML  ='Delete Address'
                        },2500)
                       
                    }
                }
            }
            xhttp.open('POST','http://localhost:9090/deladdress',true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.send('address_id='+id)
        
        })
    })

   

    let recipient = document.querySelector('#recipient')
    let box = document.querySelector('#poBOX')
    let reclocation = document.querySelector('#location')
    let recphone = document.querySelector('#phone')
    let county = document.querySelector('#County')
    let locDesc = document.querySelector('#locDesc')
  
    
    
    recipient.addEventListener('keyup',function (e) {
       let value = this.value
       
       let regex = /[a-zA-Z]/g
       if(value.length<6){
        document.querySelector('#'+this.id+'Label').style.color='red'
        document.querySelector('#'+this.id+'Label').innerHTML= 'Recipient Name must contain atleast 6 characters'
        addressbook.querySelector('button').disabled= true
       }else if(regex.test(value)===false || /[0-9]/g.test(value)===true){
        document.querySelector('#'+this.id+'Label').style.color='red'
        document.querySelector('#'+this.id+'Label').innerHTML= 'Recipient Name can only contain letters'
        addressbook.querySelector('button').disabled= true
       }else{
        document.querySelector('#'+this.id+'Label').style.color='green'
        document.querySelector('#'+this.id+'Label').innerHTML= 'Recipient Name <i class="fas fa-check"></i>'
        addressbook.querySelector('button').disabled= false
       }        
    })
    recphone.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        phoneprefix = /[+254]/
        if(value.length!==13 || regex.test(value)===true || /[0-9]/g.test(value)===false || phoneprefix.test(value)===false || value.slice(0,4)!=='+254'){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Phone (Use Format +254 XXX XXX XXX)'
         addressbook.querySelector('button').disabled= true
        }else{ 
          
         document.querySelector('#'+this.id+'Label').style.color='green'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Phone <i class="fas fa-check"></i>'
         addressbook.querySelector('button').disabled= false
        }        
     })
     county.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        if(value.length<3){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'County Name must contain atleast 3 Characters'
         addressbook.querySelector('button').disabled= true
        }else if(regex.test(value)===false || /[0-9]/g.test(value)===true){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'County Name can only contain letters'
         addressbook.querySelector('button').disabled= true
        }else{
         document.querySelector('#'+this.id+'Label').style.color='green'
         document.querySelector('#'+this.id+'Label').innerHTML= 'County <i class="fas fa-check"></i>'
         addressbook.querySelector('button').disabled= false
        }        
     })
    box.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        if(value.length<4){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'P.O BOX must contain atleast 4 characters'
         addressbook.querySelector('button').disabled= true
        }else if(/[0-9]/g.test(value)===true && regex.test(value)===false){
            document.querySelector('#'+this.id+'Label').style.color='green'
            document.querySelector('#'+this.id+'Label').innerHTML= 'P.O BOX <i class="fas fa-check"></i>'
            addressbook.querySelector('button').disabled= false
       }else{
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'P.O BOX is must keep fomart ( 123-400) '
         addressbook.querySelector('button').disabled= true
        }        
     })
     reclocation.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        if(value.length<6){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location must contain atleast 6 characters'
         addressbook.querySelector('button').disabled= true
        }else if(regex.test(value)===false || /[0-9]/g.test(value)===true){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location details can only contain alphabet characters'
         addressbook.querySelector('button').disabled= true
        }else{
         document.querySelector('#'+this.id+'Label').style.color='green'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location <i class="fas fa-check"></i>'
         addressbook.querySelector('button').disabled= false
 
        }        
     })
     locDesc.addEventListener('keyup',function (e) {
        let value = this.value
        
        let regex = /[a-zA-Z]/g
        if(value.length>0 && value.length<15){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location Description too Short'
         addressbook.querySelector('button').disabled= true
        }else if(value.length>0 && value.length<15 && regex.test(value)===false || /[0-9]/g.test(value)===true){
         document.querySelector('#'+this.id+'Label').style.color='red'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location Description Name can only contain letters'
         addressbook.querySelector('button').disabled= true
        }else if(value.length===0){
            document.querySelector('#'+this.id+'Label').style.color='black'
            document.querySelector('#'+this.id+'Label').innerHTML= 'Location Description <span class="w3-small">(optional)</span>'
            addressbook.querySelector('button').disabled= false
        }else{

         document.querySelector('#'+this.id+'Label').style.color='green'
         document.querySelector('#'+this.id+'Label').innerHTML= 'Location Description <span class="w3-small">(optional)</span> <i class="fas fa-check"></i>'
         addressbook.querySelector('button').disabled= false
        }        
     })
    
      
    let addressFormStatus = document.querySelector('#addressFormStatus') 

    addressbook.addEventListener('submit',function (e) {
        e.preventDefault()
        if(recipient.value !== '' && recphone.value!=='' && reclocation.value!== '' && box!==''  && county!==''   ){
            let addressdata = "recipient="+ recipient.value + "&recphone="+recphone.value+"&location="+reclocation.value+"&county"+county.value+"&locDesc="+locDesc.value+"&box="+box.value
            
            xhttp.onreadystatechange= function(){
            
                if(this.readyState===1){
                    addressFormStatus.style.backgroundColor = '#d6f5d6'
                    addressFormStatus.style.color= 'black'
                    addressFormStatus.innerHTML ="Processing <span class='w3-animate-fading'>...</span>"
                    addressbook.querySelector('button').disabled= true
                }else if(this.readyState===4){
                    addressbook.querySelector('button').disabled= false
                    if(this.status==200){
                        addresslabelsDef()
                        addressFormStatus.style.backgroundColor = succbg
                        addressFormStatus.style.color = 'black'
                        addressFormStatus.innerHTML ='Address details succesfully Updated'
                        setTimeout(()=>{
                            addressFormStatus.innerHTML =''
                        },3000)
                    }else if(this.status===0){
                       addressFormStatus.style.backgroundColor = errbg
                       addressFormStatus.style.color= 'black'
                       addressFormStatus.innerHTML = 'Failed. Net Error '
                      
                    }else{
                        addressFormStatus.style.backgroundColor = errbg
                       addressFormStatus.style.color= 'black'
                       addressFormStatus.innerHTML = 'Failed'
                    }

                }
            }
            xhttp.open('POST','http://localhost:9090/addaddress',true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.send(addressdata)

        }else{
            addressbook.querySelectorAll('input').forEach((input)=>{
                if(input.value===''){
                    document.querySelector('#'+input.id+'Label').style.color = 'red'
                }
                
            })
            addressbook.querySelector('button').disabled= true
        }

    }) 


}else if(currentL[3]==='personal-details.html'){
    animator()
    let personalDetails = document.querySelector('#personalDetails')
    let updtPassbtn = document.querySelector('#triggerPasswordUpdate')
    let updatePasswordForm = document.querySelector('#updatePassword')
    let updPassForm = document.querySelector('#updPassForm')
    updtPassbtn.addEventListener('click',function () {
        let style_state = getComputedStyle(updatePasswordForm)
        if(style_state.display==='none'){
            updatePasswordForm.style.display= 'block'       
        }else{  
            updatePasswordForm.style.display='none'
        }
    })

  

    let modifyName = document.querySelector('#modifyName')
    let cancelNameMod = document.querySelector('#cancelNameMod')
    let modifyPhone = document.querySelector('#modifyPhone')
    let cancelPhoneMod = document.querySelector('#cancelPhoneMod')
    let currentName = document.querySelector('#currentName')
    let currentPhone = document.querySelector('#currentPhone')

    modifyName.addEventListener('click',function (e) {
        if(xhttp.readyState !==1){
        textValue = this.innerText
    
        if(textValue==='Edit'){
            this.innerHTML= 'Update'
            currentName.style.color = 'black'
            currentName.disabled=false
        }else if(textValue==='Update'){
            //update Details to Severe
            
            xhttp.onreadystatechange= function(){
            
                if(this.readyState===1){
                    modifyName.innerHTML= ' <span class="w3-text-green w3-tiny">Processing <span class="w3-animate-fading"> ...</span></span>'
                    cancelNameMod.disabled=true  
                
                }else if(this.readyState===4){
                    cancelNameMod.disabled=false
                   if(this.status===0){
                    modifyName.style.color='red'
                    modifyName.innerHTML= 'Net Err'
                    
                    setTimeout(()=>{
                        modifyName.style.color = '#2196F3'
                        modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
                       
                    },2500)

                   }else if(this.status===200){
                        modifyName.style.color='green'
                        modifyName.innerHTML= 'Success'
                        currentName.disabled=true
                        setTimeout(()=>{
                            modifyName.style.color = '#2196F3'
                            modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
                           
                        },1500)
                     
                    }else{
                        modifyName.style.color='red'
                        modifyName.innerHTML = 'Failed'
                        currentName.disabled=false
                        currentName.style.color= 'black'
                        setTimeout(()=>{
                            modifyName.style.color = '#2196F3'
                            modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
                           
                        },2500)
                       
                    }
                }
            }
            xhttp.open('POST','http://localhost:9090/editexistingdet',true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.send('username='+currentName.value)
            
        }else{
            window.location.reload()
        }
    }else{
        modifyName.style.color='red'
            modifyName.innerHTML= ' <span class="w3-tiny">Please Wait !</span>'
                  
            
            setTimeout(()=>{
                modifyName.style.color = '#2196F3'
                modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
               
            },3000)
    }
    })

    modifyPhone.addEventListener('click',function (e) {
       
        if(xhttp.readyState !==1){
            textValue = this.innerText
            currentPhone.disabled=false
            if(textValue==='Edit'){
                this.innerText= 'Update'
                currentPhone.disabled=false
            }else if(textValue==='Update'){
              
                xhttp.onreadystatechange= function(){
                   if(this.readyState===1){
                    modifyPhone.innerHTML= ' <span class="w3-text-green w3-tiny">Processing <span class="w3-animate-fading"> ...</span></span>'
                     cancelPhoneMod.disabled=true;
                     
                    }else if(this.readyState===4){
                        cancelPhoneMod.disabled=false
                        if(this.status===0){
                            modifyPhone.style.color='red'
                            modifyPhone.innerHTML= 'Net Err'
                            
                            setTimeout(()=>{
                                modifyPhone.style.color = '#2196F3'
                                modifyPhone.innerHTML= '<i class="fas fa-pen"></i>Edit'
                               
                            },2500)
                        }else if(this.status===200){
                            modifyPhone.style.color='green'
                            modifyPhone.innerHTML= 'Success'
                            
                            setTimeout(()=>{
                                modifyPhone.style.color = '#2196F3'
                                modifyPhone.innerHTML= '<i class="fas fa-pen"></i>Edit'
                               
                            },1500)
                         
                        }else {
                            modifyPhone.style.color='red'
                            modifyPhone.innerHTML = 'Failed'
                            currentPhone.disabled=false
                            currentPhone.style.color= 'black'
                            setTimeout(()=>{
                                modifyPhone.style.color = '#2196F3'
                                modifyPhone.innerHTML= '<i class="fas fa-pen"></i>Edit'
                               
                            },2500)
                        }
                    }
                }
                xhttp.open('POST','http://localhost:9090/editexistingdet',true)
                xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    
               
                    xhttp.send('phone='+currentPhone.value)
                
               
            }
    
        }else{
            modifyPhone.style.color='red'
            modifyPhone.innerHTML= ' <span class="w3-tiny">Please Wait !</span>'
                  
            
            setTimeout(()=>{
                modifyPhone.style.color = '#2196F3'
                modifyPhone.innerHTML= '<i class="fas fa-pen"></i>Edit'
               
            },3000)
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
   
    })


    currentName.addEventListener('keyup',function () {
    let regex = /[0-9]/g
  
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
           updatePasswordForm.querySelector('button').disabled= true

       }else if(lettCheck.test(value)===false || numCheck.test(value)===false){
        label.innerText ='Password Must Include Letters and Numbers'
        label.style.color= 'red'
        updatePasswordForm.querySelector('button').disabled= true
       }else{
        label.innerHTML ="Current Password <i class='fas fa-check'></i>"
        label.style.color= 'green'
        updatePasswordForm.querySelector('button').disabled= false
       }

    })
    new_password.addEventListener('keyup',function () {
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
    let defaultLabels = ['Current Password','New Password','Confirm New Password']
    updatePasswordForm.addEventListener('submit',function (e) {
        e.preventDefault()
        document.querySelector('body').scrollTop=0
        updatePasswordForm.querySelectorAll('input').forEach((input)=>{
            if(input.value===''){
                document.querySelector('#'+input.id+'label').style.color= 'red'
            }
        })

        if(current_password.value==='' || new_password.value==='' || confirm_new_password===''){
            updPassForm.style.color = 'black'
            updPassForm.style.backgroundColor= '#ffb3b3'
            updPassForm.innerHTML = "Correct the Highlighted Errors" 
        }else{
            xhttp.onreadystatechange = function(){
            
                if(this.readyState===0){
                    updPassForm.style.color = 'black'
                    updPassForm.style.backgroundColor= '#ffb3b3'
                    updPassForm.innerHTML = "Internet Connection Error"
                }else if(this.readyState===1){
                 updPassForm.style.color = '#4dff88'
                 updPassForm.style.backgroundColor= 'black'
                 updPassForm.innerHTML = "Updating <span class='w3-animate-fading'>...</span>"
                 updatePasswordForm.querySelector('button').disabled= true
                
                }else if(this.readyState===4){
    
                    updatePasswordForm.querySelector('button').disabled= false
                    updatePasswordForm.querySelectorAll('input').forEach((input)=>{
                        input.value=''
                    })
                    updatePasswordForm.querySelectorAll('label').forEach((label)=>{
                        label.style.color= 'black'
                    })
                    updatePasswordForm.querySelectorAll('label')[0].innerHTML=defaultLabels[0] 
                    updatePasswordForm.querySelectorAll('label')[1].innerHTML=defaultLabels[1] 
                    updatePasswordForm.querySelectorAll('label')[2].innerHTML=defaultLabels[2]             
       
                    if(this.status===200){
                        updPassForm.style.color = 'black'
                        updPassForm.style.backgroundColor='#99ffbb'
                        updPassForm.innerHTML = "Password Updated Succesfully"
                        setTimeout(()=>{
                            updPassForm.innerHTML = ""
                        },3000)
                    }else{
                        updPassForm.style.color = 'black'
                        updPassForm.style.backgroundColor= '#ffb3b3'
                        updPassForm.innerHTML = "Faled to Update Password"
    
                    }
                }
            }
    
            xhttp.open('POST','http://localhost:9090/updatepassword',true)
            
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.send('currentPassword='+ document.querySelector('#current_password').value + '&newpassword='+document.querySelector('#new_password').value +'&confnewpassword='+document.querySelector('#confirm_new_password').value )
        
        }
        
     

    })


}else if(currentL[3]==='checkout.html'){

  
    animator()


   let cart_itm = document.querySelector('#cart-checkout')
   let addr_itm = document.querySelector('#delivery-address') 
   let paym_opt = document.querySelector('#paym_opt')
   let addQuantity = document.querySelectorAll('.addQuantity')
   let decQuantity = document.querySelectorAll('.decQuantity')

   let totalCart =document.querySelector('#cartTotal')
   let eachItemTotal = document.querySelectorAll('.totalPriceCalc')
   let cartOkayBTN = document.querySelector('#cartOkay')
   let cart_wrapper = document.querySelector('body')
   let addressOkayBTN = document.querySelector('#addressOkay')
   let cart_itm_prog = document.querySelector('#cart_itm')
   let addr_itm_prog = document.querySelector('#addr_itm')
   let paym_itm_prog = document.querySelector('#paym_itm')
   let preloader = grabBYID('#checkoutPreload')
   let cartwrapper = grabBYID('#cart-wrapper')
   let animatorEffect = new styler(grabBYID('#animator-effect'))
   let addrItem =document.querySelector('#primary-address').querySelectorAll('.addITEM')
   let user
   let shipprice = document.querySelectorAll('.cost')
   let totalcart,shipmcost,vatcharges


  let usercookiepostion =(document.cookie).search('curruser') 
 
   if(document.cookie===''){
    document.cookie ='curruser={"name":null,"phone":null,"shippcharges":null,"County":null,"BOX":null,"Location":null,"station":null,"LocationDescr":null,"LocationID":null};path=/checkout.html;expires=Thu,01 Jan 2099 00:00:00 UTC;'
    user = (document.cookie).split(';').filter((item)=>{
        if(item.search('curruser')>-1){
            return item;
        }
    })
    user =JSON.parse(user[0].split('=')[1])
  }else if(document.cookie!=='' && usercookiepostion===-1){ //if cookie object contains a different cookie
    document.cookie ='curruser={"name":null,"phone":null,"shippcharges":null,"County":null,"BOX":null,"Location":null,"station":null,"LocationDescr":null,"LocationID":null};path=/checkout.html;expires=Thu,01 Jan 2099 00:00:00 UTC;' 
    user = (document.cookie).split(';').filter((item)=>{
        if(item.search('curruser')>-1){
            return item;
        }
    })
    user =JSON.parse(user[0].split('=')[1])
     }else if(usercookiepostion>-1){ //the cookie item exists
     user = (document.cookie).split(';').filter((item)=>{
         if(item.search('curruser')>-1){
             return item;
         }
     })
     user =JSON.parse(user[0].split('=')[1])
        addrItem[0].innerHTML = user.name
        addrItem[1].innerHTML = user.phone
        addrItem[2].innerHTML = user.County
        addrItem[3].innerHTML = user.Location
        addrItem[4].innerHTML = user.BOX
        addrItem[5].innerHTML = user.station
        addrItem[6].innerHTML = user.LocationDescr  
   }
  
     

  // populating the checkout section (address,basket )
   xhttp.onreadystatechange = function () {
       if(this.readyState===4){
           
           if(this.status===0){
            animatorEffect.applyStyle('red','inherit')
              animatorEffect.updateinnerhtml('Oops.You have lost your internet connection <a class="w3-text-black" onclick="<script>window.location.reload()</script>" href="">Click here to Retry</a>')
              preloader.querySelectorAll('div')[0].innerHTML='Net Error'
            }else if(this.status===200){
                
            if(localStorage.cartOkay!==undefined && localStorage.cartOkay!=='null'){ //user has not okayed the cart section
                cart_itm_prog.style.backgroundColor='palegreen'
                cart_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Cart Verified</span> <br><i class="fas fa-check"></i>'
            
            }
            if(localStorage.addressOkay!==undefined && localStorage.addressOkay!=='null'){ //user has not okayed the address section
                addr_itm_prog.style.backgroundColor = 'palegreen'
                 addr_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Address Verified</span> <br><i class="fas fa-check"></i>'
                          
            }

               preloader.style.display = 'none'
               cartwrapper.style.display= 'block'
               let result = JSON.parse(this.responseText)
              
               document.cookie ='curruser={"name":"' +result.user.name+'","phone":"'+result.user.phone+'","County":"'+result.address.County+'","BOX":"'+result.address.BOX+'","Location":"'+result.address.Location+'","LocationDescr":"'+ result.address.locationDesc+'","LocationID":"'+result.address.locid+'","station":"'+result.address.Station +'","shippcharges":"'+result.address.shippingcharges+'"};path=/checkout.html;expires=Thu,01 Jan 2099 00:00:00 UTC;'
              
               user = (document.cookie).split(';').filter((item)=>{
                if(item.search('curruser')>-1){
                    return item;
                }
                })
               user = JSON.parse(user[0].split('=')[1])
               addrItem[0].innerHTML = user.name
               addrItem[1].innerHTML = user.phone
               
               if(localStorage.selectedAddress===undefined){ //default address is in use
    
                addrItem[2].innerHTML = user.County
                addrItem[3].innerHTML = user.Location
                addrItem[4].innerHTML = user.BOX
                addrItem[5].innerHTML = user.station
                addrItem[6].innerHTML = user.LocationDescr  
            
                 shipmcost = (document.cookie).split(';').filter((item)=>{
                    if(item.search('shippcharges')>-1){
                        return item.shippcharges;
                    }else{
                        return 0
                    }
                  })

                
                  totalcart= 0
                  vatcharges= 0
                  
                  shipprice[0].innerHTML = 'N/A'
                  shipprice[1].innerHTML = 'N/A'
                  shipprice[2].innerHTML = 'N/A'
                 shipprice[3].innerHTML =  Number(shipmcost)
                 
             
               }else{ //user opted for a different address
                document.cookie ='locationID='+user.LocationID+';path=/;expires=Thu,01 Jan 1999 00:00:00 UTC;' 
                document.cookie ='locationID='+  JSON.parse(localStorage.selectedAddress).LocationID + ';path=/checkout.html;expires=Thu,01 Jan 2099 00:00:00 UTC'
                addrItem[2].innerHTML = JSON.parse(localStorage.selectedAddress).County
                addrItem[3].innerHTML = JSON.parse(localStorage.selectedAddress).Location
                addrItem[4].innerHTML = JSON.parse(localStorage.selectedAddress).BOX
                addrItem[5].innerHTML = JSON.parse(localStorage.selectedAddress).station
                addrItem[6].innerHTML = JSON.parse(localStorage.selectedAddress).decribeLoc
 
               }
                       
           
               if(localStorage.navigationTrack!=='null'){
               if(JSON.parse(localStorage.navigationTrack).data==='pickupaddressSelected'){
                 cart_itm.style.display= 'none' ,addr_itm.style.display='block'
                
                totalcart= (document.cookie).split(';').filter((item)=>{
                    if(item.search('cartTotal')>-1){
                        return item;
                    }
                  })
                  vatcharges =(document.cookie).split(';').filter((item)=>{
                    if(item.search('VAT')>-1){
                        return item;
                    }
                  })

                 shipmcost = JSON.parse(localStorage.selectedAddress).charges
                
                  totalcart= totalcart[0].split('=')[1]
                  vatcharges= vatcharges[0].split('=')[1]
                  
                  shipprice[0].innerHTML = totalcart
                  shipprice[2].innerHTML = shipmcost
                 shipprice[3].innerHTML = Number(totalcart) + Number(shipmcost)
                 shipprice[1].innerHTML = vatcharges
                addr_itm.querySelectorAll('button')[0].innerHTML = 'Use Home/Office Address Instead' //customadddress
                 addr_itm.querySelectorAll('button')[1].innerHTML = 'Select a different Pickup Station' //customadddress
                localStorage.navigationTrack = '{"from":'+'"/select-address.html",'+'"to":'+'"/checkout.html",'+'"data":"null",'+'"redirect":"/checkout.html"}'
               
                      
                   
            }else if(JSON.parse(localStorage.navigationTrack).data==='customaddressSelected'){
                 cart_itm.style.display= 'none' ,addr_itm.style.display='block'
              
                addr_itm.querySelectorAll('button')[0].innerHTML = 'Select Different Personal address' //customadddress
                addr_itm.querySelectorAll('button')[1].innerHTML = 'Use a Pick Up station Instead' //customadddress
               localStorage.navigationTrack = '{"from":'+'"/select-address.html",'+'"to":'+'"/checkout.html",'+'"data":"null",'+'"redirect":"/checkout.html"}'
                totalcart= (document.cookie).split(';').filter((item)=>{
                    if(item.search('cartTotal')>-1){
                        return item;
                    }
                  })
                  vatcharges =(document.cookie).split(';').filter((item)=>{
                    if(item.search('VAT')>-1){
                        return item;
                    }
                  })
                  shipmcost = JSON.parse(localStorage.selectedAddress).charges
                
                  totalcart= totalcart[0].split('=')[1]
                  vatcharges= vatcharges[0].split('=')[1]
                  shipprice[0].innerHTML = totalcart
                  shipprice[2].innerHTML = shipmcost
                 shipprice[3].innerHTML = Number(totalcart) + Number(shipmcost)
                 shipprice[1].innerHTML = vatcharges
                

                
            }else{
                cart_itm.style.display= 'block' ,addr_itm.style.display='none'
            }
                }

              cart_itm_prog.addEventListener('click',()=>{
                addr_itm.style.display='none' 
                paym_opt.style.display= 'none'
                cart_itm.style.display='block'
                cart_wrapper.style.scrollBehavior='smooth'
                cart_wrapper.scrollTop=0;
                
              })
           
           
              addr_itm_prog.addEventListener('click',(()=>{
                if(localStorage.cartOkay !==undefined && localStorage.cartOkay!=='null' ){
                    let totalcart= (document.cookie).split(';').filter((item)=>{
                        if(item.search('cartTotal')>-1){
                            return item;
                        }
                      })
                     let vatcharges =(document.cookie).split(';').filter((item)=>{
                        if(item.search('VAT')>-1){
                            return item;
                        }
                      })
    
                    let shipmcost = JSON.parse(localStorage.selectedAddress).charges
                    
                      totalcart= totalcart[0].split('=')[1]
                      vatcharges= vatcharges[0].split('=')[1]
                      
                      shipprice[0].innerHTML = totalcart
                      shipprice[2].innerHTML = shipmcost
                     shipprice[3].innerHTML = Number(totalcart) + Number(shipmcost)
                     shipprice[1].innerHTML = vatcharges
                addr_itm.style.display='block' 
                paym_opt.style.display= 'none'
                cart_itm.style.display='none'
                cart_wrapper.style.scrollBehavior='smooth'
                cart_wrapper.scrollTop=0;
                }
              })
              )
            

          
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

                    let curr_bask = JSON.parse(localStorage.basketDetails)
                    let itmID =  elm.classList[1]
                            
                    let result= curr_bask.filter((item)=>{
                        if( item.itemID == itmID.slice('2')){
                            return  item
                        }
                            
                    })
                
                    let newquant = Number(result[0].itemQuantity)+1
                    let prevvalue = '{"itemID":"'+result[0].itemID +'","itemQuantity":"'+result[0].itemQuantity+'"}'
                    result = '{"itemID":"'+result[0].itemID+'","itemQuantity":"'+newquant+'"}'

                    
                    let newbasket = (localStorage.basketDetails).replace(prevvalue,result)
                
                    localStorage.basketDetails=newbasket
                
                    //update cart
                    let newnum = JSON.parse(localStorage.basketDetails)
                    let newv=0;
                    newnum.forEach(element => {
                        newv= newv+ Number(element.itemQuantity)
                    });
        
                    document.querySelectorAll('.basket_status').forEach((itm)=>{
                        itm.innerText=newv
                        updateCartInput(newv)                     
                    
                    })
                    /////
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
                    let curr_bask = JSON.parse(localStorage.basketDetails)
                let itmID =  elm.classList[1]
                
                let result= curr_bask.filter((item)=>{
                    if( item.itemID == itmID.slice('2')){
                        return  item
                    }
                        
                })
                    let newquant = Number(result[0].itemQuantity)-1
                    let prevvalue = '{"itemID":"'+result[0].itemID +'","itemQuantity":"'+result[0].itemQuantity+'"}'
                result = '{"itemID":"'+result[0].itemID+'","itemQuantity":"'+newquant+'"}'

                        
                let newbasket = (localStorage.basketDetails).replace(prevvalue,result)
            
                localStorage.basketDetails=newbasket
            
                let newnum = JSON.parse(localStorage.basketDetails)
                let newv=0;
                newnum.forEach(element => {
                    newv= newv+ Number(element.itemQuantity)
                });
            
                document.querySelectorAll('.basket_status').forEach((itm)=>{
                    itm.innerText=newv
                    updateCartInput(newv)                     
                
                })
                }  else{
                    this.disabled=true;
                    let toDisplayTotal = document.querySelector('#priceTotal'+this.classList[1])
                    let unitPrice  = document.querySelector('#unitPrice'+this.classList[1]).innerText    
                    toDisplayTotal.innerText = Number(valueinput.value) * Number(unitPrice)  
                    toDisplayTotal.innerText = Number(valueinput.value) * Number(unitPrice)  
                    
                    
                }
                
            
            })
            })

            //selecting address
            //custom address
            addr_itm.querySelectorAll('button')[0].addEventListener('click',function () {
                localStorage.navigationTrack = '{"from":'+'"/checkout.html",'+'"to":'+'"select-address.html",'+'"data":"customaddress",'+'"redirect":"/checkout.html"}'
                window.location.href = '/select-address.html'
            
            })
            //pickup station
            addr_itm.querySelectorAll('button')[1].addEventListener('click',function () {
                localStorage.navigationTrack = '{"from":'+'"/checkout.html",'+'"to":'+'"select-address.html",'+'"data":"pickupaddress",'+'"redirect":"/checkout.html"}'
                window.location.href = '/select-address.html'
               
            })

            cartOkayBTN.addEventListener('click',function(){        
              if(localStorage.basketDetails!=='null' ){
                xhttp.onreadystatechange= function(){
                    if(this.readyState==1){
                        cartOkayBTN.style.backgroundColor= 'white'
                        cartOkayBTN.style.color= 'green'
                        cartOkayBTN.innerHTML= '<span class="w3-small">Processing </span>   <img class="loadgif-cartokay" src="./assests/images/833.gif" alt="loader">'
                        cartOkayBTN.style.cursor ='not-allowed'
                    }else if(this.readyState===4){
                        if(this.status===200){    
                            cartOkayBTN.style.backgroundColor= succbg
                            cartOkayBTN.style.color= 'black'
                            cartOkayBTN.innerHTML= ' <span class="w3-small">Updated Succesfully</span>'
                            cartOkayBTN.style.cursor ='Pointer'   
                       
                            //set cartTotal 
                            document.cookie = 'cartTotal='+ JSON.parse(this.responseText).cartTotal+';path=/checkout.html'
                          
                            document.cookie = 'VAT='+ JSON.parse(this.responseText).VAT+';path=/checkout.html'
                     
                            shipprice[0].innerHTML = JSON.parse(this.responseText).cartTotal
                            shipprice[1].innerHTML = JSON.parse(this.responseText).VAT
                            let priceship =(document.cookie).split(';').filter((item)=>{
                              
                                if(item.search('shippcharges')>-1){
                                    return item;
                        
          
                                }else{
                                         return 0
                                }
                            })
                            
                            
                            if(typeof(priceship)==='object'){
                                shipprice[2].innerHTML =  JSON.parse(priceship[0].split("=")[1]).shippcharges
                                shipprice[3].innerHTML = Number(JSON.parse(this.responseText).cartTotal) + Number(shipprice[2].innerHTML)
                            }else{
                                shipprice[2].innerHTML = 'N/A'
                                shipprice[3].innerHTML = Number(JSON.parse(this.responseText).cartTotal)
                            }
                           
                     
                            

                            
                            if(localStorage.cartOkay === undefined){
                                localStorage.setItem('cartOkay',null)
                            }else if(localStorage.cartOkay=== 'null'){
                                localStorage.cartOkay ='Okay'
                            } 
                            setTimeout(()=>{
                                cart_itm.style.display='none'
                                cart_wrapper.style.scrollBehavior='smooth'
                                cart_wrapper.scrollTop=0;
                                cart_itm_prog.style.backgroundColor='palegreen'
                                cart_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Cart Verified</span> <br><i class="fas fa-check"></i>'
                                addr_itm.style.display='block' 
                            },100)
                        }else{
                            cartOkayBTN.style.backgroundColor=errbg
                            cartOkayBTN.style.color= 'black'
                            cartOkayBTN.innerHTML= ' <span class="w3-small">Net Error</span>'
                            cartOkayBTN.style.cursor ='Pointer'
                            setTimeout(()=>{
                                cartOkayBTN.style.color= 'green'
                                cartOkayBTN.style.backgroundColor='white'
                                cartOkayBTN.innerHTML = '<span class="w3-small">Proceed</span>'
                            
                            },2000)

                        }
                    }
                }
                xhttp.open('POST','http://localhost:9090/checkout',true)
                xhttp.setRequestHeader('Content-type','application/json')
                xhttp.send(localStorage.basketDetails)      //data is sent as an array  
            
              }
            })
            addressOkayBTN.addEventListener('click',function(e){
              
                //do server processing

                xhttp.onreadystatechange = function(){
                    if(this.readyState===1){
                        addressOkayBTN.innerHTML= '<span class="w3-small">Processing </span>   <img class="loadgif-cartokay" src="./assests/images/833.gif" alt="loader">'
                        addressOkayBTN.style.cursor = 'not-allowed'
                        addressOkayBTN.style.backgroundColor= 'white'
                    }else if(this.readyState===4){
                        if(this.status===200){
                            addressOkayBTN.innerHTML = 'Success'
                            addressOkayBTN.style.backgroundColor = succbg
                            addressOkayBTN.style.color = 'black'
                            addressOkayBTN.style.cursor = 'pointer'

                            if(localStorage.addressOkay===undefined){
                                localStorage.setItem('addressOkay',null)
                            }else if(localStorage.addressOkay==='null'){
                                localStorage.setItem('addressOkay','Okay')
                            } 
                            paym_opt.style.display= 'block'
                            addr_itm_prog.style.backgroundColor = 'palegreen'
                            addr_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Address Verified</span> <br><i class="fas fa-check"></i>'
                            addr_itm.style.display='none' 
                            cart_itm.style.display='none'
                            cart_wrapper.style.scrollBehavior='smooth'
                            cart_wrapper.scrollTop=0;
                            document.querySelector('#aboutTOpay').innerHTML = JSON.parse(this.responseText).topay
                        }else if(this.status===0){
                            addressOkayBTN.innerHTML = 'Net Error'
                            addressOkayBTN.style.backgroundColor = errbg
                            addressOkayBTN.style.color = 'black'
                            addressOkayBTN.style.cursor = 'pointer'
                        }else{
                         
                            addressOkayBTN.innerHTML = 'Error'
                            addressOkayBTN.style.backgroundColor = errbg
                            addressOkayBTN.style.color = 'black'
                            addressOkayBTN.style.cursor = 'pointer'
                        }
                    }

                }
                
                let formData  =(document.cookie).split(';').filter((item)=>{
                 
                    if(item.search('LocationID')>-1){
                        
                        return item;
                    }
                    })
                 
               formData  = formData[0].split('=')[1]
              
             xhttp.open('POST','http://localhost:9090/addressverify',true)
             xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
             xhttp.send('addressID='+formData)
           
                // cart_itm.style.display='none'
                // addr_itm.style.display='none' 
                // cart_wrapper.style.scrollBehavior='smooth'
                // cart_wrapper.scrollTop=0;
                // addr_itm_prog.style.backgroundColor='palegreen'
                // addr_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Address Verified</span> <br><i class="fas fa-check"></i>'
                
                // paym_opt.style.display= 'block'

            })
           


            document.querySelectorAll('.del_ico').forEach((itm)=>{
                
                    itm.addEventListener('click',()=>{

                        let bask = JSON.parse(localStorage.basketDetails);
                        
                    let todelete=  bask.filter((item)=>{
                        
                            if(item.itemID===(itm.classList[0]).slice(2)){
                            
                                return item
                            }
                        })
                    
                        if(bask.length>1){
                            let prev = '{"itemID":"'+todelete[0].itemID+'","itemQuantity":"'+todelete[0].itemQuantity+'"}'
                            let newlocStorage
                            
                            
                            newlocStorage = localStorage.basketDetails.replace(prev,'')
                        
                        
                            if(newlocStorage.search(',')===1){
                            newlocStorage =  newlocStorage.replace(',','')
                            }else if(newlocStorage.search(',,')>0){
                            newlocStorage=  newlocStorage.replace(',,',',')
                            }else if(newlocStorage.search('},')>0){
                            newlocStorage=  newlocStorage.replace('},','}')
                            }
                        
                            localStorage.basketDetails= newlocStorage
                            let newnum = JSON.parse(localStorage.basketDetails)
                            let newv=0;
                            newnum.forEach(element => {
                                newv= newv+ Number(element.itemQuantity)
                            });
                
                            document.querySelectorAll('.basket_status').forEach((itm)=>{
                                itm.innerText=newv
                                updateCartInput(newv)                     
                            
                            })
                        }else if(bask.length===1){
                            localStorage.basketDetails= null
                            document.querySelectorAll('.basket_status').forEach((itm)=>{
                                itm.innerText=0
                                                
                            
                            })
                        }
                

                    

                        
                        
                    })
           //update new cart items to remove the unwanted item
            })

           }else{
            animatorEffect.applyStyle('red','inherit')
            
            preloader.querySelectorAll('div')[0].innerHTML='Resource could not be found' 
            animatorEffect.updateinnerhtml('Something went wrong <a class="w3-text-black" onclick="<script>window.location.reload()</script>" href="">Retry</a>')
         
           }
       }   
   }
   xhttp.open('GET','http://localhost:9090/usercheckout',true)
   xhttp.send()
  
            
  
}else if(currentL[3]==='view-product.html'){
    animator()
   let cartBTN = document.querySelectorAll('.addtoCart')
    cartBTN.forEach((btn)=>{
  
     btn.addEventListener('click',function(){
         
        let itmID = this.value
        let ITEMID = itmID.split(',')[0].split(':')[1].slice(1,-1)
        let ITEMQuant = itmID.split(',')[1].split(':')[1].slice(1,2)
        let BasketDetails =localStorage.basketDetails
         
   
        
        if(BasketDetails==='null'){
            new Promise((resolve,reject)=>{
                localStorage.basketDetails = '[{"itemID":"'+ITEMID+'","itemQuantity":"'+1+'"}]'
                resolve()
            }).then(()=>{
                    
                    document.querySelectorAll('.basket_status').forEach((itm)=>{
                        itm.innerText=1;
                        updateCartInput(1)
                    })
                  
            }).catch((error)=>{
                console.log(error)
            })  
          
         
        }else if(BasketDetails!=='null'){
         let searchRes =BasketDetails.search(ITEMID)
     
         //find if item is already in cart and update only quantity
           if(searchRes==-1){ 
                 let curr_bask_status = JSON.parse(localStorage.basketDetails)
             
                 curr_bask_status.push({itemID:ITEMID,itemQuantity:"1"})
                 localStorage.basketDetails= JSON.stringify(curr_bask_status)
                 //update Cart Value
                 

                 let curr_bask = JSON.parse(localStorage.basketDetails)
                 cartValue  = 0; 
              
                 curr_bask.forEach((itm)=>{
                     cartValue=cartValue + Number(itm.itemQuantity)
                 })
              
                 document.querySelectorAll('.basket_status').forEach((itm)=>{
                     itm.innerText=cartValue
                     updateCartInput(cartValue)
          
                 }) 
                
            }else{
                 let curr_bask_status = JSON.parse(localStorage.basketDetails)
                 let Z= curr_bask_status.filter((itm,index)=>{
                     return itm.itemID === ITEMID
                 })
                 
                 let prev_quantity= JSON.stringify(Z[0])
                 
                 let quantity_tracker = Number(Z[0].itemQuantity)
                 
                 quantity_tracker_new = quantity_tracker + 1
                
                 
                 BasketDetails= localStorage.basketDetails
                 let updated_quantity = JSON.stringify({itemID:ITEMID,itemQuantity:quantity_tracker_new.toString()})
                 let updatedBasket =BasketDetails.replace(prev_quantity,updated_quantity)
                 localStorage.basketDetails= updatedBasket
                 
                 //update Cart Value
                 let curr_bask = JSON.parse(localStorage.basketDetails)
                 let initcart=0;
                 curr_bask.forEach((itm)=>{
                     initcart=initcart+ Number(itm.itemQuantity)
                 })
                     
                     document.querySelectorAll('.basket_status').forEach((itm)=>{
                         itm.innerText=initcart
                         updateCartInput(initcart)                       
                       
                     })
                     
                     
       
         }
        }
     })
    })
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
    animator()
    let recovered_account = document.querySelector('#recovered_account')
    let confpassword = document.querySelector('#confpassword')
    let newpassword = document.querySelector('#newpassword')
    let acc_rec_status = document.querySelector('#acc_rec_status')
    let submitbtn = recovered_account.querySelector('button')
  
    function defaultRecoveryInputs(arr){
     
        if(arr[0]==='input'){
            recovered_account.querySelectorAll('input').forEach((input)=>{
                input.value =''
            })
        }
         if(arr[1]==='label'){
            recovered_account.querySelectorAll('label').forEach((label)=>{
                label.style.color ='black'
             })
             recovered_account.querySelectorAll('label')[0].innerHTML = "New Password"
             recovered_account.querySelectorAll('label')[1].innerHTML ="Confirm New Password"
        }
       
       

    }

    newpassword.addEventListener('keyup',function () {
        let value = this.value
       
        let letterCheck = /[a-zA-Z]/
        let numCheck = /[0-9]/
        let label = document.querySelector('#'+this.id+'Label')
     
        if(value.length<6){
            label.style.color='red'
            label.innerHTML= 'Password must be atleast 6 character long'
            submitbtn.disabled = true
        }else if(letterCheck.test(value)===false && numCheck.test(value)===false){
         label.style.color='red'
         label.innerHTML= 'Password must include Letters and Numbers'
         submitbtn.disabled= true
        }else{
            label.style.color='green'
            label.innerHTML= "New Password <i class='fas fa-check'></i> "
            submitbtn.disabled = false
        }
        
    })

    confpassword.addEventListener('keyup',function () {
        let value = this.value
        let label = document.querySelector('#'+this.id+'Label')
       if(newpassword.value!==value){
        label.style.color='red'
        label.innerHTML= "Confirmation password mismatch "
        submitbtn.disabled = true
       }else{
        label.style.color='green'
        label.innerHTML= "Confirm New Password <i class='fas fa-check'></i> "
        submitbtn.disabled= false
       }
        

    })
    recovered_account.addEventListener('submit',function (e) {
        e.preventDefault();
        if(newpassword.value!=='' && confpassword.value!==''){
            xhttp.onreadystatechange = function(){
                if(this.readyState===1){
                    acc_rec_status.style.backgroundColor= procbg
                    acc_rec_status.style.color= 'green'
                    acc_rec_status.innerHTML ="Processing <span class='w3-animate-fading'>...</span>"
                    submitbtn.disabled= true
                }else if(this.readyState===4){
                    if(this.status===200){
                        acc_rec_status.style.backgroundColor=succbg
                        acc_rec_status.style.color= 'black'
                        acc_rec_status.innerHTML ="Success"
                        submitbtn.disabled= false
                        defaultRecoveryInputs(['input','label'])
                        setTimeout(()=>{
                            acc_rec_status.style.backgroundColor='white'
                            acc_rec_status.innerHTML = null
                        },3000)
                     
                    }else if(this.status===0){
                        acc_rec_status.style.backgroundColor= errbg
                        acc_rec_status.style.color= 'black'
                        acc_rec_status.innerHTML ="Oops. You appear to have lost your Internet Connection.Try Again"
                        submitbtn.disabled= false
                        defaultRecoveryInputs([null,'label'])
                    }else{
                        acc_rec_status.style.backgroundColor= errbg
                        acc_rec_status.style.color= 'black'
                        acc_rec_status.innerHTML ="Something went wrong."
                        submitbtn.disabled= false
                        defaultRecoveryInputs([null,'label'])
                    }
                }
            }
            xhttp.open('POST','http://localhost:9090/resetPass',true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.send('newpassword='+newpassword.value + '&confirmnewpassword='+confpassword.value)

        }else{
            recovered_account.queryselectorAll('label').forEach((label)=>{
                label.style.color ='red'
            })
        }

    })
    
}else if(currentL[3]==='list-products.html'){
    animator()
   let cartBTN = document.querySelectorAll('.addtoCart')
    cartBTN.forEach((btn)=>{
  
     btn.addEventListener('click',function(){
         
        let itmID = this.value
        let ITEMID = itmID.split(',')[0].split(':')[1].slice(1,-1)
        let ITEMQuant = itmID.split(',')[1].split(':')[1].slice(1,2)
        let BasketDetails =localStorage.basketDetails
         
   
        
        if(BasketDetails==='null'){
            new Promise((resolve,reject)=>{
                localStorage.basketDetails = '[{"itemID":"'+ITEMID+'","itemQuantity":"'+1+'"}]'
                resolve()
            }).then(()=>{
                    
                    document.querySelectorAll('.basket_status').forEach((itm)=>{
                        itm.innerText=1;
                        updateCartInput(1)
                    })
                  
            }).catch((error)=>{
                console.log(error)
            })  
          
         
        }else if(BasketDetails!=='null'){
         let searchRes =BasketDetails.search(ITEMID)
     
         //find if item is already in cart and update only quantity
           if(searchRes==-1){ 
                 let curr_bask_status = JSON.parse(localStorage.basketDetails)
             
                 curr_bask_status.push({itemID:ITEMID,itemQuantity:"1"})
                 localStorage.basketDetails= JSON.stringify(curr_bask_status)
                 //update Cart Value
                 

                 let curr_bask = JSON.parse(localStorage.basketDetails)
                 cartValue  = 0; 
              
                 curr_bask.forEach((itm)=>{
                     cartValue=cartValue + Number(itm.itemQuantity)
                 })
              
                 document.querySelectorAll('.basket_status').forEach((itm)=>{
                     itm.innerText=cartValue
                     updateCartInput(cartValue)
          
                 }) 
                
            }else{
                 let curr_bask_status = JSON.parse(localStorage.basketDetails)
                 let Z= curr_bask_status.filter((itm,index)=>{
                     return itm.itemID === ITEMID
                 })
                 
                 let prev_quantity= JSON.stringify(Z[0])
                 
                 let quantity_tracker = Number(Z[0].itemQuantity)
                 
                 quantity_tracker_new = quantity_tracker + 1
                
                 
                 BasketDetails= localStorage.basketDetails
                 let updated_quantity = JSON.stringify({itemID:ITEMID,itemQuantity:quantity_tracker_new.toString()})
                 let updatedBasket =BasketDetails.replace(prev_quantity,updated_quantity)
                 localStorage.basketDetails= updatedBasket
                 
                 //update Cart Value
                 let curr_bask = JSON.parse(localStorage.basketDetails)
                 let initcart=0;
                 curr_bask.forEach((itm)=>{
                     initcart=initcart+ Number(itm.itemQuantity)
                 })
                     
                     document.querySelectorAll('.basket_status').forEach((itm)=>{
                         itm.innerText=initcart
                         updateCartInput(initcart)                       
                       
                     })
                     
                     
       
         }
        }
     })
    })
}else if(currentL[3]==='select-address.html'){
    let homeofficeaddress = document.querySelector('#home-office-address')
    let address_item = document.querySelectorAll('.address-item')
    animator()
    let navtrack = JSON.parse(localStorage.navigationTrack)
    if(navtrack.from==='/checkout.html'){

        if(navtrack.data==='pickupaddress'){ 
            document.querySelector('#pickup-station').style.display = 'block'
            document.querySelector('#home-office-address').style.display = 'none'

            //handle pickup selection Option
            let county = grabBYID('#select-county')
            let area = grabBYID('#select-area')
            let station = grabBYID('#station')
            let proceedbtn = grabBYID('#save-address')
            let pickup_stationSec = grabBYID('#pickup-station')
            proceedbtn.disabled= true
            county.disabled= true,area.disabled=true,station.disabled=true,
            xhttp.onreadystatechange = function(){
                if(this.readyState===1){
                   
                    pickup_stationSec.querySelectorAll('label')[0].style.color = 'green'
                    pickup_stationSec.querySelectorAll('label')[0].innerHTML='Fetching Counties. Please wait <span class="w3-animate-fading">...</span>'   //Select Country
                  
                }else if(this.readyState===4){
                         if(this.status===200){
                            pickup_stationSec.querySelectorAll('label')[0].style.color = 'black'
                            pickup_stationSec.querySelectorAll('label')[0].innerHTML ='Select County'   //Select Country
                           let Response = (JSON.parse(this.responseText)).counties.split(',')
                           county.disabled= false
                           county.style.color ='brown'
                           let newOptions ='<option  value="default">-- Click to Select County --</option>' ;
                           Response.forEach((res)=>{
                              newOptions= newOptions.concat('<option value="'+res+'">'+res.toUpperCase()+ '</option>')
                           })
                           
                           county.innerHTML= newOptions
                         }else if(this.status===0){
                            pickup_stationSec.querySelectorAll('label')[0].style.color = 'red'
                            pickup_stationSec.querySelectorAll('label')[0].innerHTML='Net Error. You seem to have lost your internet connection'   //Select Country
                          
                         }else{
                            console.log(this.responseText) 
                            pickup_stationSec.querySelectorAll('label')[0].style.color = 'red'
                            pickup_stationSec.querySelectorAll('label')[0].innerHTML='Resource Could not be Found'   //Select Country
                          
                         }
                }
            }
            xhttp.open('GET','http://localhost:9090/populate-address?county=all&area=none&stations=none',true)
            xhttp.send()

            county.addEventListener('change',function(){
                
                    area.innerHTML ='<option value="default">--Select Area --</option>'
                    station.innerHTML='<option value="deafult">--Select Station --</option>'
                    station.disabled =true
                    pickup_stationSec.querySelectorAll('label')[2].style.color ='black'
                    pickup_stationSec.querySelectorAll('label')[2].innerHTML ='Select Station'
                    grabBYID('#computedPricePickup').innerHTML=''
                
                let value =this.value
                if(this.value!=='default'){
                    pickup_stationSec.querySelectorAll('label')[0].style.color = 'green'
                    pickup_stationSec.querySelectorAll('label')[0].innerHTML=  this.value + ' county selected <i class="fas fa-check"></i>' 
                    let areaLabel = new styler(pickup_stationSec.querySelectorAll('label')[1])
                    xhttp.onreadystatechange= function(){
                        if(this.readyState===1){
                           areaLabel.applyStyle('lightgreen')
                           areaLabel.updateinnerhtml('Fetching Areas in ' + value +', Please wait <span class="w3-animate-fading">...</span> ')
                        }else if(this.readyState===4){
                            if(this.status===200){
                                areaLabel.applyStyle('black')
                                areaLabel.updateinnerhtml('Select Area')
                                pickup_stationSec.querySelectorAll('label')[1].disabled= false
                                let newOptions ='<option  value="default">-- Click to Select Area --</option>' ;
                                let result = JSON.parse(this.responseText).areas.split(',')
                                 result.forEach((item)=>{
                                    newOptions=newOptions.concat('<option value="'+item+'">'+item.toUpperCase()+'</option>')
                                 })
                               area.disabled=false
                               area.innerHTML=newOptions
                            }else if(this.status===0){
                                areaLabel.applyStyle('red')
                                areaLabel.updateinnerhtml('Failed')
                            }else{

                            }
                        }
                    }
                    xhttp.open('GET','http://localhost:9090/populate-address?county=all&area='+this.value+'&stations=none',true)
                    xhttp.send()
                }else{
                    pickup_stationSec.querySelectorAll('label')[0].style.color = 'red'
                    pickup_stationSec.querySelectorAll('label')[0].innerHTML='Please Select a Valid County'  
                }
            })
            area.addEventListener('change',function(){
              
                let value =this.value
                if(this.value!=='default'){
                    pickup_stationSec.querySelectorAll('label')[1].style.color = 'green'
                    pickup_stationSec.querySelectorAll('label')[1].innerHTML=  this.value + ' area selected <i class="fas fa-check"></i>' 
                    let stationLabel = new styler(pickup_stationSec.querySelectorAll('label')[2])
                    xhttp.onreadystatechange= function(){
                        if(this.readyState===1){
                           stationLabel.applyStyle('lightgreen')
                           stationLabel.updateinnerhtml('Fetching Stations in ' + value +', Please wait <span class="w3-animate-fading">...</span> ')
                        }else if(this.readyState===4){
                            if(this.status===200){
                                stationLabel.applyStyle('black')
                                stationLabel.updateinnerhtml('Select Station')
                                pickup_stationSec.querySelectorAll('label')[1].disabled= false
                                let newOptions ='<option  value="default">-- Click to Select Station --</option>' ;
                                let result = JSON.parse(this.responseText).stations.split(',')
                               
                                 result.forEach((item)=>{
                                     newOptions=newOptions.concat('<option value="'+item+'">'+item.toUpperCase()+'</option>')
                                     
                                 })
                               station.disabled=false
                               station.innerHTML=newOptions
                              
                            }else if(this.status===0){
                                stationLabel.applyStyle('red')
                                stationLabel.updateinnerhtml('Failed')
                            }else{

                            }
                        }
                    }
                    xhttp.open('GET','http://localhost:9090/populate-address?county=all&area=none&stations='+value+'&query=none',true)
                    xhttp.send()
                }else{
                    pickup_stationSec.querySelectorAll('label')[1].style.color = 'red'
                    pickup_stationSec.querySelectorAll('label')[1].innerHTML='Please Select a Valid Area'  
                }
            })
            let shippingcharges,addit_descr,boxdetails,locid
            station.addEventListener('change',function(){

                let value =this.value
                if(this.value!=='default'){
                    
                    let stationLabel = new styler(pickup_stationSec.querySelectorAll('label')[2])
                    xhttp.onreadystatechange = function(){
                    if(this.readyState===1){
                         stationLabel.applyStyle('lightgreen','inherit')
                         stationLabel.updateinnerhtml('Fetching shipping charges for '+ value+ '<span class="w3-animate-fading"> ...</span>')
                    }else if(this.readyState===4){
                      
                        if(this.status===200){
                            stationLabel.applyStyle('green','inherit')
                            stationLabel.updateinnerhtml(value + ' area selected <i class="fas fa-check"></i>')   
                            grabBYID('#computedPricePickup').innerHTML=    'Shipment Charges'+'<span class="w3-text-brown"> KES '+JSON.parse(this.responseText).fee + '</span>'
                            proceedbtn.disabled= false
                             shippingcharges= JSON.parse(this.responseText).fee
                             addit_descr = JSON.parse(this.responseText).addressDesc
                             boxdetails = JSON.parse(this.responseText).BOX
                             locid =JSON.parse(this.responseText).LOCID
                            
                        }else{
                            stationLabel.applyStyle('red','inherit')
                            stationLabel.updateinnerhtml('Something went wrong') 
                            proceedbtn.disabled= false 
                            
                        }
                    }
                    }
                    xhttp.open('GET','http://localhost:9090/populate-address?county=all&area=none&stations='+value+'&query=price',true)
                    xhttp.send() 
                   
                }else{
                    pickup_stationSec.querySelectorAll('label')[2].style.color = 'red'
                    pickup_stationSec.querySelectorAll('label')[2].innerHTML='Please Select a Valid Station'  
                }
            })
            proceedbtn.addEventListener('click',function(e){
                e.preventDefault()

                localStorage.navigationTrack = '{"from":'+'"/select-address.html",'+'"to":'+'"/checkout.html",'+'"data":"customaddressSelected",'+'"redirect":"/checkout.html"}'
                if(localStorage.selectedAddress ===undefined){
                  localStorage.setItem('selectedAddress',null)
                }else{
                    if(county.value!=='' && area.value!=='' && station.value!==''){             
                        localStorage.selectedAddress ='{"County":"'+county.value+'","Location":"'+area.value+'","station":"'+station.value+'","charges":"'+shippingcharges+'","decribeLoc":"'+addit_descr+'","BOX":"'+ boxdetails+'","LocationID":"'+locid+'"}'
                        window.location.href = '/checkout.html'
                    }else{

                    }
                  
                }
                
            })

          
        }else if(navtrack.data==='customaddress'){
            document.querySelector('#home-office-address').style.display = 'block'
            document.querySelector('#pickup-station').style.display = 'none'
            xhttp.onreadystatechange = function(){
                if(this.readyState===1){
                     homeofficeaddress.innerHTML = '<div class="w3-pale-yellow w3-center">Fetching addressess <span class="w3-animate-fading">...</span></div>'
                }else if(this.readyState===4){
                          
                    if(this.status===200){
                     // apend the addresses
                     homeofficeaddress.innerHTML =   ' <div id="w33e3Z" class=" w3-display-container w3-border address-item"> '+
                   '  <p >ERICK NDERITU  <br> P.O BOX 123,<br>KAKAMEGA,<br>254727895935  </p>'+
                    '  <button style="background-color: yellow;" class="w3-btn  w3-center w3-margin-bottom w3-round w3-border w3-border-black select-del-address  ">Use this Address</button> </div>'+

                    ' <div id="1w6egdt" class=" w3-display-container w3-border address-item"> '+
                    '  <p >Brahim Mark  <br> P.O BOX 123,<br>Kisumu,<br>25472789534  </p>'+
                     '  <button style="background-color: yellow;" class="w3-btn  w3-center w3-margin-bottom w3-round w3-border w3-border-black select-del-address  ">Use this Address</button> </div>'
                   
                        document.querySelectorAll('.address-item').forEach((item)=>{
                        
                            item.querySelector('button').addEventListener('click',function(){
                                
                              //validate the ID and set as selected email
                              
                              xhttp.onreadystatechange= function(){
                                  if(this.readyState===1){
                                    item.querySelector('button').style.backgroundColor = 'white'
                                    item.querySelector('button').innerHTML= '<span class="w3-small">Processing </span>   <img class="loadgif-cartokay" src="./assests/images/833.gif" alt="loader">'
                      
                                  }else if(this.readyState===4){
                                      if(this.status===200){
                                       
                                        item.querySelector('button').style.backgroundColor = 'white'
                                        
                                        item.querySelector('button').innerHTML ='Address Selected <i class="fas fa-check"></i>'
                                        item.querySelector('button').style.color ='green'  
                                       localStorage.navigationTrack = '{"from":'+'"/select-address.html",'+'"to":'+'"/checkout.html",'+'"data":"customaddressSelected",'+'"redirect":"/checkout.html"}'
                                    
                                        if(localStorage.selectedAddress ===undefined){
                                          localStorage.setItem('selectedAddress',null)
                                        }else{
                                                localStorage.selectedAddress ='{"County":"'+JSON.parse(this.responseText).address.County+'","Location":"'+JSON.parse(this.responseText).address.location+'","station":"'+JSON.parse(this.responseText).address.station+'","charges":"'+JSON.parse(this.responseText).address.shippingcharges+'","decribeLoc":"'+JSON.parse(this.responseText).address.addit_descr+'","BOX":"'+ JSON.parse(this.responseText).address.BOX+'","LocationID":"'+ JSON.parse(this.responseText).address.locid+'"}'
                                               window.location.href = '/checkout.html'
                                                                   
                                        }
                                      }else if(this.status===0){
                                        item.querySelector('button').style.backgroundColor = 'white'
                                        item.querySelector('button').style.color ='red'  
                                        item.querySelector('button').innerHTML ='Net Err'
                                      }else{
                                        item.querySelector('button').style.backgroundColor = 'white'
                                        item.querySelector('button').style.color ='red'  
                                        item.querySelector('button').innerHTML ='Sever Error'
                                      }

                                  }
                              }
                              xhttp.open('GET','http://localhost:9090/verifyaddress?id='+this.parentNode.id)
                              xhttp.send()
                    

                            })

                        })

                    }else if(this.status===0) {
                        homeofficeaddress.innerHTML = '<div style="width:90%;margin-left:5%" class="w3-pale-red w3-text-black w3-center">You seem to have lost your internet connection <span class="w3-btn" style="text-decoration:underline;font-weight:bold" onClick="<script>window.location.reload()</script>" >Retry Now</span></div>'
           
                    }else{

                        homeofficeaddress.innerHTML = '<div style="width:90%;margin-left:5%" class="w3-pale-red w3-text-black w3-center">Something went wrong</div>'
           
                    }
                }
                }
                xhttp.open('GET','http://localhost:9090/customaddresses',true)
                xhttp.send() 
        }
        }else{
        window.location.href = '/checkout.html'
        }

}else if(currentL[3].search('receipt.html')>-1){
  
   
  
    let recieptCard = document.querySelector('#recieptCard')
    let orderID = document.querySelector('#orderID')
    let orderPrice = document.querySelector('#orderPrice')
    let loaderreceipt = document.querySelector('#loader-receipt')
 
    //   xhttp.onreadystatechange = function(){

    //   }
    let grabQuery = (window.location.href).split('?')
  
    if(grabQuery.length===2){
        let transcode =  grabQuery[1].split('=')
       
        if(transcode.length===2 && transcode[0].search('verify-code')>-1 ){
        
            xhttp.onreadystatechange = function(){
                if(this.readyState===1){

                }else if(this.readyState===4){
                    if(this.status===200){
                        loaderreceipt.style.display = 'none'
                      recieptCard.style.display = 'block'
                      orderID.innerHTML = JSON.parse(this.responseText).orderNO
                      orderPrice.innerHTML = JSON.parse(this.responseText).amount
                    }else if(this.status===0){
                       
                        loaderreceipt.innerHTML ='<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Internet Error</div>You seem to have lost your internet connection. <span style="text-decoration:underline;color:brown"  onclick="window.location.reload()" class="w3-btn">Click here to retry</span>'
                    }else{ 
                       
                      
                        loaderreceipt.innerHTML = '<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Report Error</div>Oops. We could not generate a reciept <div class="w3-btn" style="text-decoration:underline;color:brown"  onclick=" window.location.reload()" > Click here to retry </div>'+
                        '<br>If the problem persists <a style="text-decoration:underline;font-weight:bold;color:blue" href="">click here contact customer care</a> '      
                    }
                }
            } 
        xhttp.open('GET','http://localhost:9090/generateReceipt?transaction='+transcode[1],true)
        xhttp.send()


       
        }else{
            loaderreceipt.innerHTML = '<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Error Generating Report</div>Oops. We could not generate a reciept <div class="w3-btn" style="text-decoration:underline;color:brown"  onclick=" window.location.reload()" > Click here to retry </div>'+
            '<br>If the problem persists <a style="text-decoration:underline;font-weight:bold;color:blue" href="">click here contact customer care</a> '      
       
        }
    }else{

        loaderreceipt.innerHTML = '<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Error Generating Report</div>Oops. We could not generate a reciept <div class="w3-btn" style="text-decoration:underline;color:brown"  onclick=" window.location.reload()" > Click here to retry </div>'+
        '<br>If the problem persists <a style="text-decoration:underline;font-weight:bold;color:blue" href="">click here contact customer care</a> '      
   
    }
   

}else{
    animator()
}
 

     


}