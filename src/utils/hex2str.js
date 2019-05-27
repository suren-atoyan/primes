const hex2buf = hex => new Uint8Array(hex.match(/[\da-f]{2}/gi).map(h => parseInt(h, 16)));

const ab2str = buf => String.fromCharCode.apply(null, new Uint16Array(buf));

const hex2str = hex => ab2str(hex2buf(hex));

export default hex2str;
