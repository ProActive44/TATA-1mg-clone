export default function navbar() {

  return ` <div id="main-nav">

    <div id="navbar-top">
        <div id="navbar-top-options1">
            <div class="logo">
                <a href="index.html">
                    <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="logo">
                </a>
            </div>  
            <div class="text_inside_first_header_row">
                <a href="product.html">MEDICINES</a>
            </div>
            <div class="text_inside_first_header_row">
                <a href="product.html">LAB TESTS<span class="reddiv">SAFE</span></a>
            </div>
            <div class="text_inside_first_header_row">
                <a href="product.html">CONSULT DOCTORS</a>
            </div>
            <div class="text_inside_first_header_row">
                <a href="product.html">COVID-19</a>
            </div>
            <div class="text_inside_first_header_row">
                <a href="product.html">AYURVEDA</a>
            </div>
            <div class="text_inside_first_header_row">
                <a href="product.html">CARE PLAN<span class="reddiv">SAVE MORE</span></a>
            </div>
        </div>
        <div id="navbar-top-options2">
            <div class="login_signup">
                <span id="login_button"><a href="login.html">Login</a></span> 
                | <span id="signup_button"><a href="signup.html">Signup</a></span>
            </div> 
            <div class="offers">
                <a>Offers</a>
            </div>
            <div class="cart_icon" id="cart_icon">
                <a href="cartPage.html">
                    <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570101941/cart-icon-rebrand_vp4k0f.svg">
                </a>
            </div>
            <div class="help">
                <a>Need Help?</a>
            </div>
        </div>
    </div>
    <div id="navbar-middle">
        <div id="navbar-middle-location">
            <i style="margin-left: 10px;" class="fa-solid fa-location-dot"></i>
            <select id="location">
                <optgroup label="TOP CITIES"></optgroup>
                <option > Enter Your City </option>
                <option value="New Delhi">New Delhi</option>
                <option value="Gurgoan">Gurgoan</option>
                <option value="mumbai">mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hydrabad">Hyderabad</option>
                <option value="Ahmdabad">Ahmdabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Indore">Indore</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Noida">Noida</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Surat">Surat</option>
                <option value="patnapatna">patna</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Bhubaneshwar">Bhubaneshwar</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Agra">Agra</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Bhubaneshwar">Bhubaneshwar</option>
                <option value="Chandigad">Chandigad</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Gurgoan">Gurgoan</option>
                <option value="Howrah">Howrah</option>
                <option value="Hydrabad">Hydrabad</option>
                <option value="Mohali">Mohali</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Nashik">Nashik</option>
            </select>
            <i class="fa-solid fa-location-crosshairs"></i>
        </div>
        <div id="navbar-middle-search" >
            <input class="search_input" type="text" placeholder="Search for Medicines and health Product">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div id="navbar-middle-quick-order">
            <div class="discount_icon">
                <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg" />
            </div>
            <div class="discount_tag">QUICK BUY! Flat 15% off on medicines*</div>
            <button class="quick-order">Quick Order</button>
        </div>
    </div>
    
    <div id="navbar-bottom">
        <div class="drop_down">Health Resource Center <i class="fa fa-angle-down" aria-hidden="true"></i>
            <div class="drop_down_content">
                <ul class="dropdown_first_heading" style="list-style-type:none">All Diseases</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">All Medicines</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Medicine by Therapeutic Class</ul>
            </div>
        </div>
        <div class="drop_down">Vitamins & Nutrition<i class="fa fa-angle-down" aria-hidden="true"></i>
            <div class="drop_down_content">
            <ul class="dropdown_first_heading" style="list-style-type:none">Vitamins & Supplements</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Multivitamins</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Vitamins A-Z</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Mineral Supplements</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Vitamin B12 & B Complex</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Nutritional Drinks</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none" >Adult Daily Nutrition</ul>
            </div>
        </div>
        <div class="drop_down">Diabetes <i class="fa fa-angle-down" aria-hidden="true"></i>
            <div class="drop_down_content">
                <ul class="dropdown_first_heading" style="list-style-type:none">Diabetes Monitoring</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Blood Glucose Monitors</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Test strips & Lancets</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Syrenges & Pens</ul>
                <ul class="dropdown_first_heading"><a style="text-decoration:none;" href="abc.html">Glucose Monitors</a></ul>
            </div>
        </div>
        <div class="drop_down">Healthcare Device <i class="fa fa-angle-down" aria-hidden="true"></i>
            <div class="drop_down_content">
                <ul class="dropdown_first_heading">Masks(N95, Surgical & More</ul>
                <ul class="dropdown_first_heading">BP Monitors</ul>
                <ul class="dropdown_first_heading"> Nebulizers & Vaporizers</ul>
            </div>
        </div>
        <div class="drop_down">Personal Care <i class="fa fa-angle-down" aria-hidden="true"></i></div>
        <div class="drop_down">Health Condition <i class="fa fa-angle-down" aria-hidden="true"></i></div>
        <div class="drop_down">Ayurveda Products <i class="fa fa-angle-down" aria-hidden="true"></i></div>
        <div class="drop_down">Homeopathy <i class="fa fa-angle-down" aria-hidden="true"></i></div>
        <div class="drop_down">Featured <i class="fa fa-angle-down" aria-hidden="true"></i>
            <div class="drop_down_content">
                <ul class="dropdown_first_heading" style="list-style-type:none">Trending Products</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Expoler Somethig New</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Buy More, Save More</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Vaccations</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Min 33% Off</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Combos</ul>
                <ul class="dropdown_first_heading" style="list-style-type:none">Deal Of The Day</ul>
            </div>
        </div>
        <div class="drop_down">Covid Essentials <i class="fa fa-angle-down" aria-hidden="true"></i>
            <div class="drop_down_content">
            <ul class="dropdown_first_heading" style="list-style-type:none">Boost Your Imunity</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Chyawanprash</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Sanitizer & Hand Wash</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Mask</ul>
            <ul class="dropdown_first_heading" style="list-style-type:none">Thermometer</ul>
            </div>
        </div>
        
    </div>
</div>`;
}
