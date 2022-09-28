// Get crypto data
const getData = async () => {
    const accessKey = "350971061a2cdedabae11fd2775bd7b2";
    const desiredCryptos = ["BTC", "ETH", "USDT", "TRUMP", "BNB", "DRGN", "XRP", "ADA", "SMART", "DOGE"];
    let response = await fetch(`http://api.coinlayer.com/api/live?access_key=${accessKey}`);
    let data = await response.json();
    return data;
}

// Create constants to hold DOM elements
const DOMElements = {
    cryptoList : ".crypto-card-div"
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

// FUnctions to load data and display the HTML
const loadData = async () => {
    const cryptos = await getData();
    let cryptoList = cryptos['rates'];
    for (const crypto in cryptoList) {
        createList(crypto, cryptoList[crypto]);
        console.log(`crypto: ${crypto} and rate: ${cryptoList[crypto]}`)
    }
}

const clearData = () => {
    document.querySelector(DOMElements.cryptoList).innerHTML = '';
}

loadData();