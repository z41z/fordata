# ForData

Easy data to handle by prototype.

## Install

``` node
  npm i fordata //or yarn add fordata
```

## CDN

``` js
  <script src="https://unpkg.com/fordata/dist/index.min.js"></script>
```

### Usage

- #### Tree
``` js
const { Tree } = require("fordata")
new Tree({
  id: 'id',
  parentId: 'pid',
  label: 'name',
  children: 'child'
})
let tree = [{
  name: '-一级 1',
  id: '一级 1',
  z: 1,
  child: [{
    name: '-二级 1-1',
    id: '二级 1-1',
    z: 3,
    child: [{
      name: '-三级 1-1-1',
      id: '三级 1-1-1',
      z: 2
    }]
  }]
}, {
  name: '-一级 2',
  id: '一级 2',
  child: [{
    name: '-二级 2-1',
    id: '二级 2-1',
    child: [{
      name: '-三级 2-1-1',
      id: '三级 2-1-1'
    }]
  }, {
    name: '-二级 2-2',
    id: '二级 2-2',
    child: [{
      name: '-三级 2-2-1',
      id: '三级 2-2-1'
    }]
  }]
}, {
  name: '-一级 3',
  id: '一级 3',
  child: [{
    name: '-二级 3-1',
    id: '二级 3-1',
    child: [{
      name: '-三级 3-1-1',
      id: '三级 3-1-1'
    }]
  }, {
    name: '-二级 3-2',
    id: '二级 3-2',
    child: [{
      name: '-三级 3-2-1',
      id: '三级 3-2-1'
    }]
  }]
}]
```

* toArray(parentId)
  * {String|Number} parentId

  ``` js
    tree.toArray()
  ```

* toTree(parentId)
  * {String|Number} parentId

  ``` js
    tree.toArray().toTree()
  ```

* findPath(id)
  * {String|Number} id `required`

  ``` js
    tree.findPath('三级 3-1-1')
  ```

* findChildren(id)
  * {String|Number} id `required`

  ``` js
    tree.findPath('一级 3')
  ```

- #### DateTime

``` js
const { DateTime } = require("fordata")
new DateTime()
```

  - ##### format()
  ``` js
    new Date().format('yyyy-MM-dd hh:mm:ss')
    // 2023-07-29 11:48:17
  ```
  - ##### prev()
     - {Number} timestamp  
    ``` js
      new Date().prev(1e3 * 60 * 60 * 24)
      // 2023-07-28 11:48:17
    ```
  - ##### prevDay()
    - {Object} options
    - {Number} options.day
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().prevDay({ day: 5 })
      // 2023-07-24 11:48:17
      new Date().prevDay({ day: 5, isShowAll: true })
      // [
      //   '2023-07-24 11:48:17',
      //   '2023-07-25 11:48:17',
      //   '2023-07-26 11:48:17',
      //   '2023-07-27 11:48:17',
      //   '2023-07-28 11:48:17' 
      // ]
      new Date().prevDay({ day: 5, isShowAll: true, includeCurrent: true })
      // [
      //   '2023-07-25 11:48:17',
      //   '2023-07-26 11:48:17',
      //   '2023-07-27 11:48:17',
      //   '2023-07-28 11:48:17',
      //   '2023-07-29 11:48:17'
      // ]
    ```
  - ##### prevMonth()
    - {Object} options
    - {Number} options.month
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().prevMonth({ month: 5, includeCurrent: false, isShowAll: true })
      // [
      // '2023-08-31 14:57:02',
      // '2023-09-30 14:57:02',
      // '2023-10-31 14:57:02',
      // '2023-11-30 14:57:02',
      // '2023-12-31 14:57:02'
      // ]
    ```
  - ##### prevYear()
    - {Object} options
    - {Number} options.year
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().prevYear({ year: 5, includeCurrent: false, isShowAll: true  })
      // [
      // '2018-07-29 14:57:57',
      // '2019-07-29 14:57:57',
      // '2020-07-29 14:57:57',
      // '2021-07-29 14:57:57',
      // '2022-07-29 14:57:57'
      // ]
    ```
  - ##### next()
    - {Number} timestamp  
    ``` js
      new Date().next(1e3 * 60 * 60 * 24)
      // 2023-07-30 14:58:50
    ```
  - ##### nextDay()
    - {Object} options
    - {Number} options.day
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextDay({ day: 5 })
      // 2023-08-03 14:59:09
      new Date().nextDay({ day: 5, isShowAll: true })
      // [
      //  '2023-07-30 14:59:28',
      //  '2023-07-31 14:59:28',
      //  '2023-08-01 14:59:28',
      //  '2023-08-02 14:59:28',
      //  '2023-08-03 14:59:28'
      // ]
      new Date().nextDay({ day: 5, isShowAll: true, includeCurrent: true })
      //[
      //  '2023-07-29 15:00:46',
      //  '2023-07-30 15:00:46',
      //  '2023-07-31 15:00:46',
      //  '2023-08-01 15:00:46',
      //  '2023-08-02 15:00:46'
      //]
    ```
  - ##### nextMonth()
    - {Object} options
    - {Number} options.month
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextMonth({ month: 5, includeCurrent: false, isShowAll: true })
      //[
      //  '2023-08-31 15:01:24',
      //  '2023-09-30 15:01:24',
      //  '2023-10-31 15:01:24',
      //  '2023-11-30 15:01:24',
      //  '2023-12-31 15:01:24'
      //]
    ```
  - ##### nextYear()
    - {Object} options
    - {Number} options.year
    - {Boolean} options.isShowAll = false
    - {Boolean} options.includeCurrent = false
    ``` js
      new Date().nextYear({ year: 5, includeCurrent: false, isShowAll: true  })
      //[
      //  '2023-07-29 15:01:53',
      //  '2024-07-29 15:01:53',
      //  '2025-07-29 15:01:53',
      //  '2026-07-29 15:01:53',
      //  '2027-07-29 15:01:53'
      //]
    ```
  - ##### split()
    - {Object} options
    - {Date} options.startTime
    - {Date} options.endTime
    - {Number} options.gap `milliseconds`
    ``` js
      datetime.split({ startTime: new Date('2022-01-01 00:00:00'), endTime: new Date('2022-01-10 23:59:59'), gap: 1e3 * 60 * 60 * 24 })
      //[
      //  '2022-01-01 00:00:00',
      //  '2022-01-02 00:00:00',
      //  '2022-01-03 00:00:00',
      //  '2022-01-04 00:00:00',
      //  '2022-01-05 00:00:00',
      //  '2022-01-06 00:00:00',
      //  '2022-01-07 00:00:00',
      //  '2022-01-08 00:00:00',
      //  '2022-01-09 00:00:00',
      //  '2022-01-10 00:00:00'
      // ]
    ```
  - ##### calc()
    - {Object} options
    - {Date} options.startTime
    - {Date} options.endTime
    - {type} options.type `type values 'year' or 'day', default is 'year'`
    - {Number} options.offset `timezone offset, default is 8 (8 is China Timezone)`
    ``` js
      datetime.calc({ startTime: new Date('2022-01-01 00:00:00'), endTime: new Date('2022-11-10 23:59:59') })
      // { year: 0, month: 10, day: 9, hour: 23, minutes: 59, seconds: 59 }
      datetime.calc({ startTime: new Date('2022-01-01 00:00:00'), endTime: new Date('2022-11-10 23:59:59') ,type : 'day'})
      // { day: 313, hour: 23, minutes: 59, seconds: 59 }
    ```
  - ##### getWeek()
    - {Array} weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    ``` js
      new Date().getWeek()
      // 星期日
      new Date().getWeek(['周日', '周一', '周二', '周三', '周四', '周五', '周六'])
      // 周日
    ```
  - ##### getRangeYear()
    ``` js
      new Date().getRangeYear()
      // { start: '2023-01-01 00:00:00', end: '2023-12-31 23:59:59' }
    ```
  - ##### getRangeMonth()
    ``` js
      new Date().getRangeMonth()
      // { start: '2023-07-01 00:00:00', end: '2023-07-31 23:59:59' }
    ```
  - ##### getRangeWeek()
    ``` js
      new Date().getRangeWeek()
      // { start: '2023-07-24 00:00:00', end: '2023-07-30 23:59:59' }
    ```  

- #### Encode
  ``` js
  const { Encode } = require("fordata")
  new Encode()
  ```
  - ##### toBase64()
  ``` js
  "test".toBase64()
  ```
  - ##### base64ToString()
  ``` js
  "dGVzdA==".toBase64()
  ```
  - ##### toEntity()
  ``` js
  "test".toEntity()
  ```
  - ##### entityToString()
  ``` js
  "&#116;&#101;&#115;&#116;".entityToString()
  ```
  - ##### encodeURL()
  ``` js
  "http://test.com".encodeURL()
  ```
  - ##### decodeURL()
  ``` js
  "http%3A%2F%2Ftest.com".decodeURL()
  ```
- #### EasyArray
  ``` js
  const { EasyArray } = require("fordata")
  new EasyArray()
  ```
  - ##### create()
  ``` js
  new Array.create(5, (i) => i + 1)
  ```
  - ##### asc()
  ``` js
  [1, 2, 3, 4, 5, 1, 3, 4].asc()
  [{ a: 1 }, { b: 2 }, { a: 2 }, { a: 3 }, { a: 1 }, { b: 2 }, { b: 1 }, { c: 1 }].asc('a')
  ```
  - ##### desc()
  ``` js
  [1, 2, 3, 4, 5, 1, 3, 4].desc()
  [{ a: 1 }, { b: 2 }, { a: 2 }, { a: 3 }, { a: 1 }, { b: 2 }, { b: 1 }, { c: 1 }].desc('a')
  ```
  - ##### sum()
  ``` js
  [1, 2, 3, 4, 5, 1, 3, 4].sum()
  [{ a: 1 }, { b: 2 }, { a: 2 }, { a: 3 }, { a: 1 }, { b: 2 }, { b: 1 }, { c: 1 }].sum('a')
  ```
  - ##### unique()
  ``` js
  [1, 2, 3, 4, 5, 1, 3, 4].unique()
  [{ a: 1 }, { b: 2 }, { a: 2 }, { a: 3 }, { a: 1 }, { b: 2 }, { b: 1 }, { c: 1 }].unique('a')
  ```
  - ##### groupByLength()
  ``` js
  [1, 2, 3, 4, 5, 1, 3, 4].groupByLength(2)
  ```
  - ##### groupByName()
  ``` js
  [{ a: 1 }, { b: 2 }, { a: 2 }, { a: 3 }, { a: 1 }, { b: 2 }, { b: 1 }, { c: 1 }].groupByName('a')
  ```