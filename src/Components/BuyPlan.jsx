import React from 'react';
import "./BuyPlan.css"
function BuyPlan() {
  return (
    <div>
      <h1 className='buy-plan'>Choose your premium</h1>
      <table>
    <tr>
        <th>Plan</th>
        <th>Content</th>
        <th>Device</th>
        <th>No. of Screens</th>
        <th>Max Video Quality</th>
        <th>Max Audio Quality</th>
        <th>Price</th>
        <th>Duration</th>
        <th>Savings</th>
    </tr>
    <tr>
        <td>Premium HD</td>
        <td>Movies, Web Series, Music</td>
        <td>TV, Laptop</td>
        <td>1</td>
        <td>HD (720p)</td>
        <td>Stereo</td>
        <td>₹699</td>
        <td>12 months</td>
        <td>25% Save</td>
    </tr>
    <tr>
        <td>Premium 4k</td>
        <td>Movies, Web Series, Music</td>
        <td>TV, Laptop</td>
        <td>2</td>
        <td>FHD (1080p)</td>
        <td>Dolby 5.1</td>
        <td>₹999</td>
        <td>12 months</td>
        <td>30% Save</td>
    </tr>
    <tr>
        <td>Premium 4k</td>
        <td>Movies, Web Series, Music</td>
        <td>Mobile</td>
        <td>4</td>
        <td>UHD (2160p)</td>
        <td>Dolby Atmos</td>
        <td>₹499</td>
        <td>12 months</td>
        <td>Unlimited Downloads</td>
    </tr>
</table>

<div class="subscription-cards-container">
        <div class="subscription-card">
            <h3>Premium HD</h3>
            <p>Movies, Web Series, Music</p>
            <p>Device: TV, Laptop</p>
            <p>No. of Screens: 1</p>
            <p>Max Video Quality: HD (720p)</p>
            <p>Max Audio Quality: Stereo</p>
            <p class="price"><span>₹999</span> ₹699</p>
            <p class="duration">12 months</p>
            <p class="savings">25% Save</p>
        </div>

        <div class="subscription-card">
            <h3>Premium 4k</h3>
            <p>Movies, Web Series, Music</p>
            <p>Device: TV, Laptop</p>
            <p>No. of Screens: 2</p>
            <p>Max Video Quality: FHD (1080p)</p>
            <p>Max Audio Quality: Dolby 5.1</p>
            <p class="price"><span>₹1999</span> ₹1499</p>
            <p class="duration">12 months</p>
            <p class="savings">25% Save</p>
        </div>

        <div class="subscription-card">
            <h3>Premium 4k</h3>
            <p>Movies, Web Series, Music</p>
            <p>Device: Mobile</p>
            <p>No. of Screens: 4</p>
            <p>Max Video Quality: UHD (2160p)</p>
            <p>Max Audio Quality: Dolby Atmos</p>
            <p class="price">₹499</p>
            <p class="duration">12 months</p>
            <p class="savings">30% Save</p>
        </div>
    </div>
    </div>
  );
}

export default BuyPlan;
