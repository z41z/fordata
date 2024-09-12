module.exports = class {
  constructor() {
    Array.prototype.create = this.create
    Array.prototype.asc = this.asc
    Array.prototype.desc = this.desc
    Array.prototype.sum = this.sum
    Array.prototype.unique = this.unique
    Array.prototype.groupByLength = this.groupByLength
    Array.prototype.groupByName = this.groupByName
    Array.prototype.groupByValue = this.groupByValue
  }
  // 创建数组
  create(length = 1, cb = () => null) {
    return Array.from({ length }, (m, n) => cb(n))
  }
  // 升序
  asc(name) {
    if (name) {
      return this.sort((m, n) => m[name] - n[name])
    }
    return this.sort((m, n) => m - n)
  }
  // 降序
  desc(name) {
    if (name) {
      return this.sort((m, n) => n[name] - m[name])
    }
    return this.sort((m, n) => n - m)
  }
  // 求和
  sum(name) {
    if (name) {
      let total = 0
      this.forEach(item => total += item[name] || 0)
      return total
    }
    return this.reduce((m, n) => {
      return +m + +n
    })
  }
  // 去重
  unique(name) {
    if (name) {
      let results = []
      this.forEach((item, index) => {
        if (!results.includes(item[name])) {
          results.push(item[name])
        } else {
          this.splice(index, 1)
        }
      })
      return this
    }
    return [...new Set(this)]
  }
  // 按长度分组
  groupByLength(length = 1) {
    let result = []
    for (let i = 0; i < Math.ceil(this.length / length); i++) {
      let tmp = JSON.parse(JSON.stringify(this))
      result.push(tmp.splice(length * i, length))
    }
    return result
  }
  // 按字段分组
  groupByName(name) {
    let result = {
      others: []
    }
    this.forEach(item => {
      if (item[name] !== undefined) {
        if (result[name]) {
          result[name].push(item)
        } else {
          result[name] = [item]
        }
      } else {
        result.others.push(item)
      }
    })
    return Object.values(result).reverse()
  }
  // 按某个key的值分组
  groupByValue(name) {
    let result = {}
    this.forEach(item => {
      if (item[name] !== undefined) {
        if (result[item[name]]) {
          result[item[name]].push(item)
        } else {
          result[item[name]] = [item]
        }
      }
    })
    return result
  }
}