module.exports = class {
  constructor() {
    String.prototype.getInfoByIdCard = this.getInfoByIdCard
  }
  // 根据身份证号码获取基本信息
  getInfoByIdCard() {
    let areaCode = this.substring(0, 6)
    let year = this.substring(6, 10)
    let month = this.substring(10, 12)
    let day = this.substring(12, 14)
    let gender = this.substring(16, 17) % 2 ? 'male' : 'female'
    let age = new Date(new Date() - new Date(`${year}-${month}-${day}`)).getFullYear() - 1970
    return {
      areaCode,
      year,
      month,
      day,
      gender,
      age
    }
  }
}