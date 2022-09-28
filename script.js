// Get crypto data
const getData = async () => {
    const accessKey = "350971061a2cdedabae11fd2775bd7b2";
    const desiredCryptos = ["BTC", "ETH", "USDT", "TRUMP", "BNB", "DRGN", "XRP", "ADA", "SMART", "DOGE"];
    let response = await fetch(`http://api.coinlayer.com/api/live?access_key=${accessKey}&symbols=${desiredCryptos}`);
    let data = await response.json();
    console.log(data);
    return data;
}

// Create constants to hold DOM elements
const DOMElements = {
    cryptoList : ".crypto-list"
}

// Create the Crypto List HTML
const createList = ( name, rate ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${name}">${name} : ${rate}</a>`;
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