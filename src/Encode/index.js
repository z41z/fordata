module.exports = class {
  constructor() {
    String.prototype.toBase64 = this.toBase64
    String.prototype.toStr = this.toStr
    String.prototype.toEntity = this.toEntity
    String.prototype.entityToString = this.entityToString
    String.prototype.encodeURL = this.encodeURL
    String.prototype.decodeURL = this.decodeURL
  }
  // String转Base64
  toBase64() {
    return btoa(String.fromCharCode(...new TextEncoder().encode(this)))
  }
  // Base64转String
  base64ToString() {
    return new TextDecoder().decode(Uint8Array.from(atob(this), (c) => c.charCodeAt(0)))
  }
  // String转HTML实体
  toEntity() {
    let encode = [];
    for (let i = this.length - 1; i >= 0; i--) {
      encode.unshift(['&#', this[i].charCodeAt(), ';'].join(''));
    }
    return encode.join('');
  }
  // HTML实体转String
  entityToString() {
    return this.replace(/&#(\d+);/g, function(match, decode) {
      return String.fromCharCode(decode)
    })
  }
  // URL编码
  encodeURL() {
    return encodeURIComponent(this)
  }
  // URL解码
  decodeURL() {
    return decodeURIComponent(this)
  }
}