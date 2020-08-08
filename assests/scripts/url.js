
// the first word befor _ indicates the method itself i.e a POST request or a Get Request . For instance get_something indicates its a GET method
//while post_something indicates a POST method
//all response must be have appropriate status codes say 401 for unautharised in cases where a user is not logged in etc.

//subdomain routes
let defDomain= 'https://eric-works.buzz'
let authenticate = 'https://auth.eric-works.buzz/auth/'
let authcb = 'https://auth.eric-work.buzz/auth/callback/'
//get methods
let get_home_page_products = 'https://api.eric-works.buzz/homepage'  
let get_filtered_product  ='https://api.eric-works.buzz/listproducts?filter='
let get_all_products = 'https://api.eric-works.buzz/listproducts'
let get_display_specificproduct='https://api.eric-works.buzz/fetchproduct?id='
let get_loggen_in_user= 'https://api.eric-works.buzz/user'
let get_address_book ='https://api.eric-works.buzz/addresses'
let get_address_book_for_checkout ='https://api.eric-works.buzz/checkoutaddresses'
let get_personalDetails = 'https://api.eric-works.buzz/personaldetails'
let get_checkout_items ='https://api.eric-works.buzz/usercheckout'
let get_generate_csrf ='https://api.eric-works.buzz/checkoutcsrf'
let get_populate_addresses_for_delivery = 'https://api.eric-works.buzz/populate-address'
let get_custom_addresses ='https://api.eric-works.buzz/customaddresses'
let get_generate_receipt ='https://api.eric-works.buzz/generateReceipt'
let get_verify_address = 'https://api.eric-works.buzz/verifyaddress'
let get_favourites ='https://api.eric-works.buzz/favourites'
let get_orders = 'https://api.eric-works.buzz/orders'
let get_filter_oders = 'https://api.eric-works.buzz/orders?filter='
let get_verify_email ='https://api.eric-works.buzz/verifyemail'

//post methods
let post_add_user ='https://api.eric-works.buzz/register'
let post_login_user ='https://api.eric-works.buzz/loginUser'
let post_recover_account = 'https://api.eric-works.buzz/recoverAccount'
let post_set_address_as_default ='https://api.eric-works.buzz/defautaddress'
let post_delete_address = 'https://api.eric-works.buzz/deladdress'
let post_add_address ='https://api.eric-works.buzz/addaddress'
let post_login_cb ='https://api.eric-works.buzz/auth/cb/success/'
let post_edit_name= 'https://api.eric-works.buzz/editexistingdetname'
let post_edit_phone ='https://api.eric-works.buzz/editexistingdetphone'
let post_update_password ='https://api.eric-works.buzz/updatepassword'
let post_send_cart_to_backend ='https://api.eric-works.buzz/checkout'
let post_verify_delivery_address ='https://api.eric-works.buzz/addressverify'
let post_reset_password ='https://api.eric-works.buzz/resetPass'
let post_add_to_favourite ='https://api.eric-works.buzz/addtoFav'
let post_delete_favourite  ='https://api.eric-works.buzz/deleteFavourite'
let post_mpesa_online  ='https://api.eric-works.buzz/verifyMpesa'
let post_pay_on_delivery  ='https://api.eric-works.buzz/payondelivery'


 