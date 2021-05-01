# Lasia UI 开发日志

## 2021.05.01

针对于 `Button` 组件，新增了原来缺少的 _onClick_ 事件，同时新增了 `Input` 组件。

- Button：

  - Feature：

    新增 _onClick_ 事件，用户可以使用 `@onClick` 获取点击事件。

    ```html
    <ls-button @onClick="handleClick">Hi Lasia</ls-button>
    <script>
      onClick(event){
        console.log(event)
      }
    </script>
    ```

- Input：

  - Feature：

    新增 `Input` 组件

    ```html
    <ls-input v-model="value"></ls-input>
    <script>
      export default{
        data(){
          value:'',
        }
      }
    </script>
    ```
