require ('isomorphic-fetch');

const defaultHeader = new Headers({
  'Access-Control-Allow-Origin':'*',
  'Content-Type': 'multipart/form-data'
});

const defaultOptions = {
  mode:'cors',
  header: defaultHeader,
};

const fetchCustomer = (param) => {
  var url = "http://192.168.0.101:3000/customers/check-customer?name="+param;
  const options = {...defaultOptions, method: 'GET'};
  return fetch(url, options)
  .then (function (res){
    console.log(res);
    return res.json();
  })
}

const fetchAds = () => {
  var url = "http://192.168.0.101:3000/ads/get-ads";
  const options = {...defaultOptions, method: 'GET'};
  return fetch(url, options)
  .then (function (res){
    console.log(res);
    return res.json();
  })
}

const fetchCart = (id) => {
  var url = "http://192.168.0.101:3000/carts/get-cart?cid="+id;
  const options = {...defaultOptions, method: 'GET'};
  return fetch(url, options)
  .then (function (res){
    console.log(res);
    return res.json();
  })
}

const fetchBuyAds = (aid, cid) => {
  var url = "http://192.168.0.101:3000/carts/add-to-cart?cid="+cid+"&aid="+aid+"&qty=1";
  const options = {...defaultOptions, method: 'GET'};
  return fetch(url, options)
  .then (function (res){
    console.log(res);
    return res.json();
  })
}

const fetchDeleteAdsItem = (aid, cid) => {
  var url = "http://192.168.0.101:3000/carts/delete-item-cart?cid="+cid+"&aid="+aid;
  const options = {...defaultOptions, method: 'GET'};
  return fetch(url, options)
  .then (function (res){
    console.log(res);
    return res.json();
  })
}

export default {fetchCustomer, fetchAds, fetchCart, fetchBuyAds, fetchDeleteAdsItem};
