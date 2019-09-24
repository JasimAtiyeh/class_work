export default class DOMNodeCollection {
  constructor(array) {
    this.nodes = array;
    this.firstElement = this.nodes[0];
  }

  html(string) {
    if (string != undefined) {
      this.each(string => {
        node.innerHTML = string;
      });
      return this.nodes;
    } else {
      return this.firstElement.innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(content) {
    this.each(node => {
      if (content instanceof DOMNodeCollection) {
        content.each(inputNode => node.appendChild(inputNode));
      } else if (content instanceof Element) {

      } else {
        node.innerHTML += content;
      }
    });
    return this.nodes;
  }

  each(callback) {
    this.nodes.forEach(ele => callback(ele));
  }

  attr(attrName, value) {
    if (value === undefined) {
      return this.firstElement.getAttribute(attrName);
    } else {
      this.each(node => node.setAttribute(attrName, value));
    }
  }

  addClass(className) {
    this.each(node => node.classList.add(className));
  }

  removeClass(className) {
    this.each(node => node.classList.remove(className));
  }

  children() {
    let childArr = [];
    this.each(node => childArr.push(node.children));
    return new DOMNodeCollection(childArr);
  }
  
  parent() {
    let parentArr = [];
    this.each(node => parentArr.push(node.parentElement));
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let foundArr = [];
    this.each(node=> foundArr.push(node.querySelectorall(selector)));
    return new DOMNodeCollection(foundArr);
  }

  remove() {
    this.each( node => node.remove());
  }

  on(eventType, callback) {
    this.each(node => {
      node.callback = callback;
      node.addEventListener(eventType, callback);
    });
  }

  off(eventType) {
    this.each(node => node.removeEventListener(eventType, node.callback))
  }

  extend(accum, ...args) {
    args.forEach(hash => {
      for (let [key, value] of Object.entries(hash)) {
        accum[key] = value;
      }
    })
    return accum;
  }
}
