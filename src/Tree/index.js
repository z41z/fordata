module.exports = class {
  constructor(props = {}) {
    let _this = this
    let { label = 'label', id = 'id', parentId = 'parentId', children = 'children' } = props
    this.props = {
      label,
      id,
      parentId,
      children
    }
    Array.prototype.toTree = function (parentId) {
      return _this.toTree(this, parentId)
    }
    Array.prototype.toArray = function (parentId) {
      return _this.toArray(this, parentId)
    }

    Array.prototype.findPath = function (id) {
      return _this.findPath(this.toArray(), id)
    }
    Array.prototype.findChildren = function (id) {
      return _this.findChildren(this.toArray(), id)
    }
  }
  // 数组转树形
  toTree(arr, parentId) {
    let { id, parentId: parentIdName, children: childrenName } = this.props
    const children = arr.filter(node => node[parentIdName] === parentId);
    if (!children.length) {
      return
    }
    return children.map(node => ({
      ...node,
      [childrenName]: this.toTree(arr, node[id])
    }))
  }
  // 树形转数组
  toArray(dataTree, parentId) {
    let result = []
    let { label, id, parentId: parentIdName, children } = this.props
    for (let node of dataTree) {
      let item = { ...node, [label]: node[label], [parentIdName]: parentId, [id]: node[id] }
      delete item[children]
      result.push(item)
      if (node[children]) {
        result = [...result, ...this.toArray(node[children], node[id])]
      }
    }
    return result
  }
  // 树形路径查找
  findPath(dataTree, id) {
    let result = []
    let { id: idName, parentId } = this.props
    dataTree.forEach(item => {
      if (item[idName] === id) {
        result.unshift(item)
        result = [...this.findPath(dataTree, item[parentId]), ...result]
      }
    })
    return result
  }
  // 树形children集合查找
  findChildren(dataTree, id) {
    let result = []
    let { id: idName, parentId } = this.props
    dataTree.forEach(item => {
      if (item[parentId] === id) {
        result.push(item)
        result = [...result, ...this.findChildren(dataTree, item[idName])]
      }
    })
    return result
  }
}