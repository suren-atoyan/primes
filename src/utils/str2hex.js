const buf2hex = buffer => Array.prototype.map.call(
  new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)
).join('');

const str2buf = str => new TextEncoder().encode(str);

const str2hex = str => buf2hex(str2buf(str));

export default str2hex;
