## 我的第一个练习项目ToDoList

### 学习时遇到的问题和笔记
---
- 在进行事件响应时可以通过传递this来获得发生变化的对象
  ```javascript
  function (this)=>{}
- 通过getAttribute()获得自定义属性值
    ```javascript
    getAttribute('name')
    ```

- 通过localStorage获得本地储存的数据，储存方式为键值对,可以通过JSON.parse()和JSON.stringify()方法，将想要储存的数据在string和对象之间进行转换，方便储存。

- index为item的索引值。
    ``` javascript
    forEach((item,index) => {...})
- 在输入框进行回车时，会自动进行提交操作，进而刷新页面。可以在`<form>`元素中添加`onsubmit="return false"`来阻止提交表单。
    ```javascript
    <form onsubmit="return false">
        <input type="text" >
    </form>
- 利用控制台可以进行代码调试