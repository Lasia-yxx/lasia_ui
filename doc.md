# Lasia UI 组件文档

## Button

按钮组件，在页面中充当按钮的功能。

- Start：

  ```html
  <ls-button>Hi Lasia</ls-button>
  ```

- Call Event：

  - click：

    `Button` 组件提供点击事件，用户使用 `@click` 即可注册点击事件。事件返回值为点击时的 `event` 对象。

    ```html
    <ls-button @click="handleClick">Hi Lasia</ls-button>
    <script>
      export default {
        methods: {
          handleClick(event) {
            console.log(evnet); // DOM Object
          },
        },
      };
    </script>
    ```

- API：

  - disabled：

    用于控制 `Button` 组件是否被禁用，当 _disabled_ 值为 `True` 时，此时按钮无法被点击，同时 `onClick` 事件无法被触发

    ```javaScript
    // Attribute
    {
      apiName: 'disabled',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

    ```html
    <!-- Example -->
    <ls-button disabled>Hi Lasia</ls-button>
    <ls-button :disabled="isDisabled">Hi Lasia</ls-button>

    <script>
      export default {
        data() {
          return {
            isDisabled: false,
          };
        },
      };
    </script>
    ```

  - round：

    用于设置按钮是否为椭圆形边角按钮，当 _round_ 值为 `True` 时，按钮为椭圆形边角。

    ```javaScript
    // Attribute
    {
      apiName: 'round',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

    ```html
    <!-- Example -->
    <ls-button>Hi Lasia</ls-button>
    <ls-button round>Hi Lasia</ls-button>
    ```

  - size：

    用于设置按钮的大小，以适应不同风格。当 _size_ 值未指定时，为默认大小按钮。

    ```javaScript
    // Attribute
    {
      apiName:'size',
      tpye: String,
      reuqired: false,
      default: null,
      legalValue: ['meidum','small','mini']
    }
    ```

    ```html
    <!-- Example -->
    <ls-button>Hi Lasia</ls-button>
    <ls-button size="medium">Hi Lasia</ls-button>
    <ls-button size="small">Hi Lasia</ls-button>
    <ls-button size="mini">Hi Lasia</ls-button>
    ```

  - type：

    用于设置按钮类型，比如用户进行危险操作时，按钮的整体状态成一个红色的警示状态。

    ```javaScript
    // Attribute
    {
      apiName: 'type',
      type: String,
      required: false,
      default: 'primary',
      legalValue: ['primary','warning','success']
    }
    ```

  - nativeType：

    用于设置按钮的原生属性。

    ```javaScript
    // Attribute
    {
      apiName: 'nativeType',
      type: String,
      required: false,
      default: 'button',
      legalValue: 'Every native properties on buttons'
    }
    ```

## Input

输入框组件，进行数据的输入。

- Start：

  需要注意，在注册 `Input` 组件之后需要使用 `v-model` 指令为 `Input` 组件指定一个绑定值，否则无法进行输入。

  ```html
  <ls-input v-model="value"></ls-input>

  <script>
    export default {
      data() {
        return {
          value: "",
        };
      },
    };
  </script>
  ```

- Call Event：

  - change：

    当 `Input` 组件的 _value_ 属性发生变化时自动触发，用户可以使用 `@change` 事件来获取回调，回调函数返回 `Input` 组建的 _value_ 属性。

    ```html
    <ls-input v-model="data" @change="handleChange"></ls-input>

    <script>
      export default {
        data() {
          return {
            data: "",
          };
        },
        methods: {
          handleChange(val) {
            console.log(val); // input value
          },
        },
      };
    </script>
    ```

  - input：

    当用户在 `Input` 组件上进行输入操作时自动触发此函数，用户可以使用 `@input` 事件来获取回调函数，回调函数返回 `Input` 组建的 _value_ 属性。

    用法同 _change_ 事件。

  - focus：

    当 `Input` 组件获取焦点时，此事件被触发，用户可以使用 `@focus` 获取回调函数，回调函数返回事件的 `event` 对象。

    ```html
    <ls-input v-model="data" @focus="handleFocus"></ls-input>

    <script>
      export default {
        data() {
          return {
            data: "",
          };
        },
        methods: {
          handleFocus(event) {
            console.log(event); // DOM Object
          },
        },
      };
    </script>
    ```

  - blur：

    当 `Input` 组件失去焦点时，此事件被触发，用户可以使用 `@blur` 获取回调函数，回调函数返回事件的 `event` 对象。

    用法同 _focus_ 事件。

- Internal Event：

  - focus

    此事件为组件内部事件，用作让 `Input` 组件获取焦点，用户可以通过 `this.${DOM}.focus()` 触发。

    ```html
    <ls-input v-model="data" ref="input"></ls-input>
    <ls-button @click="handleClick">Get Focus</ls-button>

    <script>
      export default {
        data() {
          return {
            data: "",
          };
        },
        methods: {
          handleClick() {
            this.$refs.input.focus(); // 此时 Input 组件获取焦点
          },
        },
      };
    </script>
    ```

  - blur：

  此事件为组件内部事件，用于让 `Input` 组件失去焦点，用户可以通过 `this.${DOM}.blur()`触发。

  用法同 _focus_ 事件。

- API：

  - type：

    用于设置 `Input` 组件的类型，当属性值为 _textarea_ 时，`Input` 组件变为文本域。

    ```javaScript
    {
      apiName: 'type',
      type: String,
      required: false,
      default: 'input',
      legalValue: ['input', 'textarea'],
    }
    ```

  - round：

    用于设置 `Input` 组件边角是否为圆角。

    ```javaScript
    {
      apiName: 'round',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

  - disabled：

    用来设置 `Input` 是否被禁用。

    ```javaScript
    {
      apiName: 'disabled',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

  - size：

    用来设置 `Input` 组件的大小。

    ```javaScript
    {
      apiName: 'size',
      type: String,
      required: false,
      default: null，
      legalValue: ['medium', 'small', 'mini'],
    }
    ```

  - placeholder：

    用来设置 `Input` 组件的占位文字。

    ```javaScript
    {
      apiName: 'placeholder',
      type: [String, Number],
      required: false,
      default: null,
      legalValue: 'every String or Number data'
    }
    ```

  - readonly：

    此属性用于设置 `Input` 组件是否为只读。

    ```javaScript
    {
      apiName: 'readonly',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

  - maxlength：

    此属性用于设置输入框或文本域中最大的文字数量。

    ```javaScript
    {
      apiName：'maxlength',
      type: [String, Number],
      required: true,
      default: null,
      legalValue: 'reasonable value O_o',
    }
    ```

  - showWordLimit：

    此属性用于展示当前字数已经最大字数，只有当 _maxlength_ 属性值为有效值时才会展示。在 _HTML_ 标签中，可以使 `kebab-case` 命名法。

    ```javaScript
    {
      apiName: 'showWordLimit',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

    ```html
    <ls-input v-model="data" maxlength="10" show-word-limit></ls-input>

    <script>
      export default {
        data() {
          return {
            data: "Hi Lasia",
          };
        },
      };
    </script>
    ```

  - resize：

    此属性属于 _textarea_ 独有属性，只有当 `type="textarea"` 时生效。用于设置文本域的宽高是否可以由用户自定义。

    ```javaScript
    {
      apiName: 'resize',
      type: String,
      required: false,
      default: null,
      legalValue: 'every property in resize of css',
    }
    ```

  - cols：

    此属性属于 _textarea_ 独有属性，只有当 `type="textarea"` 时生效。用于设置文本域的列数。

    ```javaScript
    {
      apiName: 'cols',
      type: [String, Number],
      required: false,
      default: null,
      legalValue: 'Number or String data',
    }
    ```

  - rows：

    此属性属于 _textarea_ 独有属性，只有当 `type="textarea"` 时生效。用于设置文本域的行数。

    ```javaScript
    {
      apiName: 'rows',
      type: [String, Number],
      required: false,
      default: null,
      legalValue: 'Number or String data',
    }
    ```

## Card

容器组件，为页面提供符合整体风格的容器，可以理解为 _container_。

- Start：

  ```html
  <ls-card>
    <any-component></any-component>
  </ls-card>
  ```

- Call Event：

  Nothing

- API：

  - round：

    用于控制 `Card` 组件的边角弧度，当 _round_ 值为 `True` 时，按钮为椭圆边角。

    ```javaScript
    // Attribute
    {
      apiName: 'round',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

  - foucs：

    用于控制 `Card` 组建的阴影样式，当 _foucs_ 的值为 `True` 时，阴影呈现一种内凹的感觉。

    ```javaScript
    // Attribute
    {
      apiName: 'focus',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

## Toggle

勾选框组件，用于在二选一的场景中进行选择。

- Start：

  ```html
  <ls-toggle v-model="value"></ls-toggle>
  <script>
    export default {
      data() {
        return {
          value: false,
        };
      },
    };
  </script>
  ```

- Call Event：

  - change：

    `Toggle` 组件提供 _onChange_ 事件，`Toggle` 组件发生改变时触发事件，事件返回当前 `Toggle` 的状态。

    ```html
    <ls-toggle v-model="value" @change="handleChange"></ls-toggle>
    <script>
      export default {
        data() {
          return {
            value: false,
          };
        },
        methods: {
          handleChange(val) {
            console.log(val); // Toggle 组件状态值
          },
        },
      };
    </script>
    ```

- API：

  - value：

    `Toggle` 组件的状态值，为布尔值，使用 `v-model` 进行动态绑定。

    ```javaScript
    // Attribute
    {
      apiName: 'value',
      type: Boolean,
      required: true,
      default: false,
      legalValue: [false, true],
    }
    ```

  - size：

    此属性用于设置 `Toggle` 组件的大小，若未赋值则默认为最大尺寸。

    ```javaScript
    // Attribute
    {
     apiName: 'size',
     type: String,
     required: false,
     default: false,
     legalValue: ['medium', 'small'],
    }
    ```

  - activeText：

    此属性用于设置 `Toggle` 组件激活状态的文字描述。

    ```javaScript
    // Attribute
    {
     apiName: 'activeText',
     type: String,
     required: false,
     default: false,
     legalValue: 'String',
    }
    ```

  - inactiveText

    此属性用于设置 `Toggle` 组件未激活状态的文字描述。

    ```javaScript
    // Attribute
    {
     apiName: 'inactiveText',
     type: String,
     required: false,
     default: false,
     legalValue: 'String',
    }
    ```

## Switch

开关组件，功能近似于 `Toggle` 组件，用于是否选择，更类似于 `Checkbox`。

- Start：

  ```html
  <ls-switch v-model="value"></ls-switch>
  <script>
    export default {
      data() {
        return {
          value: false,
        };
      },
    };
  </script>
  ```

- Call Event：

  - change：

    `Switch` 组件提供 _onChange_ 事件，`Switch` 组件发生改变时触发事件，事件返回当前 `Switch` 的状态。

    ```html
    <ls-switch v-model="value" @change="handleChange"></ls-switch>
    <script>
      export default {
        data() {
          return {
            value: false,
          };
        },
        methods: {
          handleChange(val) {
            console.log(val); // Switch 组件状态值
          },
        },
      };
    </script>
    ```

- API：

  - value：

    `Switch` 组件的状态值，为布尔值，使用 `v-model` 进行动态绑定。

    ```javaScript
    // Attribute
    {
      apiName: 'value',
      type: Boolean,
      required: true,
      default: false,
      legalValue: [false, true],
    }
    ```

  - size：

    此属性用于设置 `Switch` 组件的大小，若未赋值则默认为最大尺寸。

    ```javaScript
    // Attribute
    {
     apiName: 'size',
     type: String,
     required: false,
     default: false,
     legalValue: ['medium', 'small', 'mini'],
    }
    ```

  - round：

    此属性用于设置 `Switch` 组件是否为椭圆边角，当 _round_ 值为 `True` 时，为椭圆形边角。

    ```javaScript
    // Attribute
    {
      apiName: 'round',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [true, false],
    }
    ```

  - type：

    此属性用于设置 `Switch` 组件在激活时的样式，不同的值对应着不同的使用场景，可以参考 [`Button`](##Button) 组件的 _type_ 属性

    ```javaScript
    // Attribute
    {
      apiName: 'type',
      type: String,
      required: false,
      default: 'primary',
      legalValue: ['primary','warning','success']
    }
    ```

  - disabled：

    此属性用于设置 `Switch` 是否被禁用，若 _disabled_ 的值为 `True` 则 `Switch` 组件无法触发事件。同样类似于 [`Button`](##Button) 组建的 _disabled_ 属性。

    ```javaScript
    // Attribute
    {
      apiName: 'disabled',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

## Progress

进度条组件，用于展示工作进度。由圆形和线形两种类型

- Start：

  ```html
  <ls-progress :percentage="value"></ls-progress>
  <script>
    export default{
      data(){
        value:15,
      }
    }
  </script>
  ```

- Call Event：

  Nothing

- API：

  - percentage：

    `Progress` 组件的进度值，为 _0-100_ 的数字，用于以百分比的形式展示当前进度状态。

    ```javaScript
    // Attribute
    {
      apiName: 'percentage',
      type: Number,
      required: true,
      default: false,
      legalValue: [0-100],
    }
    ```

  - width：

    `Progress` 组件的宽度值，用于指定组件圆形状态下的直径或线条状态下的长度

    ```javaScript
    // Attribute
    {
      apiName: 'width',
      type: Number,
      required: false,
      default: 108,
      legalValue: 'Number',
    }
    ```

  - trackWidth：

    用于设置组件在圆形状态下进度条的宽度。

    ```javaScript
    // Attribute
    {
      apiName: 'trackWidth',
      type: Number,
      required: false,
      default: 8,
      legalValue: 'Number',
    }
    ```

  - color：

    用于设置组件在圆形状态下进度条的宽度。

    ```javaScript
    // Attribute
    {
      apiName: 'color',
      type: String,
      required: false,
      default: '#ffaaaa',
      legalValue: 'String',
    }
    ```

  - size：

    用于设置进度条的颜色。

    ```javaScript
    // Attribute
    {
      apiName: 'size',
      type: String,
      required: false,
      default: false,
      legalValue: ['medium', 'small', 'mini'],
    }
    ```

  - round：

    用于设置 `Progress` 组件是否时圆形类型，默认为线条状态。

    ```javaScript
    // Attribute
    {
      apiName: 'round',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```

  - showProgress：

    用于设置 `Progress` 组件是否展示当前进度信息。

    ```javaScript
    // Attribute
    {
      apiName: 'showProgress',
      type: Boolean,
      required: false,
      default: false,
      legalValue: [false, true],
    }
    ```
