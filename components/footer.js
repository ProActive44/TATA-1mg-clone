export default function footer(){
    return `<div id="topbar">
    <div>
      <h2>INDIA’S LARGEST HEALTHCARE PLATFORM</h2>
    </div>
    <div class="topbar-last">
      <div>
        <div class="numbers">260m+</div>
        <div class="numberDesc">Visitors</div>
      </div>
      <div>
        <div class="numbers">31m+</div>
        <div class="numberDesc">Orders Delivered</div>
      </div>
      <div>
        <div class="numbers">1800+</div>
        <div class="numberDesc">Cities</div>
      </div>
    </div>
  </div>

  <div id="centerd-line-in-footer"></div>

  <div id="download-our-app">
    <div class="get-link">Get the link to download App</div>
    <div class="enter-mobile-number-div">
      <form>
        <input
          id="phoneNumber"
          class="enter-number"
          type="tel"
          placeholder="Enter Phone Number"
          maxlength="10"
          autocomplete="off"
          pattern="[6-9]\d{9}"
          title="Please enter valid 10 digits"
        />
        <button type="submit" class="get-link">Send Link</button>
      </form>
    </div>
  </div>

  <div id="know-us-divs">
    <div class="KNOW_US">
      <h3>Know Us</h3>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Press Coverage</li>
        <li>Careers</li>
        <li>Business Partnership</li>
        <li>Become a Health Partner</li>
        <li>Corporate Governance</li>
      </ul>
    </div>

    <div class="KNOW_US">
      <h3>Our Policies</h3>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Editorial Policy</li>
        <li>Return Policy</li>
        <li>IP Policy</li>
        <li>Grievance Redressal Policy</li>
        <li>Fake Jobs and Fraud Disclaimer</li>
      </ul>
    </div>

    <div class="KNOW_US">
      <h3>Our Services</h3>
      <ul>
        <li>Order Medicines</li>
        <li>Book Lab Tests</li>
        <li>Consult a Doctor</li>
        <li>Ayurveda Articles</li>
        <li>Hindi Articles</li>
        <li>Care Plan</li>
      </ul>
    </div>

    <div class="KNOW_US">
      <h3>Connect</h3>
      <p>Social Links</p>
      <div class="social-media">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png" alt="Facebook" />
        <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-256.png" alt="Instagram" />
        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-256.png" alt="twitter" />
        <img src="https://cdn4.iconfinder.com/data/icons/socialcones/508/YouTube-256.png" alt="YouTube" />
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt="Linkedin" />
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-rounded-corners/512/Medium_rounded_cr-256.png" alt="Medium" />
      </div>
    </div>
    <div class="KNOW_US">
      <h3>Download App</h3>
      <img class="logos" src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" alt="Play Store">
      <img class="logos" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Apple Store">
    </div>
  </div>`
}