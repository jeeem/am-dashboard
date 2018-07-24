console.log('foo');

var cusid_ele = document.getElementsByClassName('openPopup');
console.log(cusid_ele);

function contentString() {
  return `
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col">
        <h1>Belasco</h1>
        <a href="http://thebelasco.com/rental/" target="_blank" class="mdl-button mdl-button--raised">
          Website
        </a>
        <h4>Contact</h4>
        <p>Andrew Purcell andrew@thebelasco.com</p>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <h1></h1>
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric">Neighborhood</th>
              <th class="mdl-data-table__cell--non-numeric">City</th>
              <th class="mdl-data-table__cell--non-numeric">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Downtown</td>
              <td class="mdl-data-table__cell--non-numeric">Los Angeles</td>
              <td class="mdl-data-table__cell--non-numeric">California</td>
            </tr>
          </tbody>
        </table>
        <h1></h1>
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric">Capacity</th>
              <th class="mdl-data-table__cell--non-numeric">Type</th>
              <th class="mdl-data-table__cell--non-numeric">Sq Ft/Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">1500</td>
              <td class="mdl-data-table__cell--non-numeric">Theater</td>
              <td class="mdl-data-table__cell--non-numeric">40,000+ sq ft (including additional rooms)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <h4>Notes</h4>
        <p>The Belasco Theater is a world-class multi-purpose event and entertainment complex. The theater offers a diverse set of dazzling options for your next event. Vibrant colors, ornate detailing, multiple floor plans, and state-of-the-art sound & lighting make the Belasco a logical choice for concerts.</p>
        <p>• Reconfigurable stage</p>
        <p>• Large Private Dressing Rooms</p>
        <p>• Outdoor Patio (1,150 SQFT) connected to Main Theater, could be good for VIP guests</p>
        <p>• 4 parking lots walking distance to theater​</p>
      </div>
    </div>
  `;
}
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];
    item.addEventListener('click', function() {
      console.log('click happened');
        var jPopupDemo = new jPopup({

            content: contentString()

        });
    });
}
