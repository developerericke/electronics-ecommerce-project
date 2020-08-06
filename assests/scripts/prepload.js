let footer = $('#footer-content')
let navbarLarge = $('#nav-bar-large')
let navbarSmall = $('#nav-bar-small')
$(document).ready(()=>{
  
 let pageLoader = $('#pageloader') 
 let pagewrapper = $('#page-wrapper')  
 let categoriessection = $('#categories-section')
 let categoriessectionDATA = $('#categories-section ul')
let fullpageURL = window.location.href
let urlRoute = fullpageURL.split('/')[3]

//index page
if(urlRoute==='' || urlRoute.search('index.html')>-1){

     function action(){
        if(window.location.href.search('action')>-1){
            return window.location.href.split('action=')[1]
        }else{
        return null;
        }
    }
   
    let highlightbanner = $('#highlight-banner')
    let newarrivals=  $('#new-arrivals .highlight-list')
    let topdeals = $('#top-deals .highlight-list')
    $.ajax({
        method:"GET",
        xhrFields:{
         withCredentials:true
        },
        url:get_home_page_products+'?action='+action(),
        cache:false,
        credentials:true,
        success: function(data,status,xhr){
            //hide loader and display content
         if(action()==='logout'){
             window.location.href='/index.html'
         }
            pageLoader.toggleClass('w3-hide')
            pagewrapper.toggleClass('w3-hide')
            //display footer
            footer.html(footerContent)
            //display appropriate navbar
            if(data.authenticate===true){
                navbarLarge.html(LoggedInLarge)
                navbarSmall.html(LoggedInsmall)
            }else{
                navbarLarge.html(notLoggedInLarge)
                navbarSmall.html(NotLoggedInsmall)
            }   
            //display categories
    
            data.categories.forEach(element => {
                 categoriessectionDATA.append('<li style="cursor: pointer;"> <a href="view-product.html?id='+element+'">'+element+'</a></li>')
            });
            //highlight section
    
            highlightbanner.addClass('slideshow-sec');
            data.highlights.forEach(element => {
            highlightbanner.html(  highlightbanner.html()+ ' <div>\
            <a href="'+element.link+'">\
                <img src="' + element.img+'" alt="Banner Image">\
                </a>\
           </div>')
            })
            $('.slideshow-sec').slick({
                arrows:true,
                autoplay:true,
                 dots:true,
                 fade:true,
                 lazzyLoad:'progressive',
                 MobileFirst:true,
                 speed:3000,
                 arrows:false
            })
    
            //new arrivals
            data.newArrivals.forEach((item)=>{
               newarrivals.append(
              '<div class="w3-hover-pale-yellow highlight-list-item">\
               <a style="text-decoration:none" href="view-product.html?id='+item.id+'">\
               <img src="'+item.img+'" alt="'+item.name+'" >\
               </a>\
                <div class="w3-panel">\
                <span  style="color: darkslategray;cursor:pointer" id="'+item.id+'" class="favicon w3-small w3-margin-bottom"><i class="fas favo-icon w3-large  fa-heart"></i> Add to Favourites</span><br>\
                <a style="text-decoration:none;cursor:default" href="view-product.html?id='+item.id+'"> <span style="color:#3d3d29" class="w3-small item-cat-title">'+item.name+'  </span> <br>\
                    <span style="font-weight:bold;padding-top:20px;color:#008000"  class="new-price w3-margin-top w3-medium">'+item.newprice+' <sup class="w3-tiny" style="color:red;font-weight:bold"> '+item.discpc+'</sup></span><br> \
                    <span style="font-weight:bold" class="prev-price w3-small"><strike>'+item.oldprice+'</strike><br></span>\
                 </a>  \
                </div> \
           </div>')
    
            })
            data.topDeals.forEach((item)=>{
                topdeals.append(
                    '<div class="w3-hover-pale-yellow highlight-list-item">\
                    <a style="text-decoration:none" href="view-product.html?id='+item.id+'">\
                    <img src="'+item.img+'" alt="'+item.name+'" >\
                    </a>\
                     <div class="w3-panel">\
                     <span  style="color: darkslategray;cursor:pointer" id="'+item.id+'" class="favicon w3-small w3-margin-bottom"><i class="fas favo-icon w3-large  fa-heart"></i> Add to Favourites</span><br>\
                     <a style="text-decoration:none;cursor:default" href="view-product.html?id='+item.id+'"> <span style="color:#3d3d29" class="w3-small item-cat-title">'+item.name+'  </span> <br>\
                         <span style="font-weight:bold;padding-top:20px;color:#008000"  class="new-price w3-margin-top w3-medium">'+item.newprice+' <sup  class="w3-tiny" style="color:red;font-weight:bold"> '+item.discpc+'</sup></span><br> \
                         <span style="font-weight:bold" class="prev-price w3-small"><strike>'+item.oldprice+'</strike><br></span>\
                      </a>  \
                     </div> \
                </div>')
     
             })
            loadscriptjs()
    
    
    
    
         
         
    
         
    
             
        },
        error:function(xhr,status,error){
            pageLoader.toggleClass('w3-hide')
            pagewrapper.toggleClass('w3-hide')
            navbarLarge.html(notLoggedInLarge)
            navbarSmall.html(NotLoggedInsmall)
            footer.html(footerContent)
            $('#cont-sect').html('An Error Occured : '+ xhr.status).css({'font-weight':'bold','color':'red','padding-top':'5vh','text-align':'center'})
           
        }
    })
    
}else if(urlRoute.search('list-products.html')>-1){
//list products page
let productSection = $('#product-item') 
let productssectionGrab = $('#products-sectionGrab')
let filterby,keywords,fetchurl
if(urlRoute.search('filter')>-1){
  filterby = urlRoute.split('?')[1].split('&')[0].split('=')[1]
  keywords = urlRoute.split('?')[1].split('&')[1].split('=')[1] 
  fetchurl= get_filtered_product +filterby+'&keywords='+keywords 
  $('#filterbtn').html('Filtered')
  $('#keywords').attr('value',keywords)


}else{
    fetchurl=get_all_products
}


  
  $.ajax({
      method:'GET',
      xhrFields:{
        withCredentials:true
       },
      async:true,
      url:fetchurl,
      success: function(data,status,xhr){
             //hide loader and display content
             pageLoader.toggleClass('w3-hide')
             pagewrapper.toggleClass('w3-hide')
             //display footer
             footer.html(footerContent)
             //display appropriate navbar
             if(data.authenticate===true){
                 navbarLarge.html(LoggedInLarge)
                 navbarSmall.html(LoggedInsmall)
             }else{
                 navbarLarge.html(notLoggedInLarge)
                 navbarSmall.html(NotLoggedInsmall)
             }   
             //display categories
     
             data.categories.forEach(element => {
                  categoriessectionDATA.append('<li style="cursor: pointer;"> <a href="view-product.html?id='+element+'">'+element+'</a></li>')
             });

             //display products
            $('#filterby').change((e)=>{
               if(e.target.value==='price'){
                $('#keywords').attr('Placeholder','i.e 1-5000')
               }
                
            })
            $('#keywords').keydown((e)=>{
                $('#filterbtn').attr('disabled',false) 
            })
       
          
             $('.products-count').html(data.products.length + ' products found')
             if(data.products.length>0){

          
             data.products.forEach((product)=>{
 
                productssectionGrab.append('<div class="product-item product-item-grab w3-border">\
                   <a href="view-product.html?id='+product.id+'">\
                   <img src="'+product.img+'"  class="w3-margin-top" alt="A50">\
                   </a>\
                   <div class="w3-panel item-cat-overview">\
                   <span  style="color: darkslategray;cursor:pointer" id="'+product.id+'" class="favicon w3-small w3-margin-bottom"><i class="fas favo-icon w3-large  fa-heart"></i> Add to Favourites</span><br>\
                      <a style="text-decoration:none;cursor:default" href="view-product.html?id='+product.id+'">\
                      <span class="w3-small item-cat-title">'+product.name+'</span> <br>\
                      <span style="font-weight:bold;padding-top:20px;color:#008000" class="new-price w3-small">'+product.newprice+'<sup  class="w3-tiny" style="color:red;font-weight:bold"> '+product.discpc+'</sup></span><br>\
                      <span style="font-weight:bold" class="prev-price w3-small" ><strike>'+product.oldprice+'</strike><br></span>\
                      </a>\
               </div>'+
            '</div> ')
             })
            }else{
                productssectionGrab.html('<div style="width:100%" class="w3-panel w3-large w3-pale-yellow w3-text-black w3-center">No products matched your search Criteria.Try searching with more descriptive keywords</div>')
            }
           
             loadscriptjs()
             $('#resetbtn').click(()=>{
              
                 window.location.href ='/list-products.html'
             })
             let filterby= $('#filterby')
             let keywords = $('#keywords')
             $('#filterbtn').click(()=>{
                filterby.css('border','1px solid gray')
                keywords.css('border','1px solid gray')
                if(filterby.val()==='default' || filterby.val()===''){
                   filterby.css('border','2px solid red')
                }else if(keywords.val()===''){
                    keywords.css('border','2px solid red')
                }else{
                    
                  //  $('#filterbtn').html('<span>Filtering.Please wait </span><img class="loadgif-filter" src="./assests/images/826.gif" alt="loader">')
                   window.location.href = '/list-products.html?filter='+filterby.val()+'&keywords='+keywords.val()
                  
                }
            })
       
      },
      error: function(xhr,status,error){
      
            pageLoader.toggleClass('w3-hide')
            pagewrapper.toggleClass('w3-hide')
            navbarLarge.html(notLoggedInLarge)
           navbarSmall.html(NotLoggedInsmall)
            footer.html(footerContent)
            $('.products-count').html('0 products found')
            if(xhr.status===400){
                productssectionGrab.html('<div style="width:100%" class="w3-panel w3-large w3-pale-yellow w3-text-black w3-center">No products matched your search Criteria.Try searching with more descriptive keywords</div>')
                   loadscriptjs()
                   $('#resetbtn').click(()=>{
              
                    window.location.href ='/list-products.html'
                })
                let filterby= $('#filterby')
                let keywords = $('#keywords')
                $('#filterbtn').click(()=>{
                   filterby.css('border','1px solid gray')
                   keywords.css('border','1px solid gray')
                   if(filterby.val()==='default' || filterby.val()===''){
                      filterby.css('border','2px solid red')
                   }else if(keywords.val()===''){
                       keywords.css('border','2px solid red')
                   }else{
                       
                     //  $('#filterbtn').html('<span>Filtering.Please wait </span><img class="loadgif-filter" src="./assests/images/826.gif" alt="loader">')
                      window.location.href = '/list-products.html?filter='+filterby.val()+'&keywords='+keywords.val()
                     
                   }
               })
            }else{
                $('#cont-sect').html('An Error Occured :Error Code '+ xhr.status).css({'font-weight':'bold','color':'red','padding-top':'5vh','text-align':'center'})
     
            }
           
          

      }
  })

}else if(urlRoute.search('view-product.html')>-1){
    let productDescSection = $('#description-section')
   
    if(urlRoute.search('id=')>-1 ){
        if( urlRoute.split('?')[1].split('=')[1]!==undefined && urlRoute.split('?')[1].split('=')[1]!=='' && urlRoute.split('?')[1].split('=')[0]==='id'){
            let productID = urlRoute.split('?')[1].split('=')[1]
            
            $.ajax({
                method:'GET',
                xhrFields:{
                    withCredentials:true
                   },
                async:true,
                url:get_display_specificproduct+productID,
                success: function(data,status,xhr){
                   
                       //hide loader and display content
                       pageLoader.toggleClass('w3-hide')
                       pagewrapper.toggleClass('w3-hide')
                       //display footer
                       footer.html(footerContent)
                       //display appropriate navbar
                       if(data.authenticate===true){
                           navbarLarge.html(LoggedInLarge)
                           navbarSmall.html(LoggedInsmall)
                       }else{
                           navbarLarge.html(notLoggedInLarge)
                           navbarSmall.html(NotLoggedInsmall)
                       }   
                    
                       let images  ='';
                     
                        data.product.images.forEach((image)=>{
                         
                        images=images+ "<img class='image-prev' src='"+image+"'  alt='"+ data.product.title+"'></img>"
                       
                         })
                         
                   $('#product-describe').html(  
                   '<div class="w3-card-2 w3-margin-top" id="view-spes-prod">\
                  \<h4 class="w3-center" style="text-decoration: underline;font-weight: bold;">Product Description</h4>\
                   \<div class="w3-row"  id="imgs-view-prod" >\
                    \<div class="product-images w3-col s12 l2">'
                       +images+
                   ' </div>\
                    \<div  class="w3-col l10 w3-wheat" id="magnify-prod-image">\
                        \<img id="preview-magnified" src="'+data.product.images[0]+'" alt="'+data.product.title+'">\
                   \ </div>\
                  \ </div>\
                   \<div class="product-description w3-border">\
                       \<span class="prod_title w3-large">'+ data.product.title+'</span><br>\
                      \ <span class="product_price w3-large">'+ data.product.price+'</span><br>\
                     \  <span class="selling_shop w3-tiny" style="font-style:italic">Sold by <span class="w3-text-brown">'+ data.product.sellingshop+'</span></span><br>\
                     \  <div class="prod_act w3-margin-top" >\
                     \   <span  title="add to favourites" style="color: darkslategray;cursor:pointer" id="'+data.product.id+'" class="favicon w3-small w3-margin-bottom"><i class="fas favo-icon w3-large  fa-heart"></i> Add to Favourites</span><br><br> \
                     <button value='+''+ '{"itemID":"'+data.product.id+'","itemQuantity":"0"}'+''+'  class="w3-btn addtoCart w3-hover-green w3-hover-text-black  w3-white w3-border w3-border-back w3-text-green w3-small w3-center">Add to Cart <i class="fas fa-shopping-cart"></i></button>\
                        \</div>\
                      \ <div class="shipping_desc">\
                      \    <h4 style="text-decoration: underline;">Shipping Details  <i class="fas w3-margin-left fa-truck"></i></h4>\
                       \    <p>Get this product delivered to you between <span class="w3-text-brown" style="font-weight:bold;text-decoration:underline">'+ data.product.shippingDetails[1].from+'</span> and <span style="font-weight:bold;text-decoration:underline" class="w3-text-brown">'+ data.product.shippingDetails[2].to+'</span> in '+data.product.shippingDetails[0].location+' and allow upto 10 days in other Towns.</p> \
                       \</div>\
                      \ <div class="product-desc">\
                       \ <h4 style="text-decoration: underline;">Product Description</h4>\
                        \<p>\
                        '+ data.product.productDescr+'\
                        \</p>\
                          \ </div>\</div></div>')
        
                         let someItem=''
                          data.product.similar.forEach((prod)=>{
                           someItem=someItem+ '<a  class="w3-hover-grey  w3-hover-text-black similarItem" href="/view-product.html?id='+prod.id+'">\
                            \<img src="'+prod.image+'" alt="'+prod.title+'"><br>\
                            \<span style="font-weight: bold;" class="price w3-tiny">Kes '+prod.Price+'</span>\
                           \</a>'
                          })
                    
                          
                         $('#similarSection').html(someItem) 
                          loadscriptjs()
                       
                },
                error: function(xhr,status,error){
                  pageLoader.toggleClass('w3-hide')
                  pagewrapper.toggleClass('w3-hide')
                  navbarLarge.html(notLoggedInLarge)
                  navbarSmall.html(NotLoggedInsmall)
                  footer.html(footerContent)
                  if(xhr.status===404){
                    $('#product-describe').css({'color':'red','text-align':'center','text-decoration':'underline','font-weight':'bold','font-size':'smaller'}).html("Your query stirng or url contains broken or Invalid Kewords <button onClick='window.history.back()' class='w3-btn w3-small  w3-text-gray w3-round-xxlarge'>Click here to Return to Safety</button>")
                 
                  }else{
                    $('#product-describe').css({'color':'red','text-align':'center','text-decoration':'underline','font-weight':'bold'}).html("An Error Occured :Error Status "+ xhr.status+ '<br> ' +error)
                 
                  }
               
                }
            })
        }else{
            window.history.back()
        }
       
    }else{
        window.history.back()
    }
    
   
}else if(urlRoute.search('dashboard.html')>-1){
   let loader =$('#pageloader')
   let loaderContent =$('#pageloader div')
   let pageDiv = $('#page-wrapper')
    $.ajax({
        method:'GET',
        xhrFields:{
            withCredentials:true
           },
        url:get_loggen_in_user,
        success: function(data,status,xhr){
            navbarLarge.html(LoggedInLarge)
            navbarSmall.html(LoggedInsmall)
            if(xhr.status===200){
                loader.addClass('w3-hide')
                pageDiv.toggleClass('w3-hide')
                $('#username').html(data.user)
            }else if(xhr.status===403){
                   loader.addClass('w3-hide')
                pageDiv.toggleClass('w3-hide')
                $('#username').html(data.user)
            }else{
            
                loaderContent.css({"color":"red","font-weight":"bold"}).html("An error Occured <br>Error Code :: "+xhr.responseText)
            }
           
        
        },
        error:function(xhr,status,error){
            if(xhr.status===401){
                window.location.href =authenticate
            }else if(xhr.status===403){
                navbarLarge.html(LoggedInLarge)
                navbarSmall.html(LoggedInsmall)
                loader.addClass('w3-hide')
                pageDiv.toggleClass('w3-hide')
                $('#username').css({"font-size":"smaller"}).html('Hidden(Email Not Verified)')
            }else{
                loaderContent.css({"color":"red","font-weight":"bold"}).html("An error Occured <br>Error Code :: "+xhr.responseText)
            }
           
             
                
        }
    })
    footer.html(footerContent)
       
}else if(urlRoute.search('address-book.html')>-1){
    $.ajax({
        method:'GET',
        xhrFields:{
            withCredentials:true
           },
        url:get_address_book,
        success: function(data,status,xhr){
            if(xhr.status===200){
                footer.html(footerContent)
                navbarLarge.html(LoggedInLarge)
                navbarSmall.html(LoggedInsmall)
                pageLoader.toggleClass('w3-hide')
               pagewrapper.toggleClass('w3-hide')
                   
              
               $('#csrf').attr('value',data.csrf)
            
                    data.address.forEach((address)=>{
                    
                     if(address.Type==='Default'){
                       $('#avail-address').prepend(
                           '<div id="'+ address.ID+'" class="address-loc w3-card-2  w3-margin-bottom">\
                           \<div>\
                               \<span class="title">Name  :</span> <span  class="content">'+ address.Recipient+'</span>  <br>\
                               \<span class="title">Phone :</span> <span  class="content">'+ address.Phone+'</span> <br>\
                              \<span class="title">County :</span> <span  class="content">'+address.County+'</span><br>\
                              \<span class="title">Location:</span> <span  class="content">'+address.Location+'</span><br>\
                              \<span class="title">P.O BOX  :</span> <span  class="content">'+address.POBOX+' </span>  <br>\
                               \<span class="title">Description :</span> <span  class="content">'+address.Description+'</span><br>\
                              \
                           \</div>\
                            \<div  class="actbtn  w3-btn w3-border w3-pale-green w3-border">Default Selected</div>\
                            \<div class="actbtn w3-disabled  w3-btn w3-border w3-text-red w3-border">Delete Address</div>'+                    
                       '</div>'
                           ) 
                     }else{
                       $('#avail-address').append(
                           '<div id="'+ address.ID+'" class="address-loc w3-card-2  w3-margin-bottom">\
                           \<div>\
                               \<span class="title">Name  :</span> <span  class="content">'+ address.Recipient+'</span>  <br>\
                               \<span class="title">Phone :</span> <span  class="content">'+ address.Phone+'</span> <br>\
                              \<span class="title">County :</span> <span  class="content">'+address.County+'</span><br>\
                              \<span class="title">Location:</span> <span  class="content">'+address.Location+'</span><br>\
                              \<span class="title">P.O BOX  :</span> <span  class="content">'+address.POBOX+' </span>  <br>\
                               \<span class="title">Description :</span> <span  class="content">'+address.Description+'</span><br>\
                              \
                           \</div>\
                            \<div style="color:darkgreen" class="actbtn  w3-btn w3-border defSelect w3-border">Set Default</div>\
                            \<div class="actbtn delAddress  w3-btn w3-border w3-text-red w3-border">Delete Address</div>'+                    
                       '</div>'
                           )
                     }
                     
                    })
                    $('#avail-address').append('<div id="AddrNA" class="address-loc w3-card-2  w3-hover-pale-yellow w3-margin-bottom">'+       
                    '<div class="w3-large">Add New</div></div>' ) 
                    $('#AddrNA').click(()=>
                    $('#new-address').toggle(250,()=>{
                     $('#new-address #close').click(()=>{
                       
                         $('#new-address').hide()
                     })
                    }))
                    const scriptsrc =  document.createElement('script')
                    scriptsrc.setAttribute('type','text/javascript')
                    scriptsrc.setAttribute('src','./assests/scripts/script.js?_r='+Math.random()+Math.pow(10,10).toString(2))
                    scriptsrc.setAttribute('data-name','myscript')
                    $('head').append(scriptsrc)
            }else if(xhr.status===401){
                window.location.href =authenticate

            }else{
                $('#pageloader div').css({'color':'red'}).html('An error Occured.<br> Error Code :'+ xhr.responseText)
            }
            
                 
             
        },
        error:function(xhr,status,error){
         
         
             if(xhr.status===401){
               window.location.href =authenticate
             }else{
              $('#pageloader div').css({'color':'red'}).html('An error Occured.<br> Error Code : '+ xhr.responseText)
             }
        }
    })

}else if(urlRoute.search('personal-details.html')>-1){
    $.ajax({
        method:'GET',
        xhrFields:{
            withCredentials:true
           },
        url:get_personalDetails,
        success: function(data,status,xhr){
            if(xhr.status===200){
                footer.html(footerContent)
                navbarLarge.html(LoggedInLarge)
                navbarSmall.html(LoggedInsmall)
                pageLoader.toggleClass('w3-hide')
               pagewrapper.toggleClass('w3-hide')
                   
                  
                 $('#currentName').attr('value',data.name)
                 $('#currentPhone').attr('value',data.phone)
                 $('#csrf').attr('value',data.csrf)
                    const scriptsrc =  document.createElement('script')
                    scriptsrc.setAttribute('type','text/javascript')
                    scriptsrc.setAttribute('src','./assests/scripts/script.js?_r='+Math.random()+Math.pow(10,10).toString(2))
                    scriptsrc.setAttribute('data-name','myscript')
                    $('head').append(scriptsrc)
            }else  if(xhr.status===401){
                window.location.href =authenticate
            }else{
                $('#pageloader div').css({'color':'red'}).html('An error Occured.<br> Error Code : '+ xhr.responseText)
            }
            
                 
             
        },
        error:function(xhr,status,error){
         
             if(xhr.status===401){
               window.location.href =authenticate
             }else{
                $('#pageloader div').css({'color':'red'}).html('An error Occured.<br> Error Code : '+ xhr.responseText)
             }
        }
    })

}

    

function loadscriptjs(){
   

    const scriptsrc =  document.createElement('script')
    scriptsrc.setAttribute('type','text/javascript')
    scriptsrc.setAttribute('src','./assests/scripts/script.js?_r='+Math.random()+Math.pow(10,10).toString(2))
    scriptsrc.setAttribute('data-name','myscript')
    $('#scriptsAll').append(scriptsrc)
}
function reloadscriptjs(){
   if(document.querySelector('#myscript')!==null){
    document.querySelector('#scriptsAll').removeChild(document.querySelector('#myscript'))
    
   }
    
  
}


    



})
let footerContent, LoggedInsmall ,NotLoggedInsmall,LoggedInLarge,notLoggedInLarge;
footerContent = ' <ul style="list-style-type: none;padding: 0px;">\
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
notLoggedInLarge = ''+
'<a href="/index.html"><div id="home-icon" class="w3-col s5 m4 l4">'+
    '<img src="./assests/images/home-icon.jpg" class="w3-round-large" alt="Home Icon">\
</div></a>\
<div id="search-section" class="w3-col s7 m8 l4 ">\
    <form action="#" method="get">\
        <input placeholder="Search ..." class="w3-round-xxlarge w3-input w3-border w3-border-bottom  " type="search" name="searchKeywaords" id="serachBar">\
    </form>\
</div>\
 <div id="account-actions" class="l4 w3-col w3-round-xlarge">\
    <ul id="account-actions-ul">\
      <a href="/checkout.html"> <li  class="nav-icon"> <i class="fas w3-text-green fa-shopping-cart"></i>\
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
LoggedInLarge = ''+
'<a href="/index.html"><div id="home-icon" class="w3-col s5 m4 l4">'+
    '<img src="./assests/images/home-icon.jpg" class="w3-round-large" alt="Home Icon">\
</div></a>\
<div id="search-section" class="w3-col s7 m8 l4 ">\
    <form action="#" method="get">\
        <input placeholder="Search ..." class="w3-round-xxlarge w3-input w3-border w3-border-bottom  " type="search" name="searchKeywaords" id="serachBar">\
    </form>\
</div>\
 <div id="account-actions" class="l4 w3-col w3-round-xlarge">\
    <ul id="account-actions-ul">\
      <a href="/checkout.html"> <li  class="nav-icon"> <i class="fas w3-text-green fa-shopping-cart"></i>\
            <sup style="font-weight: bold;" class="basket_status w3-text-brown"></sup>\
            <ul><li class="shop_basket"><span class="w3-small">Cart</span></li>\
            </ul>\
           \
        </li>\
\</a>\
       <a href="/dashboard.html"> <li class="nav-icon">    <i class="fas fa-user-check"></i>\
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
NotLoggedInsmall =' <div class="w3-row" id="nav-bar-small">\
<a id="small-home-link" href="index.html"><div class="w3-col s3">Home<br><i  class="fas fa-home"></i> </div></a>\
<a id="small-cart-link" href="/checkout.html"><div class="w3-col s3 shop_basket">Cart <br><i class="fas w3-text-green fa-shopping-cart"></i><sup  style="font-weight: bolder;" class="basket_status w3-text-brown"></sup> </div></a>\
<a href="support.html"><div class="w3-col s3">Support <br><i class="fas fa-headset"></i> </div></a>\
<a  id="small-dashboard-link" href="'+authenticate+'"><div class="w3-col s3">My Account <br><i class="fas fa-user"></i></div></a>\
\
</div>'

LoggedInsmall =' <div class="w3-row" id="nav-bar-small">\
<a id="small-home-link" href="index.html"><div class="w3-col s3">Home<br><i  class="fas fa-home"></i> </div></a>\
<a id="small-cart-link" href="checkout.html"><div class="w3-col s3 shop_basket">Cart <br><i class="fas w3-text-green fa-shopping-cart"></i><sup  style="font-weight: bolder;" class="basket_status w3-text-brown"></sup> </div></a>\
<a href="support.html"><div class="w3-col s3">Support <br><i class="fas fa-headset"></i> </div></a>\
<a id="small-dashboard-link" href="dashboard.html"><div class="w3-col s3">My Account <br><i class="fas fa-user"></i></div></a>\
\
</div>'
