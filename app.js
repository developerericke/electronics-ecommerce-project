let express = require('express')
let app = express();

const port = 9090
let bodyParser = require('body-parser')
let path = require('path')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//This file contains the server code to demonstrate the data expected as response.Note that the response must maintain the names i.e 'authentication' cannot be given another name
//NOTE that  all responses must have the respective http status code i.e 500 for internal server error among other
//You can check .send in every response i give i.e res.status(//httpstatus).send(//somedata).The some data cntains the exact format needed

app.use((req,res,next)=>{
    //here i am allowing all request from localhost:5500 .You can read more about CORs to handle its django implementation
    res.header('Access-Control-Allow-Origin','http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Headers','X-Requested-With');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Headers','*');

    next();

})
app.post('/addtoFav',(req,res)=>{
    //add some product to favourites db
    res.status(200).send()
})
//this will be what will show in categories for navigation.Handle it appropriately inside a GET method as necessary.I just defined them here for demo purpose
let categories = [{name:'All categories',link:'all.html'},{name:'Konka',link:'konka.html'},{name:'Laptops',link:'laptops.html'},{name:'Infinix',link:'infinix.html'},{name:'Mac book',link:'macbook.html'},{name:'Samsung',link:'samsung.html'},{name:'Lenovo',link:'lenovo.html'},{name:'Iphone',link:'iphone.html'},{name:'Huawei',link:'huawei.html'},{name:'Tlc',link:'tlc.html'}]
app.get('/listproducts',(req,res)=>{
//list all products.
  if(req.query.filter===undefined && req.query.keywords===undefined){
      setTimeout(()=>{
          res.status(200).send({
              authenticate:true,
              categories:categories,
              products:[{id:'2edw2',img:'./assests/images/Samsung/S9.jpg',name:"Samsung S9",newprice:"Kes 97000",oldprice:"Kes 109000"},
                  {id:'fhyr1',img:'./assests/images/Samsung/S20.jpg',name:"Samsung S20",newprice:"Kes 97000",oldprice:"Kes 109000"},
                  {id:'5yd6wb',img:'./assests/images/Samsung/A50.jpg',name:"Samsung A50",newprice:"Kes 97000",oldprice:"Kes 109000"},
                  {id:'458fj',img:'./assests/images/Iphone/Iphone X.jpg',name:"Iphone X",newprice:"Kes 97000",oldprice:"Kes 109000"},
                  {id:'28dh2',img:'./assests/images/Iphone/iphone 6.jpg',name:"Iphone 6",newprice:"Kes 97000",oldprice:"Kes 109000"},
                  {id:'17s1we',img:'./assests/images/Iphone/Iphone 11 pro.jpg',name:"Iphone 11 pro",newprice:"Kes 97000",oldprice:"Kes 109000"},
                  {id:'9yfte7',img:'./assests/images/Samsung/S20.jpg',name:"Samsung S20",newprice:"Kes 97000",oldprice:"Kes 109000"}]
          })
      },1)
  }else{
      setTimeout(()=>{
          res.status(200).send({
              authenticate:true,
              categories:categories,
              products:[{id:'2edw2',img:'./assests/images/Samsung/S9.jpg',name:"Samsung S9",newprice:"Kes 97000",oldprice:"Kes 109000"},
                  {id:'kswyr1',img:'./assests/images/Samsung/S20.jpg',name:"Samsung S20",newprice:"Kes 97000",oldprice:"Kes 109000"}
          ] })
      },1)
  }

})
app.get('/fetchproduct',(req,res)=>{

    res.status(200).send({
        authenticate:true,
        categories:categories,
        product:{id:'dyye623',title:'Tecno Spark 4'
            ,images:['./assests/images/Tecno/spark 4.jpg','./assests/images/Tecno/camonX pro.jpg','./assests/images/Tecno/Phantom 9.jpg'],
            price:'22,000',
            sellingshop:'Tecno Phones',
            shippingDetails:[{location:'  at kakamega'},{from:'Thursday 24-02-2019'},{to:'Tuesday 27-02-2019'}],
            productDescr:'Tecno is one of the best smartphones around.Get it at an affordable price from tecno-shop with a 2 year warranty'}
    })
})
app.get('/filterproducts',(req,res)=>{

    res.status(200).send(
        {authenticate:true,
        categories:categories,products: [
        {id:'917s1we',img:'./assests/images/Iphone/Iphone 11 pro.jpg',name:"Iphone 11 pro",newprice:"Kes 97000",oldprice:"Kes 109000"},
        {id:'ytfte7',img:'./assests/images/Samsung/S20.jpg',name:"Samsung S20",newprice:"Kes 97000",oldprice:"Kes 109000"}
        ]
        })
})
app.get('/homepage',(req,res)=>{
    setTimeout(()=>{
        res.status(200).send({
            authenticate:true,
            newArrivals:[{id:'2edw2',img:'./assests/images/Iphone/Iphone X.jpg',name:"Iphone X",newprice:"Kes 97000",oldprice:"Kes 109000"}],
            highlights:[{link:'product.html',img:'./assests/images/offer.jpg'},{link:'product-fuck.html',img:'./assests/images/Hp Laptop/Elitebook 840.jpg'}],
            categories:categories,
            topDeals:[{id:'hy64e',img:'./assests/images/Samsung/J7.jpg',name:"Samsung J7",newprice:"Kes 45000",oldprice:""},
                {id:'kyt43e',img:'./assests/images/Samsung/A60.jpg',name:"Samsung A60",newprice:"Kes 33000",oldprice:"37999"},
                {id:'gcrew4',img:'./assests/images/Samsung/A5.jpg',name:"Samsung A5",newprice:"Kes 21000",oldprice:""}],

        })

    },1000)
})

app.get('/',(req,res)=>{
    res.send('hey')
})
app.post('/loginUser',(req,res)=>{

    setTimeout(()=>{
        res.status(200).send()
    },10000)


})
app.get('/user',(req,res)=>{
    res.status(200).send({user:'Joe Doe',avatar:''})
})
app.post('/addUser',(req,res)=>{
    setTimeout(()=>{
        res.status(200).send()
    },2000)

})
app.post('/recoverAccount',(req,res)=>{
    setTimeout(()=>{
        res.status(200).send()
    },2000)

})
app.post('/editexistingdet',(req,res)=>{

    res.status(200).send()
})

app.post('/updateloc',(req,res)=>{


    res.status(200).send()
})
app.post('/updatepassword',(req,res)=>{
    console.log(req.body)
    setTimeout(()=>{
        res.status(401).send()
    },10000)

})
app.post('/resetPass',(req,res)=>{

    res.status(200).send()
})
app.post('/checkout',(req,res)=>{
  res.status(200).json({cartTotal:22000,VAT:543})

})
//populates checkout section
app.get('/usercheckout',(req,res)=>{

        res.status(200).json({authentication:true,
            cart:[
                {id:'2edw2',img:'./assests/images/Samsung/S9.jpg',name:"Samsung S9",newprice:"12000",oldprice:"Kes 109000",quantity: 6},
                {id:'fhyr1',img:'./assests/images/Samsung/S20.jpg',name:"Samsung S20",newprice:"35999",oldprice:"Kes 109000",quantity: 4},
                {id:'5yd6wb',img:'./assests/images/Samsung/A50.jpg',name:"Samsung A50",newprice:"72000",oldprice:"Kes 109000",quantity: 1},
                {id:'458fj',img:'./assests/images/Iphone/Iphone X.jpg',name:"Iphone X",newprice:"12500",oldprice:"Kes 109000",quantity:2},

                ],
            user:{name:'JOE DOE',phone:'+254724144002'},
            address:{shippingcharges:320,County:'Kakamega',Location:'Scheme Ndogo',BOX:'1234-ABC',Station:'N/A',locid:"123dgt32",locationDesc:'ABC Building opposite mart XYZ'}})


})
app.get('/populate-address',(req,res)=>{
    let county = req.query.county,area= req.query.area,stations=req.query.stations

    let counties_data = 'Kakamega,Kisumu,Mombasa'
    let areas_data = 'Butere,Malava,Kakamega TOWN,Chavakali'
    let stations_data ='Amalemba,Scheme,Matende,Bukhulunya'
    if(county==='all' && area==='none' && stations==='none'){
        res.json({counties:counties_data}).status(200)
    }else if(county==='all' && area!=='none' && stations==='none'){
        res.json({areas:areas_data}).status(200)
    }else if(county==='all' && area==='none' && stations!=='none' && req.query.query==='none'){

        setTimeout(()=>{
            res.status(200).json({stations:stations_data})
        },1000)

    }else if(county==='all' && area==='none' && stations!=='none' && req.query.query==='price'){

        setTimeout(()=>{
            res.status(200).json(
                {stations:stations_data,fee:150,addressDesc:'ABC Mall behind some store and booking station',BOX:'123-KK',LOCID:'1w3d4r'})
        },1000)
    }else{
        res.status(404).json({error:'not recognized'})
    }
})
app.post('/deladdress',(req,res)=>{

    res.status(200).send('success')
})
app.get('/customaddresses',(req,res)=>{
    res.status(200).json({ locs:['12wdg',"bsted",'dgdtd','ytfhu4']})

})
app.get('/personaldetails',(req,res)=>{
     res.status(200).send({name:'JOE DOE',phone:'+254712345678'})
})
app.get('/addresses',(req,res)=>{
    res.status(200).send([
        {id:'123ADRESS',name:'JOE DOE',county:'NAIROBI',location:'UMOJA',phone:'0712345678',BOX:'123-GFZ',Description:'Kakamega',default:false},
        {id:'3ADRESS',name:'JOE DOE',county:'NAIROBI',location:'UMOJA',phone:'0712345678',BOX:'123-GFZ',Description:'Kakamega',default:true},
        {id:'45ADRESS',name:'JOE DOE',county:'NAIROBI',location:'UMOJA',phone:'0712345678',BOX:'123-GFZ',Description:'Kakamega',default:false},
        {id:'223ADRESS',name:'JOE DOE',county:'NAIROBI',location:'UMOJA',phone:'0712345678',BOX:'123-GFZ',Description:'Kakamega',default:false}
    ])
})
//verify custom address
app.get('/verifyaddress',(req,res)=>{

    res.status(200).json({address:{County:'Kisumu',location:'Kisumu CBD',BOX:'120-0100',station:'N/A',shippingcharges:430,addit_descr:'MY HOME ADDRESS',locid:req.query.id}})

})
app.get('/generateReceipt',(req,res)=>{

     res.status(200).json({authentication:false,orderNO:'01YSWRE',amount:4500})
})
app.post('/mpesacheckout',(req,res)=>{

 res.status(200).json({phone:"0724144002",amount:22000,transcode:'ddytgh64'})
})
app.post('/addressverify',(req,res)=>{
    res.status(200).send({topay:25000})
})
app.post('/verifympesa',(req,res)=>{

    res.status(200).send('qwecr42251')
})
app.post('/addaddress',(req,res)=>{

    // res.status(300).send()

})
app.get('/favourites',(req,res)=>{

    setTimeout(()=>{
        res.status(200).send([{id:'10ehd',image:'./assests/images/Samsung/S2.jpg',title:'Samsung s2'},{id:'187hd',image:'./assests/images/Samsung/S2.jpg',title:'Samsung s3'},{id:'g5ehd',image:'./assests/images/Samsung/S2.jpg',title:'Samsung s4'}])
    },1000)

})
app.get('/orders',(req,res)=>{

    if(req.query.filter!==undefined ){

        res.status(200).json({authentication:true,order:
                [ {id:'7dhye',orderDate:'05/06/2020 08:56:22 am',expectedDelivery:'09/06/2020',description:'Samsung S20 2Pcs',status:'Awaiting Dispatch',deliveryDate:'N/A'}],hey:'jfjf'})
    }else{


        res.status(200).json(
        {authentication:true,
            order:[
                    {id:'7dhye',orderDate:'05/06/2020 08:56:22 am',expectedDelivery:'09/06/2020',description:'Samsung S20 2Pcs',status:'Awaiting Dispatch',deliveryDate:'N/A'},
                    {id:'yd6gs',orderDate:'07/06/2020 10:12:13 pm',expectedDelivery:'17/06/2020',description:'Iphone X pro 1Pcs',status:'In Transit',deliveryDate:'N/A'},
                    {id:'t6dy3r',orderDate:'14/06/2020 07:35:01 am',expectedDelivery:'17/06/2020',description:'Tecno Spark 1Pcs',status:'Delivered',deliveryDate:'12/05/2020'},
                    {id:'sg1sb',orderDate:'16/06/2020 09:45:32 pm',expectedDelivery:'20/06/2020',description:'Huawei P30 pro 1Pcs',status:'Fulfilled',deliveryDate:'N/A'},
                    {id:'46dhry',orderDate:'05/06/2020 11:12:02 am',expectedDelivery:'15/06/2020',description:'Lenovo Intel Celeron 500GB HDD,4GB RAM, 1Pcs',status:'In Transit',deliveryDate:'N/A'},

                ]
        })
    }




})
app.post('/payondelivery',(req,res)=>{
  if(req.body.paymentoption ==='cashOndelivery'){
      res.status(200).send('CashOnDeliveryr42251')
  }else if(req.body.paymentoption ==='MpesaOndelivery'){
      res.status(200).send('MpesaOnDeliveryr0A2435D')
  }

})

app.post('/deleteFavourite',(req,res)=>{

    res.status(200).send()
})
app.listen(port,()=>{
    console.log("Server is now  up on port: "+ port)
})