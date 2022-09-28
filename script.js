// Get crypto data
const getData = async () => {
    const accessKey = "350971061a2cdedabae11fd2775bd7b2";
    let response = await fetch(`http://api.coinlayer.com/api/live?access_key=${accessKey}`);
    let data = await response.json();
    return data;
}

// Create constants to hold DOM elements
const DOMElements = {
    cryptoList : ".crypto-card-div",
    subtitle : ".subtitle"
}

// Create the Crypto List HTML
const createList = ( name, rate ) => {
    const html = `
        <div class="card col-lg-2 col-md-3 col-sm-5 bg-primary text-white">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${rate}</p>
            </div>
        </div>
    `;
    document.querySelector(DOMElements.cryptoList).insertAdjacentHTML('beforeend', html);
}

const updateSubtitle = ( count ) => {
    const html = `
        <h6 class="lead">Current rates on ${count} crypto currencies</h6>
    `;
    document.querySelector(DOMElements.subtitle).insertAdjacentHTML('beforeend', html);
}

// FUnctions to load data and display the HTML
const loadData = async () => {
    const cryptos = await getData();
    let count = 0;
    let cryptoList = cryptos['rates'];
    for (const crypto in cryptoList) {
        createList(crypto, cryptoList[crypto]);
        count ++;
    }

    updateSubtitle(count);
}

const clearData = () => {
    document.querySelector(DOMElements.cryptoList).innerHTML = '';
}

loadData();