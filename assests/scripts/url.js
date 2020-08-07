
// the first word befor _ indicates the method itself i.e a POST request or a Get Request . For instance get_something indicates its a GET method
//while post_something indicates a POST method
//all response must be have appropriate status codes say 401 for unautharised in cases where a user is not logged in etc.

//subdomain routes
let defDomain= 'http://eric-works.buzz'
let authenticate = 'http://api.eric-works.buzz/auth/'
let authcb = 'http://api.eric-works.buzz/auth/callback/'
//get methods
let get_home_page_products = 'http://api.eric-works.buzz/homepage'  
let get_filtered_product  ='http://api.eric-works.buzz/listproducts?filter='
let get_all_products = 'http://api.eric-works.buzz/listproducts'
let get_display_specificproduct='http://api.eric-works.buzz/fetchproduct?id='
let get_loggen_in_user= 'http://api.eric-works.buzz/user'
let get_address_book ='http://api.eric-works.buzz/addresses'
let get_address_book_for_checkout ='http://api.eric-works.buzz/checkoutaddresses'
let get_personalDetails = 'http://api.eric-works.buzz/personaldetails'
let get_checkout_items ='http://api.eric-works.buzz/usercheckout'
let get_generate_csrf ='http://api.eric-works.buzz/checkoutcsrf'
let get_populate_addresses_for_delivery = 'http://api.eric-works.buzz/populate-address'
let get_custom_addresses ='http://api.eric-works.buzz/customaddresses'
let get_generate_receipt ='http://api.eric-works.buzz/generateReceipt'
let get_verify_address = 'http://api.eric-works.buzz/verifyaddress'
let get_favourites ='http://api.eric-works.buzz/favourites'
let get_orders = 'http://api.eric-works.buzz/orders'
let get_filter_oders = 'http://api.eric-works.buzz/orders?filter='
let get_verify_email ='http://api.eric-works.buzz/verifyemail'

//post methods
let post_add_user ='http://auth.mydomain.com:9090/register'
let post_login_user ='http://api.eric-works.buzz/loginUser'
let post_recover_account = 'http://api.eric-works.buzz/recoverAccount'
let post_set_address_as_default ='http://api.eric-works.buzz/defautaddress'
let post_delete_address = 'http://api.eric-works.buzz/deladdress'
let post_add_address ='http://api.eric-works.buzz/addaddress'
let post_login_cb ='http://api.eric-works.buzz/auth/cb/success/'
let post_edit_name= 'http://api.eric-works.buzz/editexistingdetname'
let post_edit_phone ='http://api.eric-works.buzz/editexistingdetphone'
let post_update_password ='http://api.eric-works.buzz/updatepassword'
let post_send_cart_to_backend ='http://api.eric-works.buzz/checkout'
let post_verify_delivery_address ='http://api.eric-works.buzz/addressverify'
let post_reset_password ='http://api.eric-works.buzz/resetPass'
let post_add_to_favourite ='http://api.eric-works.buzz/addtoFav'
let post_delete_favourite  ='http://api.eric-works.buzz/deleteFavourite'
let post_mpesa_online  ='http://api.eric-works.buzz/verifyMpesa'
let post_pay_on_delivery  ='http://api.eric-works.buzz/payondelivery'


 