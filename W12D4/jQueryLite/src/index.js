import DOMNodeCollection from './dom_node_collection.js';

let funkArr = [];
window.$l = function (oneArg, funk) {
  if (funk !== undefined) {
    funkArr.push(funk);
    while (document.readyState !== 'loading' && funkArr.length > 0) {
      let thisFunk = funkArr.pop();
      thisFunk();
    }
  }
  if (oneArg instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(oneArg));
  } else {
    return new DOMNodeCollection(Array.from(document.querySelectorAll(oneArg)));
  }

}

window.$l.extend = function(accum, ...args) {
  args.forEach(hash => {
    for (let [key, value] of Object.entries(hash)) {
      accum[key] = value;
    }
  })
  
  return accum;
}

window.$l.ajax = function(optionsHash = {}) {
  let optionsRequest = window.$l.extend(ajaxDefaults, optionsHash);

  let xhr = new XMLHttpRequest();

  xhr.open(optionsRequest[method], optionsRequest[url]);

  xhr.onload = optionsRequest[success];

  xhr.send(optionsRequest);
}

const ajaxDefaults = {
  success: function(){console.log(200)},
  error: function() {console.log(404)},
  url: window.location,
  method:'GET',
  data: 'PlainObject',
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
}