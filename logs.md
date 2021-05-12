# Lasia UI 开发日志

## 2021.05.01

针对于 `Button` 组件，新增了原来缺少的 _onClick_ 事件，同时新增了 `Input` 组件。

- Button：

  - Feature：

    新增 _onClick_ 事件，用户可以使用 `@onClick` 获取点击事件。

    ```html
    <ls-button @onClick="handleClick">Hi Lasia</ls-button>
    <script>
      onClick(event) {
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
      export default {
        data(){
          value:'',
        }
      }
    </script>
    ```

## 2021.05.03

新增 `Card` 组件，作为同风格容器

- Card：

  - Feature：

    新增 `Card` 组件。

## 2021.05.07

新增 `Toggle` 组件，用于选项的勾选。

- Toggle：

  - Feature：

    新增 `Toggle` 组件。

## 2021.05.08

新增 `Switch` 组件，类似开关按钮。修复 `Toggle` 组件未定义 _onChange_ 回调事件。

- Toggle：

  - Fix：

    修复未定义 _onChange_ 回调事件。

- Switch：

  - Feature：

    新增 `Switch` 组件。

## 2021.05.11

新增 `Progress` 组件，用于展示工作进度。

- Progress：

  - Feature：

    新增 `Progress` 组件

    ```html
    <ls-progress :percentage="value"></ls-progress>
    <script>
      export default {
        data(){
          value:15,
        }
      }
    </script>
    ```

## 2021.05.12

新增 `Checkbox` 组件，用于选项勾选。

- Checkbox：

  - Feature：

    新增 `Checkbox` 组件。

    ```html
    <ls-checkbox v-model="values"></ls-checkbox>
    <script>
      export default {
        data() {
          values: false;
        },
      };
    </script>
    ```
