
// document.addEventListener('load',ready)

// function ready(){
 
//endpoints declaration with data expected




let footerContentScript, LoggedInsmallScript ,LoggedInLargeScript,notLoggedInLargeScript,notLoggedInsmallScript;
footerContentScript = ' <ul style="list-style-type: none;padding: 0px;">\
<li class="footer-item"> <span class="footer-title">Quick Links</span> \
    <ul>\
        <li>Samsung</li>\
        <li>Oppo</li>\
        <li>Tecno</li>\
        <li>Laptop</li>\
        <li>Laptop Accessories</li>\
     </ul>\
</li>\
<li  class="footer-item"><span class="footer-title">Important Information</span>\
    <ul><li >About Us</li>\
         <li>Contact Us</li>\
          <li>Privacy Policy</li>\
        <li>Terms and Conditions</li> </ul>\
<li  class="footer-item"><span class="footer-title"> Our Location</span>\
    <ul><li >\
        BIGHOUSE BUILDING <br>\
        P.O BOX 123-456 <br>\
        NAIROBI,KENYA\
    </li></ul>\
</li>\
<li  class="footer-item"><span class="footer-title">Contact Us</span>\
    <ul>\
        <li>Facebook</li>\
        <li>Twitter</li>\
        <li>Youtube</li>\
        <li>Tel: +25412345678</li>\
     </ul>\
</li>\
</ul>'
notLoggedInLargeScript = ''+
'<a href="/"><div id="home-icon" class="w3-col s5 m4 l4">'+
    '<img src="./assests/images/home-icon.jpg" class="w3-round-large" alt="Home Icon">\
</div></a>\
<div id="search-section" class="w3-col s7 m8 l4 ">\
    <form action="#" method="get">\
        <input placeholder="Search ..." class="w3-round-xxlarge w3-input w3-border w3-border-bottom  " type="search" name="searchKeywaords" id="serachBar">\
    </form>\
</div>\
 <div id="account-actions" class="l4 w3-col w3-round-xlarge">\
    <ul id="account-actions-ul">\
       <a href="/checkout.html"><li  class="nav-icon"> <i class="fas w3-text-green fa-shopping-cart"></i>\
            <sup style="font-weight: bold;" class="basket_status w3-text-brown"></sup>\
            <ul><li class="shop_basket"><span class="w3-small">Cart</span></li>\
            </ul>\
           \
        </li></a>\
\
        <a href="'+authenticate+'"><li class="nav-icon">    <i class="fas fa-user"></i>\
        <ul>\
            <li id="account-status">\
         <span class="w3-small">Login/Signup</span>'+     
       '</li>'+
       '</ul>\
          \
        </li></a>\
        <li class="nav-icon">  <i class="fas fa-headset"></i>\
            <ul><li>\
              <span class="w3-small">Support</span>'+
            '</li></ul>\
        </li>\
    </ul>\
</div>'
notLoggedInsmallScript =' <div class="w3-row" id="nav-bar-small">\
<a id="small-home-link" href="/index.html"><div class="w3-col s3">Home<br><i  class="fas fa-home"></i> </div></a>\
<a id="small-cart-link" href="/checkout.html"><div class="w3-col s3 shop_basket">Cart <br><i class="fas w3-text-green fa-shopping-cart"></i><sup  style="font-weight: bolder;" class="basket_status w3-text-brown"></sup> </div></a>\
<a href=""><div class="w3-col s3">Support <br><i class="fas fa-headset"></i> </div></a>\
<a  id="small-dashboard-link" href="'+authenticate+'"><div class="w3-col s3">My Account <br><i class="fas fa-user"></i></div></a>\
\
</div>'

LoggedInLargeScript = ''+
'<a href="/"><div id="home-icon" class="w3-col s5 m4 l4">'+
    '<img src="./assests/images/home-icon.jpg" class="w3-round-large" alt="Home Icon">\
</div></a>\
<div id="search-section" class="w3-col s7 m8 l4 ">\
    <form action="#" method="get">\
        <input placeholder="Search ..." class="w3-round-xxlarge w3-input w3-border w3-border-bottom  " type="search" name="searchKeywaords" id="serachBar">\
    </form>\
</div>\
 <div id="account-actions" class="l4 w3-col w3-round-xlarge">\
    <ul id="account-actions-ul">\
       <a href="/checkout.html"><li  class="nav-icon"> <i class="fas w3-text-green fa-shopping-cart"></i>\
            <sup style="font-weight: bold;" class="basket_status w3-text-brown"></sup>\
            <ul><li class="shop_basket"><span class="w3-small">Cart</span></li>\
            </ul>\
           \
        </li></a>\
\
       <a href="/dashboard.html" <li class="nav-icon">    <i class="fas fa-user-check"></i>\
        <ul>\
            <li id="account-status">\
         <span class="w3-small">My Account</span>'+     
       '</li>'+
       '</ul>\
          \
        </li></a>\
        <a href="/index.html?action=logout"><li class="nav-icon">  <i class="fas w3-text-red fa-arrow-right"></i>\
            <ul><li>\
              <span class="w3-small">Logout</span>'+
            '</li></ul>\
        </li></a>\
    </ul>\
</div>'

LoggedInsmallScript =' <div class="w3-row" id="nav-bar-small">\
<a id="small-home-link" href="/index.html"><div class="w3-col s3">Home<br><i  class="fas fa-home"></i> </div></a>\
<a id="small-cart-link" href="/checkout.html"><div class="w3-col s3 shop_basket">Cart <br><i class="fas w3-text-green fa-shopping-cart"></i><sup  style="font-weight: bolder;" class="basket_status w3-text-brown"></sup> </div></a>\
<a href=""><div class="w3-col s3">Support <br><i class="fas fa-headset"></i> </div></a>\
<a id="small-dashboard-link" href="/dashboard.html"><div class="w3-col s3">My Account <br><i class="fas fa-user"></i></div></a>\
\
</div>'
 

//}

let mylocation = window.location.href

let currentL=mylocation.split('/')
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

//  let NavbarLinks = document.querySelectorAll('.nav-icon')  
//  NavbarLinks.forEach((bar)=>{
//      bar.addEventListener('click',function(){
//          let  value = this.innerText
        
//          if(value.search('Cart')>-1){
//          window.location.href= '/checkout.html'
//          }else if(value==='My Account'){
//            window.location.href= '/dashboard.html'
//          }else if(value==='Logout'){
//             window.location.href= '/index.html'
//          }else if(value.search('Login/Signup')>-1){
//             window.location.href= '/authentication.html'
//          }else if(value.search('/Logout')){
//                window.location.href='/'
//          }
         

//      })
//  })

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
             if(localStorage.favourites===undefined){
             localStorage.setItem('favourites','')
            }
    
  

    }else{
       document.querySelector('body').html = 'This website Relies on LocalStorage and Cookie.Please enable them or uprade your browser'
    }

//  let home_icon = document.querySelector('#home-icon')
//  if(home_icon!==null){
//  home_icon.addEventListener('click',function(){
//      window.location.href='index.html'
//  })
// }
 if(currentL[3].search('index.html')>-1 || currentL[3]===''){
    let key1 ="[" 
    let key2=']'
    setInterval(()=>{
        if(localStorage.favourites.indexOf(key1)>-1 && localStorage.favourites.indexOf(key2)>-1 ){
            xhttp.onreadystatechange = function(){
                if(this.status==200){
                    localStorage.favourites=''
                    
                }else{
                   
                }
            }
           xhttp.open('POST',post_add_to_favourite,true)
           xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
           xhttp.withCredentials=true
           xhttp.send('items='+localStorage.favourites.slice(1,-1))
        }
    },1000*30)
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
   document.querySelectorAll('.favicon').forEach((icon)=>{
       
    icon.addEventListener('click',function(){
    
      
        document.getElementById(this.id).innerHTML ='<i class="fas favo-icon w3-large  fa-heart"></i> Added to Favourite'
        document.getElementById(this.id).style.color ='brown'
           
      let key1 ="[" 
      let key2=']'
       if(localStorage.favourites.indexOf(key1)>-1 && localStorage.favourites.indexOf(key2)>-1 && localStorage.favourites.indexOf(this.id)===-1 ){
         
            let currentFav =  (localStorage.favourites).slice('1','-1')
            localStorage.favourites= '['+currentFav+','+this.id+']'
         
            
       }else if(localStorage.favourites.indexOf(key1)===-1 && localStorage.favourites.indexOf(key2)===-1 && localStorage.favourites.indexOf(this.id)===-1){
        localStorage.favourites = '['+this.id+']'

       }
    })
})

   
 }else  if(currentL[3].search('authentication.html')>-1 || currentL[3].search('auth')>-1 ){
     let nextRoute;
     
     
     if(document.referrer.length===0){//no previous links
        nextRoute ='/'
     }else if(document.referrer.search('dashboard')>-1){
         nextRoute='/dashboard.html'
     }else if(document.referrer.search('checkout')>-1){
       nextRoute ='/checkout.html'
     }else{
        nextRoute='/dashboard.html'
     }
    let footer = document.querySelector('#footer-content')
    let navbarLarge = document.querySelector('#nav-bar-large')
      let navbarSmall = document.querySelector('#nav-bar-small')
    animator()
  
    // authentication
     let loginForm= document.querySelector('#login_form')
     let signupForm= document.querySelector('#sign_up_form')
     let forgotpasswordForm =document.querySelector('#forgot-password')
     let forgpassbtn = document.querySelectorAll('.forgot-password-instead') 
     let signupbtn = document.querySelectorAll('.signup-instead') 
     let loginbtn = document.querySelectorAll('.login-instead') 
//    footer.innerHTML= footerContentScript
//    navbarLarge.innerHTML = notLoggedInLargeScript
//    navbarSmall.innerHTML =notLoggedInsmallScript
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
            statusBar.innerHTML ='Processing.Please wait <i class="w3-spin fas fa-spinner"></i>'
            defaultLabels()
         }else if(this.readyState===4){
             if(this.status===200){
                 statusBar.style.backgroundColor='#ccffcc'
                 statusBar.style.color = 'black'
                 statusBar.innerHTML ='<span style="font-weight:bold"><i class="fas w3-text-green fa-check"></i> Registration Was Succesful.Please check your Email Inbox for Futher Instructions'
                 inputs.forEach((input)=>{
                     input.value=''                    
                 })
                 defaultLabels()
                 setTimeout(()=>{
                    window.location.href =authenticate
                 },3000)
           
                
             }else if(this.status===500){
                statusBar.style.backgroundColor='#ffcccc'
                statusBar.style.color = 'black'
                statusBar.innerHTML ='Your Request cannot be Completed.Try again Later'
                inputs.forEach((input)=>{
                    input.value=''                    
                })
                defaultLabels()
             }else if(this.status===0){
                statusBar.style.backgroundColor='#ffcccc'
                statusBar.style.color = 'black'
                statusBar.innerHTML ='Oops. Something went wromg.Give it a try in a few.'
             }else if(this.status===400){
                statusBar.style.backgroundColor='#ffcccc'
                statusBar.style.color = 'black'
              
                let htmlCreatederrors;
                 htmlCreatederrors =''
                JSON.parse(this.responseText).errors.forEach((error)=>{
                  
                    htmlCreatederrors = htmlCreatederrors + '<i class="fas fa-exclamation-triangle w3-small w3-text-yellow"></i><span class=" w3-text-gray">  '+error+'</span><br>'
                })
            
                statusBar.innerHTML = '<div style=text-decoration:underline" class=" w3-small"> Correct the Highlighted errors below :</div> '+ '<span class="w3-tiny ">'+ htmlCreatederrors + '</span>' 
             }else{
                statusBar.style.backgroundColor='#ffcccc'
                statusBar.style.color = 'black'
                statusBar.innerHTML = this.responseText
             }
         }
     }
     xhttp.open('POST',post_add_user,true)
     xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
     xhttp.withCredentials=true
     xhttp.send(signupData.join('&'))

    })
    loginForm.addEventListener('submit',function(e){
        e.preventDefault();
        document.querySelector('body').scrollTop=0
        let login_progress = document.querySelector('#login_progress')
        let xhttp = new XMLHttpRequest();
    
        let inputs =document.querySelector('#'+this.id+'').querySelectorAll('.w3-input')
    
            login_progress.style.backgroundColor = 'wheat'
            login_progress.innerHTML=' Authenticating.Please wait <i class="w3-spin fas fa-spinner"></i>'
            login_progress.style.color = 'green'
        
         
         let LoginData=[]
         
         inputs.forEach((input)=>{
             LoginData.push(input.name+'='+input.value)
         })
         xhttp.onreadystatechange=function(){
     
                if(this.readyState===1){
                    login_progress.style.backgroundColor = 'wheat'
                    login_progress.innerHTML=' Authenticating.Please wait <i class="w3-spin fas fa-spinner"></i>'
                    login_progress.style.color = 'green'
                }else if(this.readyState===4){
                    if(this.status===200){
                        login_progress.style.backgroundColor = '#ccffcc'
                            login_progress.innerText='Success'
                             login_progress.style.color = 'black'
                             window.location.href =  defDomain+nextRoute
                
                     }else if(this.status===401){
                        login_progress.style.backgroundColor = '#ffcccc'
                        login_progress.innerText= this.responseText
                        login_progress.style.color = '#000000'
                    }else{
                        login_progress.style.backgroundColor = '#ffcccc'
                        login_progress.innerText= 'We are unable to complete your Request.Don\'t fret.Give it a try again'
                        login_progress.style.color = '#000000'
                    }
                }
            
        }

        
         xhttp.open('POST',post_login_user ,true)
         xhttp.setRequestHeader('Content-type',"application/x-www-form-urlencoded") 
         xhttp.withCredentials=true
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
               statusbar.innerHTML = 'Processing.Please wait <i class="w3-spin fas fa-spinner"></i>'
            }else if(this.readyState===4){
                if(this.status===200){
                    statusbar.style.backgroundColor= '#ccffcc'
                    statusbar.style.color='black'
                    statusbar.innerHTML= 'An Email has been sent to '+ recovery_email.value + ' with account recovery instructions'
                    recovery_email.value=''
                }else if(this.status===401){
                    statusbar.style.backgroundColor= '#ffcccc'
                    statusbar.style.color='black'
                    statusbar.innerHTML= 'The  email you provided is incorrect'
                }else if(this.status===404){
                    statusbar.style.backgroundColor= '#ffcccc'
                    statusbar.style.color='black'
                    statusbar.innerHTML= 'Something went wrong'
                }else if(this.status===400){
                    let errors = '<span style="text-decoration:underline">Correct the Highlighted Errors Below</span><br>'
                    JSON.parse(this.responseText).forEach((err)=>{
                        errors=errors + '<span class="w3-tiny">'+err+'</span>'
                    })
                    statusbar.style.backgroundColor= '#ffcccc'
                    statusbar.style.color='black'
                    statusbar.innerHTML= errors
                }else{
                    statusbar.style.backgroundColor= '#ffcccc'
                    statusbar.style.color='black'
                    statusbar.innerHTML= this.responseText
                }
            }
        }
        
        xhttp.open('POST',post_recover_account ,true)
        xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhttp.withCredentials=true
        xhttp.send('recovery_email='+recovery_email.value)
      })

}else if(currentL[3].search('address-book.html')>-1){
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
                    }else if(this.status===401){
                       window.location.href=authenticate
                    }else if(this.status===403){
                        document.querySelector('#'+id).querySelectorAll('.delAddress')[0].style.display= 'block'
                        btn.style.color = 'red'
                        btn.innerHTML  =this.responseText

                        setTimeout(()=>{
                            btn.style.backgroundColor='white'
                            btn.style.color = 'darkgreen'
                            btn.innerHTML  ='Select Default'
                        },700) 
                    }else{                        
                        document.querySelector('#'+id).querySelectorAll('.delAddress')[0].style.display= 'block'
                        btn.style.color = 'red'
                        btn.innerHTML  ='Error.Failed'

                        setTimeout(()=>{
                            btn.style.backgroundColor='white'
                            btn.style.color = 'darkgreen'
                            btn.innerHTML  ='Select Default'
                        },700)
                       
                    }
                }
            }
            xhttp.open('POST',post_set_address_as_default,true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.withCredentials=true
            xhttp.send('address_id='+id+'&_csrf='+document.querySelector('#csrf').value)
        
        })
    })
    delAddress.forEach((btn)=>{
        btn.addEventListener('click',function(){
            let id = btn.parentNode.id;
             
         
            xhttp.onreadystatechange= function(){
                if(this.readyState===1){
                  btn.style.fontWeight ='bold'
                 
                  btn.innerHTML  ='<span class="w3-small">Deleting </span><img class="loadgif" src="./assests/images/833.gif" alt="loader">'
                  
                }else if(this.readyState===4){
                    if(this.status===200){
                        window.location.reload()
                       
                    }else if(this.status===401){
                     window.location.href =authenticate
                    }else if(this.status===403){
                        btn.innerHTML  = this.responseText

                        setTimeout(()=>{
                         
                            btn.innerHTML  ='Delete Address'
                        },2500)
                    }else{                          
                        btn.innerHTML  ='Something is Wrong.'

                        setTimeout(()=>{
                         
                            btn.innerHTML  ='Delete Address'
                        },2500)
                       
                    }
                }
            }
            xhttp.open('POST',post_delete_address,true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.withCredentials=true
            xhttp.send('address_id='+id+'&_csrf='+document.querySelector('#csrf').value)
        
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
    box.addEventListener('keyup',function (e) {0
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
            let descloc;
            if(locDesc.length===0 || locDesc.value===''){
                 descloc='Not Provided'
            }else{
               descloc= locDesc.value
            }
            let addressdata = "recipient="+ recipient.value + "&recphone="+(recphone.value).slice(1)+"&location="+reclocation.value+"&county="+county.value+"&locDesc="+descloc+"&box="+box.value+'&_csrf='+document.querySelector('#csrf').value
          
            xhttp.onreadystatechange= function(){
            
                if(this.readyState===1){
                    addressFormStatus.style.backgroundColor = '#d6f5d6'
                    addressFormStatus.style.color= 'black'
                    addressFormStatus.innerHTML ="Processing.Please wait <i class='w3-spin fas fa-spinner'></i>"
                    addressbook.querySelector('button').disabled= true
                }else if(this.readyState===4){
                    addressbook.querySelector('button').disabled= false
                    if(this.status==200){
                        addresslabelsDef()
                        addressFormStatus.style.backgroundColor = succbg
                        addressFormStatus.style.color = 'black'
                        addressFormStatus.innerHTML ='Address Added Succesfully'
                        setTimeout(()=>{
                            document.querySelector('#new-address').style.display='none'
                            addressFormStatus.innerHTML =''
                            window.location.reload()
                        },3000)
                     
                       
                    }else if(this.status===0){
                       addressFormStatus.style.backgroundColor = errbg
                       addressFormStatus.style.color= 'black'
                       addressFormStatus.innerHTML = 'Failed. Net Error '
                      
                    }else if(this.status===401){
                        window.location.href= authenticate
                    }else if(this.status===400){
                        addressFormStatus.style.backgroundColor = errbg
                        addressFormStatus.style.color= 'black'
                        let errors =''
                        for(var i=0;i<JSON.parse(this.responseText).errors.length;i++){
                            errors=errors+'<span class="w3-tiny"> -'+JSON.parse(this.responseText).errors[i]+'</span><br>'
                        }
                      
                          addressFormStatus.innerHTML = '<span style="text-decoration:underline">Correct the Highlighted Errors Below.</span><br> '+errors
                    }else if(this.status===403){
                        addressFormStatus.style.backgroundColor = errbg
                        addressFormStatus.style.color= 'black'
                        addressFormStatus.innerHTML = this.responseText
                    }else{
                        addressFormStatus.style.backgroundColor = errbg
                       addressFormStatus.style.color= 'black'
                       addressFormStatus.innerHTML = 'Failed. '+ this.responseText+' .Try Again'
                    }

                }
            }
            xhttp.open('POST',post_add_address,true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.withCredentials=true
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


}else if(currentL[3].search('personal-details.html')>-1){
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
                       
                    },1500)

                   }else if(this.status===200){
                        modifyName.style.color='green'
                        modifyName.innerHTML= 'Success'
                        currentName.style.color='black'
                        currentName.disabled=true
                        setTimeout(()=>{
                            modifyName.style.color = '#2196F3'
                            modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
                           
                        },1500)
                     
                    }else if(this.status===400){
                        modifyName.style.color='red'
                        modifyName.innerHTML = this.responseText
                        currentName.disabled=false
                        currentName.style.color= 'black'
                        setTimeout(()=>{
                            modifyName.style.color = '#2196F3'
                            modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
                           
                        },2500)
                    }else if(this.status===401){
                        window.location.href =authenticate
                    }else if(this.status===403){
                        modifyName.style.color='red'
                        modifyName.innerHTML =  this.responseText
                        currentName.disabled=false
                        currentName.style.color= 'black'
                        setTimeout(()=>{
                            cancelNameMod.disabled=true
                            modifyName.style.color = '#2196F3'
                            modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
                           
                        },1500)
                    }else{
                        modifyName.style.color='red'
                        modifyName.innerHTML =  'Failed'
                        currentName.disabled=false
                        currentName.style.color= 'black'
                        setTimeout(()=>{
                            cancelNameMod.disabled=true
                            modifyName.style.color = '#2196F3'
                            modifyName.innerHTML= '<i class="fas fa-pen"></i>Edit'
                           
                        },1500)
                       
                    }
                }
            }
            xhttp.open('POST',post_edit_name,true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.withCredentials=true
            xhttp.send('username='+currentName.value+"&_csrf="+document.querySelector('#csrf').value)
            
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
                            currentPhone.style.color='black'
                            setTimeout(()=>{
                                modifyPhone.style.color = '#2196F3'
                                modifyPhone.innerHTML= '<i class="fas fa-pen"></i>Edit'
                                currentPhone.disabled=true
                               
                            },1500)
                         
                        }else if(this.status===401){
                            window.location.href =authenticate
                        }else if(this.status===400){
                            modifyPhone.style.color='red'
                            modifyPhone.innerHTML = this.responseText
                            currentPhone.disabled=false
                            currentPhone.style.color= 'black'
                            setTimeout(()=>{
                                modifyPhone.style.color = '#2196F3'
                                modifyPhone.innerHTML= '<i class="fas fa-pen"></i>Edit'
                               
                            },2500)
                        }else if(this.status===403){
                            modifyPhone.style.color='red'
                            modifyPhone.innerHTML = this.responseText
                            currentPhone.disabled=false
                            currentPhone.style.color= 'black'
                            setTimeout(()=>{
                                modifyPhone.style.color = '#2196F3'
                                modifyPhone.innerHTML= '<i class="fas fa-pen"></i>Edit'
                               
                            },2500)
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
                xhttp.open('POST',post_edit_phone,true)
                xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
                xhttp.withCredentials=true
                xhttp.send('phone='+(currentPhone.value).slice(1)+"&_csrf="+document.querySelector('#csrf').value)
                
               
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
      if(current_password.value===value){
        label.innerText ='New Password and Old password CANNOT be the same'
        label.style.color= 'red'
      } else if(value.length<6){
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
            label.innerHTML ='Password does not match "New Password"'
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
        }else if(current_password.value===new_password.value){
            updPassForm.style.color = 'black'
            updPassForm.style.backgroundColor= '#ffb3b3'
            updPassForm.innerHTML = "New Password and Old password CANNOT be the same"

        }else{
            xhttp.onreadystatechange = function(){
            
                if(this.readyState===0){
                    updPassForm.style.color = 'black'
                    updPassForm.style.backgroundColor= '#ffb3b3'
                    updPassForm.innerHTML = "Internet Connection Error"
                }else if(this.readyState===1){
                 updPassForm.style.color = '#4dff88'
                 updPassForm.style.backgroundColor= 'black'
                 updPassForm.innerHTML = "Updating.Please wait <i class='w3-spin fas fa-spinner'></i>"
                 updatePasswordForm.querySelector('button').disabled= true
                
                }else if(this.readyState===4){
    
                    updatePasswordForm.querySelector('button').disabled= false
                    // updatePasswordForm.querySelectorAll('input').forEach((input)=>{
                    //     input.value=''
                    // })
                    updatePasswordForm.querySelectorAll('label').forEach((label)=>{
                        label.style.color= 'black'
                    })
                    updatePasswordForm.querySelectorAll('label')[0].innerHTML=defaultLabels[0] 
                    updatePasswordForm.querySelectorAll('label')[1].innerHTML=defaultLabels[1] 
                    updatePasswordForm.querySelectorAll('label')[2].innerHTML=defaultLabels[2]             
       
                    if(this.status===200){
                        updPassForm.style.color = 'black'
                        updPassForm.style.backgroundColor='#99ffbb'
                        updPassForm.innerHTML = "Password Updated Succesfully. You have been automatically logged out of all previous devices you had logged on"
                        setTimeout(()=>{
                            updPassForm.innerHTML = ""
                            updPassForm.style.display='none'
                        },4000)
                    }else if(this.status===401){
                       window.location.href=authenticate
                    }else if(this.status===403){
                        updPassForm.style.color = 'black'
                        updPassForm.style.backgroundColor= '#ffb3b3'
                        updPassForm.innerHTML = this.responseText
    
                    }else if(this.status===400){
                        updPassForm.style.color = 'black'
                        updPassForm.style.backgroundColor= '#ffb3b3'
                        updPassForm.innerHTML = "New password Too Short and Weak"
                    }else{
                        updPassForm.style.color = 'black'
                        updPassForm.style.backgroundColor= '#ffb3b3'
                        updPassForm.innerHTML = "Faled to Update Password "+this.responseText
                    }
                }
            }
    
            xhttp.open('POST',post_update_password,true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.withCredentials=true
            xhttp.send('currentPassword='+ document.querySelector('#current_password').value + '&newpassword='+document.querySelector('#new_password').value +'&confnewpassword='+document.querySelector('#confirm_new_password').value +"&_csrf="+document.querySelector('#csrf').value )
        
        }
        
     

    })


}else if(currentL[3].search('checkout.html')>-1){
    
  
    animator()


   let cart_itm = document.querySelector('#cart-checkout')
   let addr_itm = document.querySelector('#delivery-address') 
   let paym_opt = document.querySelector('#paym_opt')
  

   let totalCart =document.querySelector('#cartTotal')
   
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
  let footer = document.querySelector('#footer-content')
  let navbarLarge = document.querySelector('#nav-bar-large')
    let navbarSmall = document.querySelector('#nav-bar-small')
    footer.innerHTML = footerContentScript
    navbarLarge.innerHTML=notLoggedInLargeScript
    navbarSmall.innerHTML=notLoggedInsmallScript
    
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
              navbarLarge.innerHTML=notLoggedInLargeScript
              navbarSmall.innerHTML=notLoggedInsmallScript
            }else if(this.status===200){
               
                
               preloader.style.display = 'none'
               cartwrapper.style.display= 'block'
     
             
                       if(JSON.parse(this.responseText).auth===true){
                        navbarLarge.innerHTML=LoggedInLargeScript
                        navbarSmall.innerHTML=LoggedInsmallScript
                       }else{
                        navbarLarge.innerHTML=notLoggedInLargeScript
                        navbarSmall.innerHTML=notLoggedInsmallScript
                       }
              
               //apend cart items
              let cartItemDisplayRow = document.querySelector('#cartItemDisplayRow')
         
         
              if( JSON.parse(this.responseText).cart.length>0){
                JSON.parse(this.responseText).cart.forEach((item)=>{
                    cartItemDisplayRow.innerHTML =  cartItemDisplayRow.innerHTML + '<div class=" checkoutItem w3-margin-top w3-border w3-center">\
                   \
                     \<div class="w3-hide" id="unitPriceID'+item.id+'">'+item.price+'</div>\
                     \<div class="checkouuItemDiv checkouuItemDivzero w3-center cart-item-desc">\
                        \ <img src="'+item.img+'" alt="s2"><br>\
                        \ <span class="cart-item-title w3-small">'+item.name+' </span> <br>\
                         \<span class="w3-small w3-text-green" style="font-weight: bold;">KES '+item.price+'</span>\
                     \</div>\
                     \<div class="checkouuItemDiv checkouuItemDivone quantity-contr  cart-item-desc">\
                     \<div class="addQuantity  ID'+item.id+'" ><i class="fas fa-plus-square" ></i><br></div>\
                         \<input type="text"  disabled class="w3-input w3-center" value="'+item.quantity+'"   name="quantity" min="1" step="1" id="ID'+item.id+'">\
                     \<div class="decQuantity ID'+item.id+'"><i class="fas fa-minus-square "  ></i></div>  \
                     \</div>\
                     \<div class="del-contr checkouuItemDivtwo checkouuItemDiv cart-item-desc">\
                     \<div class="ID'+item.id+'  del_ico" ><i class="fas  delete-icon fa-trash w3-center"></i></div>\
                     \</div>\
                     \
                     \<div class="checkouuItemDiv checkouuItemDivthree prc-cont  w3-center cart-item-desc">\
                         \<span class="w3-small" id="item-total-price">KES <span class="totalPriceCalc" id="priceTotalID'+item.id+'">'+item.computedprice+'</span></span>'
                     '+</div></div>'
     
     
                   }) 
              }else{
               document.getElementById('cart-checkout').innerHTML = '<div style="font-weight:bold;width:95%;margin-left:2.5%" class="w3-panel w3-border w3-border-gray w3-padding-32 w3-pale-yellow w3-center w3-large">You shopping cart is currently empty.</div>'
              }
           
            
                   
                 if(localStorage.cartOkay!==undefined && localStorage.cartOkay!=='null'){ //user has not okayed the cart section
                     cart_itm_prog.style.backgroundColor='palegreen'
                     cart_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Cart Verified</span> <br><i class="fas fa-check"></i>'
                 
                 }
                 if(localStorage.addressOkay!==undefined && localStorage.addressOkay!=='null'){ //user has not okayed the address section
                     addr_itm_prog.style.backgroundColor = 'palegreen'
                      addr_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Address Verified</span> <br><i class="fas fa-check"></i>'
                               
                 }
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
      
                    console.log("default address is in use")
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
                    console.log("custom address use")
                  document.cookie ='locationID='+user.LocationID+';path=/;expires=Thu,01 Jan 1999 00:00:00 UTC;' 
                  document.cookie ='locationID='+  JSON.parse(localStorage.selectedAddress).LocationID + ';path=/checkout.html;expires=Thu,01 Jan 2099 00:00:00 UTC'
                  addrItem[2].innerHTML = JSON.parse(localStorage.selectedAddress).County
                  addrItem[3].innerHTML = JSON.parse(localStorage.selectedAddress).Location
                  addrItem[4].innerHTML = JSON.parse(localStorage.selectedAddress).BOX
                  addrItem[5].innerHTML = JSON.parse(localStorage.selectedAddress).station
                  addrItem[6].innerHTML = JSON.parse(localStorage.selectedAddress).decribeLoc
                  if(JSON.parse(localStorage.selectedAddress).Recipient!=='NULL'){
                    addrItem[0].innerHTML = JSON.parse(localStorage.selectedAddress).Recipient
                  }
                  if(JSON.parse(localStorage.selectedAddress).Phone!=='NULL'){
                    addrItem[1].innerHTML= JSON.parse(localStorage.selectedAddress).Phone
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
                //   addr_itm.querySelectorAll('button')[0].innerHTML = 'Use Home/Office Address Instead' //customadddress
                //    addr_itm.querySelectorAll('button')[1].innerHTML = 'Select a different Pickup Station' //customadddress
                //  localStorage.navigationTrack = '{"from":'+'"/select-address.html",'+'"to":'+'"/checkout.html",'+'"data":"null",'+'"redirect":"/checkout.html"}'
                 
                        
                     
              }else if(JSON.parse(localStorage.navigationTrack).data==='customaddressSelected'){
                   cart_itm.style.display= 'none' ,addr_itm.style.display='block'
                
                //   addr_itm.querySelectorAll('button')[0].innerHTML = 'Select Different Personal address' //customadddress
                //   addr_itm.querySelectorAll('button')[1].innerHTML = 'Use a Pick Up station Instead' //customadddress
                // localStorage.navigationTrack = '{"from":'+'"/select-address.html",'+'"to":'+'"/checkout.html",'+'"data":"null",'+'"redirect":"/checkout.html"}'
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
           
                  }
               

                       //progress showers      
              cart_itm_prog.addEventListener('click',()=>{
                addr_itm.style.display='none' 
                paym_opt.style.display= 'none'
                cart_itm.style.display='block'
                cart_wrapper.style.scrollBehavior='smooth'
                cart_wrapper.scrollTop=0;
                
              })
              
              addr_itm_prog.addEventListener('click',()=>{
               
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
    
                    let shipmcost ;
                    try{
                        shipmcost= JSON.parse(localStorage.selectedAddress).charges
                    }catch(e){
                    
                        shipmcost=JSON.parse(document.cookie.split(';')[1].split('=')[1]).shippcharges
        
                    }
                
                    
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

              //ends here
          
        
              let eachItemTotal = document.querySelectorAll('.totalPriceCalc')
            eachItemTotal.forEach((itm)=>{
            
                totalCart.innerText= Number(totalCart.innerText)+Number(itm.innerText)

            })
            
              let addQuantity = document.querySelectorAll('.addQuantity')
              let decQuantity = document.querySelectorAll('.decQuantity') 
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
            
                     window.location.reload()
                                      

                    
                    
                })
       //update new cart items to remove the unwanted item
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
                        cartOkayBTN.innerHTML= '<span class="w3-small">Processing ...<i class="w3-spin w3-text-black fas fa-spinner"></i> </span>'
                        cartOkayBTN.style.cursor ='not-allowed'
                    }else if(this.readyState===4){
                        if(this.status===200){    
                            cartOkayBTN.style.backgroundColor= succbg
                            cartOkayBTN.style.color= 'black'
                            cartOkayBTN.innerHTML= ' <span class="w3-small">Updated Succesfully</span>'
                            cartOkayBTN.style.cursor ='Pointer'   
                       
                           
                            document.cookie ='verifiedBasket='+JSON.parse(this.responseText).basket+''
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
                        }else if(this.status==401){
                          window.location.href= authenticate
                        }else{
                            
                            cartOkayBTN.style.backgroundColor=errbg
                            cartOkayBTN.style.color= 'black'
                            cartOkayBTN.innerHTML= ' <span class="w3-small">Error : '+this.responseText+'</span>'
                            cartOkayBTN.style.cursor ='Pointer'
                            setTimeout(()=>{
                                cartOkayBTN.style.color= 'green'
                                cartOkayBTN.style.backgroundColor='white'
                                cartOkayBTN.innerHTML = '<span class="w3-small">Proceed</span>'
                            
                            },2000)

                        }
                    }
                }
                xhttp.open('POST',post_send_cart_to_backend,true)
                xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
                xhttp.withCredentials=true
               
                xhttp.send('cart='+localStorage.basketDetails+'&_csrf='+document.querySelector("#csrf").value)      //data is sent as an array  
            
             

          
              }
            })
            addressOkayBTN.addEventListener('click',function(e){
              
                //do server processing
                xhttp.onreadystatechange = function(){
                    if(this.readyState<4){
                      cartOkayBTN.style.backgroundColor= 'white'
                      cartOkayBTN.style.color= 'green'
                      cartOkayBTN.innerHTML= '<span class="w3-small">Processing ...<i class="w3-spin w3-text-black fas fa-spinner"></i> </span>'
                      cartOkayBTN.style.cursor ='not-allowed'
                    }else  if(this.readyState===4){
                      if(this.status===200){
                          document.querySelector('#csrf').value = JSON.parse(this.responseText).csrf
                         
                xhttp.onreadystatechange = function(){
                    if(this.readyState===1){
                        addressOkayBTN.innerHTML= '<span class="w3-small">Processing.Please wait <i class="w3-spin w3-text-black fas fa-spinner"></i></span>'
                        addressOkayBTN.style.cursor = 'not-allowed'
                        addressOkayBTN.style.backgroundColor= 'white'
                    }else if(this.readyState===4){
                        if(this.status===200){
                            document.cookie = 'verifiedAddress='+JSON.parse(this.responseText).address
                            document.cookie ='verifiedTotalAmount='+JSON.parse(this.responseText).encamount
                            document.cookie ='topayout='+JSON.parse(this.responseText).amount
                            //show topay 
                           // document.querySelector('#amto').value = JSON.parse(this.responseText).amount
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
                            document.querySelector('#aboutTOpay').innerHTML = JSON.parse(this.responseText).amount
                            
                        }else if(this.status===0){
                            addressOkayBTN.innerHTML = 'Net Error'
                            addressOkayBTN.style.backgroundColor = errbg
                            addressOkayBTN.style.color = 'black'
                            addressOkayBTN.style.cursor = 'pointer'
                        }else if(this.status===401){
                        window.location.href=authenticate
                        }else{
                         
                            addressOkayBTN.innerHTML = 'Error : '+ this.responseText
                            addressOkayBTN.style.backgroundColor = errbg
                            addressOkayBTN.style.color = 'black'
                            addressOkayBTN.style.cursor = 'pointer'
                        }
                    }

                }
                
                let formData  =(document.cookie).split(';').filter((item)=>{
                 
                    if(item.search('locationID')>-1){
                        
                        return item;
                    }
                    })
                
                    let cartTT =(document.cookie).split(';').filter((item)=>{
                 
                        if(item.search('cartTotal')>-1){
                            
                            return item;
                        }
                        })
                

                  cartTT= cartTT[0].split('=')[1]
               formData  = formData[0].split('=')[1]

               let addresstype 
               if(formData.slice(0,1)==='A'){
                    addresstype='PICKUPSTATION'
               }else{
                   addresstype="HOME/OFFICE"
               }
               

              
             xhttp.open('POST',post_verify_delivery_address,true)
             xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
             xhttp.withCredentials=true
             xhttp.send('addressID='+formData+"&type="+addresstype +"&totals="+cartTT)
           
                // cart_itm.style.display='none'
                // addr_itm.style.display='none' 
                // cart_wrapper.style.scrollBehavior='smooth'
                // cart_wrapper.scrollTop=0;
                // addr_itm_prog.style.backgroundColor='palegreen'
                // addr_itm_prog.innerHTML = '<span style="font-weight:bold;color:black">Address Verified</span> <br><i class="fas fa-check"></i>'
                
                // paym_opt.style.display= 'block'
  
                        }else if(this.status===401){
                                window.location.href =authenticate
                        }else{
                          cartOkayBTN.innerHTML= ' <span class="w3-small">Error : '+this.responseText+'</span>'
                        }
                    } 
                 
                }
                xhttp.open('GET',get_generate_csrf,true)
                xhttp.withCredentials=true
                xhttp.send()


            })
           }else  if(this.status===403){
            animatorEffect.applyStyle('red','inherit')
            navbarLarge.innerHTML= notLoggedInLargeScript
            navbarSmall.innerHTML=notLoggedInsmallScript
            preloader.querySelectorAll('div')[0].innerHTML= this.responseText
            animatorEffect.updateinnerhtml('Something went wrong <a class="w3-text-black" onclick="<script>window.location.reload()</script>" href="">Retry</a>')
         
         
           }else{

            animatorEffect.applyStyle('red','inherit')
            navbarLarge.innerHTML= notLoggedInLargeScript
            navbarSmall.innerHTML=notLoggedInsmallScript
            preloader.querySelectorAll('div')[0].innerHTML='Resource could not be found' 
            animatorEffect.updateinnerhtml('Something went wrong <a class="w3-text-black" onclick="<script>window.location.reload()</script>" href="">Retry</a>')
         
           }
       }   
   }
   xhttp.open('POST',get_checkout_items,true)
   xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
   xhttp.withCredentials=true
   xhttp.send('cartItems='+localStorage.basketDetails)
  
            
  
}else if(currentL[3].search('view-product.html')>-1){
    
    animator()
    let key1 ="[" 
    let key2=']'
    setInterval(()=>{
        if(localStorage.favourites.indexOf(key1)>-1 && localStorage.favourites.indexOf(key2)>-1 ){
            xhttp.onreadystatechange = function(){
                if(this.status==200){
                    localStorage.favourites=''
                    
                }
            }
           xhttp.open('POST',post_add_to_favourite,true)
           xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
           xhttp.withCredentials=true
           xhttp.send('items='+localStorage.favourites.slice(1,-1))
        }
    },1000*30)
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
             magnify_prod_image.innerHTML ="  <img id='preview-magnified' src="+value+" alt='"+this.alt+"'>" 
           
            
           
        })
    })




    document.querySelectorAll('.favicon').forEach((icon)=>{
       
        icon.addEventListener('click',function(){
        
          
            document.getElementById(this.id).innerHTML ='<i class="fas favo-icon w3-large  fa-heart"></i> Added to Favourite'
            document.getElementById(this.id).style.color ='brown'
               
          let key1 ="[" 
          let key2=']'
           if(localStorage.favourites.indexOf(key1)>-1 && localStorage.favourites.indexOf(key2)>-1 && localStorage.favourites.indexOf(this.id)===-1 ){
             
                let currentFav =  (localStorage.favourites).slice('1','-1')
                localStorage.favourites= '['+currentFav+','+this.id+']'
             
                
           }else if(localStorage.favourites.indexOf(key1)===-1 && localStorage.favourites.indexOf(key2)===-1 && localStorage.favourites.indexOf(this.id)===-1){
            localStorage.favourites = '['+this.id+']'

           }
        })
    })
}else if(currentL[3].search('account-recovery.html')>-1){
    let footer = document.querySelector('#footer-content')
    let navbarLarge = document.querySelector('#nav-bar-large')
      let navbarSmall = document.querySelector('#nav-bar-small')
      let pageloader = document.querySelector('#pageloader')
    //checck recovery token
 
    if(currentL[3].split('?').length===1 ){
        pageloader.querySelectorAll('div')[0].style.color= 'red'
        pageloader.querySelectorAll('div')[0].innerHTML = '<i class="fas fa-exclamation-triangle w3-text-red"></i><br> Invalid Recovery Token.Check Your email address and  clicking on the link provided.'
      
    }else if( currentL[3].split('?')[1].search('token')===-1 ){
        pageloader.querySelectorAll('div')[0].style.color= 'red'
        pageloader.querySelectorAll('div')[0].innerHTML = '<i class="fas fa-exclamation-triangle w3-text-red"></i><br> Recovery Token appears to be broken.Check Your email address and  clicking on the link provided.'
   
      
    }else if( currentL[3].split('?')[1].search('token')>-1 && currentL[3].split('?')[1].search('=')>-1 && currentL[3].split('?')[1].split('=')[1].length>8){
       //a token exists in url
      pageloader.style.display='none'
      document.querySelector('#page-wrapper').style.display ='block'
       let token = currentL[3].split('?')[1].split('=')[1]
      
     
         footer.innerHTML= footerContentScript
         navbarLarge.innerHTML = notLoggedInLargeScript
         navbarSmall.innerHTML =notLoggedInsmallScript
    
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
                    acc_rec_status.innerHTML ="Processing.Please wait <i class='w3-spin fas fa-spinner'></i>"
                    submitbtn.disabled= true
                }else if(this.readyState===4){
                    if(this.status===200){
                        acc_rec_status.style.backgroundColor=succbg
                        acc_rec_status.style.color= 'black'
                        try{
                            acc_rec_status.innerHTML ="Success.Password for <b><span class='w3-text-blue' style='text-decoration:underline'>"+JSON.parse(this.responseText).user+'</span></b> has been updated Succesfully.'
                    
                        }catch(e){
                            acc_rec_status.innerHTML ="Success.Password has been updated Succesfully"
                    
                        }
                       submitbtn.disabled= false
                        defaultRecoveryInputs(['input','label'])
                        setTimeout(()=>{
                            acc_rec_status.style.backgroundColor='white'
                            acc_rec_status.innerHTML = null
                            window.location.href=authenticate
                        },2000)
                       
                    }else if(this.status===0){
                        acc_rec_status.style.backgroundColor= errbg
                        acc_rec_status.style.color= 'black'
                        acc_rec_status.innerHTML ="Oops. You appear to have lost your Internet Connection.Try Again"
                        submitbtn.disabled= false
                        defaultRecoveryInputs([null,'label'])
                    }else if(this.status===401){
                        window.location.href =authenticate
                    }else if(this.status===400){
                   
                     let allerror='<span  style="text-decoration:underline">Correct the errors Below</span><br>'
                     JSON.parse(this.responseText).forEach((error)=>{
                         allerror=allerror+ '<span class="w3-tiny w3-center">'+error+'</span><br>'
                     })
                     
                     acc_rec_status.style.backgroundColor= errbg
                     acc_rec_status.style.color= 'black'
                     acc_rec_status.innerHTML = allerror
                     submitbtn.disabled= false
                     defaultRecoveryInputs([null,'label'])

                    }else{
                        acc_rec_status.style.backgroundColor= errbg
                        acc_rec_status.style.color= 'black'
                        acc_rec_status.innerHTML = this.responseText
                        submitbtn.disabled= false
                        defaultRecoveryInputs([null,'label'])
                    }
                }
            }
            xhttp.open('POST',post_reset_password,true)
            xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhttp.withCredentials=true
            xhttp.send('newpassword='+newpassword.value + '&confirmnewpassword='+confpassword.value+'&token='+token)

        }else{
            recovered_account.queryselectorAll('label').forEach((label)=>{
                label.style.color ='red'
            })
        }

    })
    }else{
        pageloader.querySelectorAll('div')[0].style.color= 'red'
        pageloader.querySelectorAll('div')[0].innerHTML = '<i class="fas fa-exclamation-triangle w3-text-red"></i><br> Invalid Recovery Token.Check Your email address and  clicking on the link provided.'
      
    }
}else if(currentL[3].search('list-products.html')>-1){
    animator()
    //update favouries everytime
    let key1 ="[" 
    let key2=']'
    setInterval(()=>{
        if(localStorage.favourites.indexOf(key1)>-1 && localStorage.favourites.indexOf(key2)>-1 ){
            xhttp.onreadystatechange = function(){
                if(this.status==200){
                    localStorage.favourites=''
                    
                }
            }
           xhttp.open('POST',post_add_to_favourite,true)
           xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
           xhttp.withCredentials=true
           xhttp.send('items='+localStorage.favourites.slice(1,-1))
        }
    },1000*30)
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
    document.querySelectorAll('.favicon').forEach((icon)=>{
       
        icon.addEventListener('click',function(){
        
            document.getElementById(this.id).innerHTML ='<i class="fas favo-icon w3-large  fa-heart"></i> Added to Favourite'
            document.getElementById(this.id).style.color ='brown'
               
          let key1 ="[" 
          let key2=']'
           if(localStorage.favourites.indexOf(key1)>-1 && localStorage.favourites.indexOf(key2)>-1 && localStorage.favourites.indexOf(this.id)===-1 ){
             
                let currentFav =  (localStorage.favourites).slice('1','-1')
                localStorage.favourites= '['+currentFav+','+this.id+']'
             
                
           }else if(localStorage.favourites.indexOf(key1)===-1 && localStorage.favourites.indexOf(key2)===-1 && localStorage.favourites.indexOf(this.id)===-1){
            localStorage.favourites = '['+this.id+']'

           }
        })
    })
}else if(currentL[3].search('select-address.html')>-1){
    animator()
    let homeofficeaddress = document.querySelector('#home-office-address')
    let address_item = document.querySelectorAll('.address-item')
   
    let footer = document.querySelector('#footer-content')
    let navbarLarge = document.querySelector('#nav-bar-large')
      let navbarSmall = document.querySelector('#nav-bar-small')
     
    navbarLarge.innerHTML  = LoggedInLargeScript
    navbarSmall.innerHTML= LoggedInsmallScript
    footer.innerHTML=footerContentScript
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
                    pickup_stationSec.querySelectorAll('label')[0].innerHTML='<span>Fetching Counties. Please wait <span class="w3-animate-fading">...</span>'   //Select Country
                  
                }else if(this.readyState===4){
                      
                   
                         if(this.status===200){
                             
                            pickup_stationSec.querySelectorAll('label')[0].style.color = 'black'
                            pickup_stationSec.querySelectorAll('label')[0].innerHTML ='Select County'   //Select Country
                           let Response = (JSON.parse(this.responseText)).counties
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
                          
                         }else if(this.status===401){
                            window.location.href=authenticate
                         }else if(this.status===403){
                            pickup_stationSec.querySelectorAll('label')[0].style.color = 'red'
                            pickup_stationSec.querySelectorAll('label')[0].innerHTML= this.responseText
                          
                         }else{
                           
                            pickup_stationSec.querySelectorAll('label')[0].style.color = 'red'
                            pickup_stationSec.querySelectorAll('label')[0].innerHTML='Resource Could not be Found . Error Code '+ this.status   //Select Country
                          
                         }
                }
            }
            xhttp.open('GET',get_populate_addresses_for_delivery+'?county=all&area=none&stations=none',true)
            xhttp.withCredentials=true
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
                                let result = JSON.parse(this.responseText).areas
                                 result.forEach((item)=>{
                                    newOptions=newOptions.concat('<option value="'+item+'">'+item.toUpperCase()+'</option>')
                                 })
                               area.disabled=false
                               area.innerHTML=newOptions
                            }else if(this.status===0){
                                areaLabel.applyStyle('red')
                                areaLabel.updateinnerhtml('Failed')
                            }else if(this.status===401){
                                window.location.href =authenticate
                            }else if(this.status===403){
                                areaLabel.applyStyle('red')
                                areaLabel.updateinnerhtml(this.responseText)
                            }else{
                                areaLabel.applyStyle('red')
                                areaLabel.updateinnerhtml(this.responseText)
                            }
                        }
                    }
                    xhttp.open('GET',get_populate_addresses_for_delivery+'?county='+this.value+'&area=all&stations=none&getstations=false',true)
                    xhttp.withCredentials=true
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
                                let result = JSON.parse(this.responseText).stations
                               
                                 result.forEach((item)=>{
                                     newOptions=newOptions.concat('<option value="'+item+'">'+item.toUpperCase()+'</option>')
                                     
                                 })
                               station.disabled=false
                               station.innerHTML=newOptions
                              
                            }else if(this.status===0){
                                stationLabel.applyStyle('red')
                                stationLabel.updateinnerhtml('Failed')
                            }else if(this.status===401){
                                window.location.href =authenticate
                            }else if(this.status===403){
                                stationLabel.applyStyle('red')
                                stationLabel.updateinnerhtml(this.responseText)
                            }else{
                                stationLabel.applyStyle('red')
                                stationLabel.updateinnerhtml(this.responseText)
                            }
                        }
                    }
                    xhttp.open('GET',get_populate_addresses_for_delivery+'?county='+document.querySelector('#select-county').value+'&area='+value+'&stations=none&query=none&getstations=true',true)
                    xhttp.withCredentials=true
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
                            stationLabel.updateinnerhtml(value + ' Station selected <i class="fas fa-check"></i>')   
                            grabBYID('#computedPricePickup').innerHTML=    'Shipment Charges :'+'<span class="w3-text-brown"> KES '+JSON.parse(this.responseText).fee + '</span>'
                          console.log(JSON.parse(this.responseText).LOCID)
                            proceedbtn.disabled= false
                             shippingcharges= JSON.parse(this.responseText).fee
                             addit_descr = JSON.parse(this.responseText).addressDesc
                             boxdetails = JSON.parse(this.responseText).BOX
                             locid =JSON.parse(this.responseText).LOCID
                            
                        }else if(this.status===401){
                            window.location.href =authenticate
                        }else{

                            stationLabel.applyStyle('red','inherit')
                            stationLabel.updateinnerhtml(this.responseText) 
                            proceedbtn.disabled= false 
                            
                        }
                    }
                    }
                    xhttp.open('GET',get_populate_addresses_for_delivery+'?county='+document.querySelector('#select-county').value+'&area='+document.querySelector('#select-area').value+'&stations='+value+'&query=price&getprice=true',true)
                    xhttp.withCredentials=true
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
                        localStorage.selectedAddress ='{"County":"'+county.value+'","Location":"'+area.value+'","station":"'+station.value+'","charges":"'+shippingcharges+'","decribeLoc":"'+addit_descr+'","BOX":"'+ boxdetails+'","LocationID":"'+locid+'","Recipient":"NULL","Phone":"NULL"}'
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
                    document.querySelector('#status').innerHTML = '<div style="width:80%;margin-left:10%" class="w3-pale-yellow w3-center">Fetching addressess <span class="w3-animate-fading">...</span></div>'
                }else if(this.readyState===4){
                          
                    if(this.status===200){
                        document.querySelector('#status').innerHTML=''
                        let available_address=  document.querySelector('#available-address')
                       
                     // apend the addresses
                     available_address.innerHTML='';
                    
                     for(let i=0;i<JSON.parse(this.responseText).length;i++){
                        available_address.innerHTML=available_address.innerHTML+'<div class="address-sel address-item" id="'+ JSON.parse(this.responseText)[i].id+'">\
                        \ <span class="title">Name  :</span> <span  class="content">'+ JSON.parse(this.responseText)[i].name+'</span>  <br>\
                        \ <span class="title">Phone :</span> <span  class="content"> '+ JSON.parse(this.responseText)[i].phone+'</span> <br>\
                        \<span class="title">County :</span> <span  class="content">'+JSON.parse(this.responseText)[i].county+'</span><br>\
                        \<span class="title">Location:</span> <span  class="content">'+JSON.parse(this.responseText)[i].location+'</span><br>\
                        \<span class="title">P.O BOX  :</span> <span  class="content">'+JSON.parse(this.responseText)[i].BOX+'</span>  <br>\
                        \<span class="title">Description :</span> <span  class="content">'+JSON.parse(this.responseText)[i].Description+'</span><br>\
                       \<button  class="w3-btn w3-hover-pale-yellow w3-hover-border-gray  w3-center w3-margin w3-round w3-border w3-border-blue select-del-address">Use this Address</button> \
                        \
                      \</div>'
                     
                     }
              
                  
                   available_address.innerHTML =available_address.innerHTML+'<div id="selectAdd" class="address-sel w3-button w3-margin-top" style="font-weight: bold;border:1px solid green;font-size: larger;background-color: lightcyan;"><div id="w3-center w3-padding-16">Add new</div></div>'
                    document.querySelector('#selectAdd').addEventListener('click',()=>{
                        window.location.href= '/address-book.html'
                    })

                        document.querySelectorAll('.address-item').forEach((item)=>{
                        
                            item.querySelector('button').addEventListener('click',function(){
                                
                              //validate the ID and set as selected address
                              
                              xhttp.onreadystatechange= function(){
                                  if(this.readyState===1){
                                    item.querySelector('button').style.backgroundColor = 'white'
                                    item.querySelector('button').innerHTML= '<span class="w3-small">Processing.Please wait <i class="w3-spin fas fa-spinner"></i> </span> '
                      
                                  }else if(this.readyState===4){
                                      if(this.status===200){
                                       
                                        item.querySelector('button').style.backgroundColor = 'white'
                                        
                                        item.querySelector('button').innerHTML ='Address Selected <i class="fas fa-check"></i>'
                                        item.querySelector('button').style.color ='green'  
                                       localStorage.navigationTrack = '{"from":'+'"/select-address.html",'+'"to":'+'"/checkout.html",'+'"data":"customaddressSelected",'+'"redirect":"/checkout.html"}'
                                    
                                        if(localStorage.selectedAddress ===undefined){
                                          localStorage.setItem('selectedAddress',null)
                                          localStorage.selectedAddress ='{"County":"'+JSON.parse(this.responseText).address.County+'","Location":"'+JSON.parse(this.responseText).address.location+'","station":"'+JSON.parse(this.responseText).address.station+'","charges":"'+JSON.parse(this.responseText).address.shippingcharges+'","decribeLoc":"'+JSON.parse(this.responseText).address.addit_descr+'","BOX":"'+ JSON.parse(this.responseText).address.BOX+'","LocationID":"'+ JSON.parse(this.responseText).address.locid+'","Recipient":"'+JSON.parse(this.responseText).address.Recipient+'","Phone":"'+JSON.parse(this.responseText).address.Phone+'"}'
                                          window.location.href = '/checkout.html'
                                        }else{
                                                localStorage.selectedAddress ='{"County":"'+JSON.parse(this.responseText).address.County+'","Location":"'+JSON.parse(this.responseText).address.location+'","station":"'+JSON.parse(this.responseText).address.station+'","charges":"'+JSON.parse(this.responseText).address.shippingcharges+'","decribeLoc":"'+JSON.parse(this.responseText).address.addit_descr+'","BOX":"'+ JSON.parse(this.responseText).address.BOX+'","LocationID":"'+ JSON.parse(this.responseText).address.locid+'","Recipient":"'+JSON.parse(this.responseText).address.Recipient+'","Phone":"'+JSON.parse(this.responseText).address.Phone+'"}'
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
                              xhttp.open('GET',get_verify_address+'?id='+this.parentNode.id)
                              xhttp.withCredentials=true
                              xhttp.send()
                    

                            })

                        })

                    }else if(this.status===0) {
                        homeofficeaddress.innerHTML = '<div style="width:90%;margin-left:5%" class="w3-pale-red w3-text-black w3-center">You seem to have lost your internet connection <span class="w3-btn" style="text-decoration:underline;font-weight:bold" onClick="<script>window.location.reload()</script>" >Retry Now</span></div>'
           
                    }else if(this.status===401){
                        window.location.href =authenticate
                    }else{

                        homeofficeaddress.innerHTML = '<div style="width:90%;margin-left:5%" class="w3-pale-red w3-text-black w3-center">Error : '+this.responseText+'</div>'
           
                    }
                }
                }
                xhttp.open('GET',get_address_book_for_checkout,true)
                xhttp.withCredentials=true
                xhttp.send() 
        }
        }else{
        window.location.href = '/checkout.html'
        }

}else if(currentL[3].search('receipt.html')>-1){
    let footer = document.querySelector('#footer-content')
  let navbarLarge = document.querySelector('#nav-bar-large')
    let navbarSmall = document.querySelector('#nav-bar-small')
    let recieptCard = document.querySelector('#recieptCard')
    let orderID = document.querySelector('#orderID')
    let orderPrice = document.querySelector('#orderPrice')
    let loaderreceipt = document.querySelector('#loader-receipt')
 
    navbarLarge.innerHTML=LoggedInLargeScript
    navbarSmall.innerHTML=LoggedInsmallScript
    let grabQuery = (window.location.href).split('?')
  
    if(grabQuery.length===2){
        let transcode =  grabQuery[1].split('=')
       
        if(transcode.length===2 && transcode[0].search('verify-code')>-1 ){
        
            xhttp.onreadystatechange = function(){
                if(this.readyState===1){

                }else if(this.readyState===4){

                    if(this.status===200){
                        
                            navbarLarge.innerHTML=LoggedInLargeScript
                            navbarSmall.innerHTML=LoggedInsmallScript
                            loaderreceipt.style.display = 'none'
                            recieptCard.style.display = 'block'
                        
                            orderID.innerHTML = JSON.parse(this.responseText).orderNO
                            orderPrice.innerHTML = JSON.parse(this.responseText).amount
                           document.querySelector('#orderlink').href = '/oders.html?q='+   JSON.parse(this.responseText).orderNO       
                        
                    }else if(this.status===0){
                       
                        loaderreceipt.innerHTML ='<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Internet Error</div>You seem to have lost your internet connection. <span style="text-decoration:underline;color:brown"  onclick="window.location.reload()" class="w3-btn">Click here to retry</span>'
                        navbarLarge.innerHTML=notLoggedInLargeScript
                        navbarSmall.innerHTML=NotLoggedInsmallScript
                    }else if(this.status===401){
                        window.location.href =authenticate
                    }else if(this.status===403){
                        navbarLarge.innerHTML=notLoggedInLargeScript
                        navbarSmall.innerHTML=NotLoggedInSmallScript
                        loaderreceipt.innerHTML = '<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Report Error</div>Error :'+this.responseText+'<div class="w3-btn" style="text-decoration:underline;color:brown"  onclick=" window.location.reload()" > Click here to retry </div>'+
                        '<br>If the problem persists <a style="text-decoration:underline;font-weight:bold;color:blue" href="">click here contact customer care</a> '      
                
                    }else{        
                        navbarLarge.innerHTML=notLoggedInLargeScript
                        navbarSmall.innerHTML=NotLoggedInSmallScript
                        loaderreceipt.innerHTML = '<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Report Error</div>Oops. We could not generate a reciept <div class="w3-btn" style="text-decoration:underline;color:brown"  onclick=" window.location.reload()" > Click here to retry </div>'+
                        '<br>If the problem persists <a style="text-decoration:underline;font-weight:bold;color:blue" href="">click here contact customer care</a> '      
                    }
                }
            } 
        xhttp.open('GET',get_generate_receipt+'?transaction='+transcode[1],true)
        xhttp.withCredentials=true
        xhttp.send()


       
        }else{
         
            loaderreceipt.innerHTML = '<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Error Generating Receipt</div>Oops. We could not generate a reciept <div class="w3-btn" style="text-decoration:underline;color:brown"  onclick=" window.location.reload()" > Click here to retry </div>'+
            '<br>If the problem persists <a style="text-decoration:underline;font-weight:bold;color:blue" href="">click here contact customer care</a> '      
       
        }
    }else{
        console.log(LoggedInLargeScript)
        navbarLarge.innerHTML=LoggedInLargeScript
        navbarSmall.innerHTML=LoggedInsmallScript
        loaderreceipt.innerHTML = '<div class="w3-pale-red w3-large w3-center w3-margin-bottom">Error Generating Report</div>Oops. We could not generate a reciept <div class="w3-btn" style="text-decoration:underline;color:brown"  onclick=" window.location.reload()" > Click here to retry </div>'+
        '<br>If the problem persists <a style="text-decoration:underline;font-weight:bold;color:blue" href="">click here contact customer care</a> '      
   
    }
   

}else{
    animator()
}