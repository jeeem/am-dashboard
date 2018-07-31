console.log('window._venues =', window._venues);

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

var venueImages = [
  'https://static.wixstatic.com/media/4a16bb_5aca68be651340948986b5da2356db6c~mv2.jpg',
  'https://static.wixstatic.com/media/1dfcd0_99fa24fe17a841639fc1b026aa5a0233~mv2.jpg',
  'https://static.wixstatic.com/media/4a16bb_28affb29664c4d1f847bedf8829e35cb~mv2.jpg',
  'https://static.wixstatic.com/media/4a16bb_74f97e0229fe4d40868c5a2ce43f2fc6~mv2.jpeg',
  'https://static.wixstatic.com/media/4a16bb_ac9383af930b4cc7a4f7e549ccd25a20~mv2.png',
  'https://static.wixstatic.com/media/1dfcd0_1fb8133063de4283888508594fb3b680~mv2.png',
  'https://static.wixstatic.com/media/4a16bb_74f97e0229fe4d40868c5a2ce43f2fc6~mv2.jpeg',
  'https://static.wixstatic.com/media/1dfcd0_4256ba903fcc49c1afee86eda9e98e0e~mv2.png'
];

window._venues.forEach(function(venue, index) {
  var venueCap = venue.Capacity || 500;
  var randomImage = venueImages[Math.floor(Math.random() * venueImages.length)];
  var domString = `<div id="card-${index}"
    class="card-${index} demo-card-square mdl-cell mdl-cell--4-col mdl-cell--12-col-phone mdl-card mdl-shadow--2dp">
    <div
      style="background-image: url(${randomImage})"
      class="mdl-card__title mdl-card--expand"
      style="background">
      <div class="md-title-wrapper mdl-card__actions">
        <span class="mdl-card__title-text">${venue.Title}</span>
      </div>
    </div>
    <div class="mdl-card__supporting-text">
      <span class="mdl-chip">
        <span class="mdl-chip__text">${venue.City}</span>
      </span>
      <span class="mdl-chip">
        <span class="mdl-chip__text">${venue.Neighborhood}</span>
      </span>
      <span class="mdl-chip">
        <span class="mdl-chip__text">${venue.Type}</span>
      </span>
      <span class="mdl-chip">
        <span class="mdl-chip__text">Cap ${venueCap}</span>
      </span>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a data-indexnumber=${index} class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect openPopup">
        More Info
      </a>
      <button data-indexnumber=${index} class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
        <i class="material-icons">add</i>
      </button>
    </div>
  </div>`;

  var domNode = htmlToElement(domString);
  var otherDomNode = htmlToElement(domString);
  var parentNode = document.getElementById('all-panel');
  var otherParentId = 'clubs-panel';
  if (venue.Type === 'Theater') {
    otherParentId = 'theaters-panel';
  }
  var otherParentNode = document.getElementById(otherParentId);
  parentNode.appendChild(domNode);
  otherParentNode.appendChild(otherDomNode);
})














var cusid_ele = document.getElementsByClassName('openPopup');
var add_ele = document.getElementsByClassName('mdl-button--mini-fab');

var fallbackNotes = `
<p>This venue is a world-class multi-purpose event and entertainment complex. The theater offers a diverse set of dazzling options for your next event. Vibrant colors, ornate detailing, multiple floor plans, and state-of-the-art sound & lighting make the Belasco a logical choice for concerts.</p>
<p>• Reconfigurable stage</p>
<p>• Large Private Dressing Rooms</p>
<p>• Outdoor Patio (1,150 SQFT) connected to Main Theater, could be good for VIP guests</p>
<p>• 4 parking lots walking distance to theater​</p>
`;
function contentString(venue) {
  return `
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col">
        <h1>${venue.Title}</h1>
        <a href="${venue.Link || 'http://thebelasco.com/rental/'}" target="_blank" class="mdl-button mdl-button--raised">
          Website
        </a>
        <h4>Contact</h4>
        ${venue.Contact || '<p>Andrew Purcell andrew@thebelasco.com</p>'}
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
              <td class="mdl-data-table__cell--non-numeric">${venue.Neighborhood}</td>
              <td class="mdl-data-table__cell--non-numeric">${venue.City}</td>
              <td class="mdl-data-table__cell--non-numeric">${venue.State}</td>
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
              <td class="mdl-data-table__cell--non-numeric">${venue.Capacity || 500}</td>
              <td class="mdl-data-table__cell--non-numeric">${venue.Type}</td>
              <td class="mdl-data-table__cell--non-numeric">${venue['Sq Ft'] || '40,000+ sq ft (including additional rooms)'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <h4>Notes</h4>
        ${venue.Notes || fallbackNotes}
      </div>
    </div>
  `;
}
for (var i = 0; i < cusid_ele.length; i++) {
    var item = cusid_ele[i];
    item.addEventListener('click', function(e) {
        var clickParent = e.target.parentNode;
        var jPopupDemo = new jPopup({

            content: contentString(window._venues[clickParent.dataset.indexnumber])

        });
    });
}

for (var i = 0; i < add_ele.length; i++) {
    var item = add_ele[i];
    item.addEventListener('click', function(e) {
      var parentEle = e.target.parentNode;
      if (
        typeof parentEle.dataset.indexnumber !== 'undefined'
        && !parentEle.classList.contains('mdl-button--colored')) {
        var params = new URLSearchParams(location.search);
        params.append('x', parentEle.dataset.indexnumber);
        window.history.replaceState({}, '', `${location.pathname}?${params}`);
      }
      parentEle.classList.add('mdl-button--colored');
      console.log('params', params);
    });
}

var initParams = new URLSearchParams(location.search);
var indexArray = initParams.getAll('x');
if (indexArray.length) {
  var hideTheseChildren = document.getElementById(`cardsContainer`);
  console.log(document.getElementById(`cardsContainer`));
  hideTheseChildren.classList.add('hide-these-children');
  indexArray.forEach(function(selectedIndex) {
    var showTheseNodes = document.getElementsByClassName(`card-${selectedIndex}`);
    for (var i = 0; i < showTheseNodes.length; i++) {
      var item = showTheseNodes[i];
      item.style.display = 'flex';
    }
  });
}
console.log('initParams = ', initParams);
console.log('indexArray = ', indexArray);
