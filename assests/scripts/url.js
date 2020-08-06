
// the first word befor _ indicates the method itself i.e a POST request or a Get Request . For instance get_something indicates its a GET method
//while post_something indicates a POST method
//all response must be have appropriate status codes say 401 for unautharised in cases where a user is not logged in etc.

//subdomain routes
let defDomain= 'http://mydomain.com:5500'
let authenticate = 'http://auth.mydomain.com:9090/auth/'
let authcb = 'http://auth.mydomain.com:9090/auth/callback/'
//get methods
let get_home_page_products = 'http://api.mydomain.com:9090/homepage'  
let get_filtered_product  ='http://api.mydomain.com:9090/listproducts?filter='
let get_all_products = 'http://api.mydomain.com:9090/listproducts'
let get_display_specificproduct='http://api.mydomain.com:9090/fetchproduct?id='
let get_loggen_in_user= 'http://api.mydomain.com:9090/user'
let get_address_book ='http://api.mydomain.com:9090/addresses'
let get_address_book_for_checkout ='http://api.mydomain.com:9090/checkoutaddresses'
let get_personalDetails = 'http://api.mydomain.com:9090/personaldetails'
let get_checkout_items ='http://api.mydomain.com:9090/usercheckout'
let get_generate_csrf ='http://api.mydomain.com:9090/checkoutcsrf'
let get_populate_addresses_for_delivery = 'http://api.mydomain.com:9090/populate-address'
let get_custom_addresses ='http://api.mydomain.com:9090/customaddresses'
let get_generate_receipt ='http://api.mydomain.com:9090/generateReceipt'
let get_verify_address = 'http://api.mydomain.com:9090/verifyaddress'
let get_favourites ='http://api.mydomain.com:9090/favourites'
let get_orders = 'http://api.mydomain.com:9090/orders'
let get_filter_oders = 'http://api.mydomain.com:9090/orders?filter='
let get_verify_email ='http://api.mydomain.com:9090/verifyemail'

//post methods
let post_add_user ='http://auth.mydomain.com:9090/register'
let post_login_user ='http://api.mydomain.com:9090/loginUser'
let post_recover_account = 'http://api.mydomain.com:9090/recoverAccount'
let post_set_address_as_default ='http://api.mydomain.com:9090/defautaddress'
let post_delete_address = 'http://api.mydomain.com:9090/deladdress'
let post_add_address ='http://api.mydomain.com:9090/addaddress'
let post_login_cb ='http://api.mydomain.com:9090/auth/cb/success/'
let post_edit_name= 'http://api.mydomain.com:9090/editexistingdetname'
let post_edit_phone ='http://api.mydomain.com:9090/editexistingdetphone'
let post_update_password ='http://api.mydomain.com:9090/updatepassword'
let post_send_cart_to_backend ='http://api.mydomain.com:9090/checkout'
let post_verify_delivery_address ='http://api.mydomain.com:9090/addressverify'
let post_reset_password ='http://api.mydomain.com:9090/resetPass'
let post_add_to_favourite ='http://api.mydomain.com:9090/addtoFav'
let post_delete_favourite  ='http://api.mydomain.com:9090/deleteFavourite'
let post_mpesa_online  ='http://api.mydomain.com:9090/verifyMpesa'
let post_pay_on_delivery  ='http://api.mydomain.com:9090/payondelivery'


 