import { alertMessages } from '../models/message.enum';

export let getScroll = function () {
  if (window.pageYOffset != undefined) {
    return [pageXOffset, pageYOffset];
  }
  else {
    var sx, sy, d = document, r = d.documentElement, b = d.body;
    sx = r.scrollLeft || b.scrollLeft || 0;
    sy = r.scrollTop || b.scrollTop || 0;
    return [sx, sy];
  }
}

export let createMessageObj(message, type) {
  return {
    message,
    type,
    style: alertMessages[type]
  }
}

export let capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}