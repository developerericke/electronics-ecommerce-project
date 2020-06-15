
// the first word befor _ indicates the method itself i.e a POST request or a Get Request . For instance get_something indicates its a GET method
//while post_something indicates a POST method
//all response must be have appropriate status codes say 401 for unautharised in cases where a user is not logged in etc.

//get methods
let get_home_page_products = 'http://localhost:9090/homepage'  
let get_filtered_product  ='http://localhost:9090/listproducts?filter='
let get_all_products = 'http://localhost:9090/listproducts'
let get_display_specificproduct='http://localhost:9090/fetchproduct?id='
let get_loggen_in_user= 'http://localhost:9090/user'
let get_address_book ='http://localhost:9090/addresses'
let get_personalDetails = 'http://localhost:9090/personaldetails'
let get_checkout_items ='http://localhost:9090/usercheckout'
let get_populate_addresses_for_delivery = 'http://localhost:9090/populate-address'
let get_custom_addresses ='http://localhost:9090/customaddresses'
let get_generate_receipt ='http://localhost:9090/generateReceipt'
let get_verify_address = 'http://localhost:9090/verifyaddress'
let get_favourites ='http://localhost:9090/favourites'

//post methods
let post_add_user ='http://localhost:9090/addUser'
let post_login_user ='http://localhost:9090/loginUser'
let post_recover_account = 'http://localhost:9090/recoverAccount'
let post_set_address_as_default ='http://localhost:9090/updateloc'
let post_delete_address = 'http://localhost:9090/deladdress'
let post_add_address ='http://localhost:9090/addaddress'
let post_edit_name= 'http://localhost:9090/editexistingdetname'
let post_edit_phone ='http://localhost:9090/editexistingdetphone'
let post_update_password ='http://localhost:9090/updatepassword'
let post_send_cart_to_backend ='http://localhost:9090/checkout'
let post_verify_delivery_address ='http://localhost:9090/addressverify'
let post_reset_password ='http://localhost:9090/resetPass'
let post_add_to_favourite ='http://localhost:9090/addtoFav'
let post_delete_favourite  ='http://localhost:9090/deleteFavourite'


 