# Theme

Theme file located at `~/.config/delta-shell/theme.json`, so for configuring the theme of shell you need edit this file

| Property  | Description      | Type      | Default |
| --------- | ---------------- | --------- | ------- |
| `spacing` | font size        | `integer` | `10`    |
| `shadow`  | enable of shadow | `boolean` | `true`  |
| `radius`  | border radius    | `integer` | `0`     |

## Font

_Category `font:`_

| Property | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| `size`   | font size   | `integer` | `14`    |
| `name`   | font name   | `string`  | `Rubik` |

## Colors

_Category `colors:`_

| Property | Type     | Default                                  |
| -------- | -------- | ---------------------------------------- |
| `accent` | `string` | `#3584e4` <ColorBlock color="#3584e4" /> |
| `blue`   | `string` | `#3584e4` <ColorBlock color="#3584e4" /> |
| `cyan`   | `string` | `#2190a4` <ColorBlock color="#2190a4" /> |
| `green`  | `string` | `#3a944a` <ColorBlock color="#3a944a" /> |
| `yellow` | `string` | `#c88800` <ColorBlock color="#c88800" /> |
| `orange` | `string` | `#ed5b00` <ColorBlock color="#ed5b00" /> |
| `red`    | `string` | `#e62d42` <ColorBlock color="#e62d42"/>  |
| `purple` | `string` | `#9141ac` <ColorBlock color="#9141ac"/>  |

### Backgrounds

_Subcategory `colors:bg:`_

| Property | Type     | Default                                  |
| -------- | -------- | ---------------------------------------- |
| `bg0`    | `string` | `#1d1d20` <ColorBlock color="#1d1d20" /> |
| `bg1`    | `string` | `#28282c` <ColorBlock color="#28282c" /> |
| `bg2`    | `string` | `#36363a` <ColorBlock color="#36363a" /> |
| `bg3`    | `string` | `#48484b` <ColorBlock color="#48484b" /> |

### Foregrounds

_Subcategory `colors:fg:`_

| Property | Type     | Default                                  |
| -------- | -------- | ---------------------------------------- |
| `fg0`    | `string` | `#ffffff` <ColorBlock color="#ffffff" /> |
| `fg1`    | `string` | `#c0c0c0` <ColorBlock color="#c0c0c0" /> |
| `fg2`    | `string` | `#808080` <ColorBlock color="#808080" /> |

## Border

_Category `border:`_

| Property | Description                       | Type      | Default |
| -------- | --------------------------------- | --------- | ------- |
| `width`  | width of border (used everywhere) | `integer` | `1`     |
| `color`  | color of border                   | `string`  | `$bg2`  |

## Outline

_Category `outline:`_

| Property | Description      | Type      | Default |
| -------- | ---------------- | --------- | ------- |
| `width`  | width of outline | `integer` | `1`     |
| `color`  | color of outline | `string`  | `$fg1`  |

## Window

_Category `window:`_

| Property  | Description              | Type      | Default |
| --------- | ------------------------ | --------- | ------- |
| `padding` | window padding (inside)  | `integer` | `10`    |
| `opacity` | window opacity (0 - 1.0) | `float`   | `1`     |
| `margin`  | window margin (outside)  | `integer` | `0`     |

### Border

_Subcategory `window:border:`_

| Property | Description            | Type      | Default |
| -------- | ---------------------- | --------- | ------- |
| `width`  | width of window border | `integer` | `1`     |
| `color`  | color of window border | `string`  | `$bg2`  |

### Outline

_Subcategory `window:outline:`_

| Property | Description      | Type      | Default |
| -------- | ---------------- | --------- | ------- |
| `width`  | width of outline | `integer` | `1`     |
| `color`  | color of outline | `string`  | `$fg1`  |

### Shadow

_Subcategory `window:shadow:`_

| Property  | Description              | Type        | Default  |
| --------- | ------------------------ | ----------- | -------- |
| `offset`  | shadow offset (x, y)     | `integer[]` | `[0, 0]` |
| `blur`    | shadow blur              | `integer`   | `10`     |
| `spread`  | shadow spread            | `integer`   | `0`      |
| `color`   | color of shadow          | `string`    | `black`  |
| `opacity` | shadow opacity (0 - 1.0) | `float`     | `1`      |

## Bar

_Category `bar:`_

| Property  | Description                             | Type        | Default        |
| --------- | --------------------------------------- | ----------- | -------------- |
| `bg`      | background of bar                       | `string`    | `$bg0`         |
| `opacity` | opacity of bar (0 - 1.0)                | `float`     | `1`            |
| `margin`  | bar margin ([top, left, bottom, right]) | `integer[]` | `[0, 0, 0, 0]` |
| `padding` | bar padding                             | `integer`   | `6`            |
| `spacing` | spacing between the modules             | `integer`   | `6`            |

### Border

_Subcategory `bar:border:`_

| Property | Description         | Type      | Default |
| -------- | ------------------- | --------- | ------- |
| `width`  | width of bar border | `integer` | `1`     |
| `color`  | color of bar border | `string`  | `$bg2`  |

### Separator

_Subcategory `bar:separator:`_

| Property | Description               | Type      | Default |
| -------- | ------------------------- | --------- | ------- |
| `width`  | width of separator module | `integer` | `1`     |
| `color`  | color of separator module | `string`  | `$bg2`  |

### Shadow

_Subcategory `bar:shadow:`_

| Property  | Description              | Type        | Default  |
| --------- | ------------------------ | ----------- | -------- |
| `offset`  | shadow offset (x, y)     | `integer[]` | `[0, 0]` |
| `blur`    | shadow blur              | `integer`   | `10`     |
| `spread`  | shadow spread            | `integer`   | `0`      |
| `color`   | color of shadow          | `string`    | `black`  |
| `opacity` | shadow opacity (0 - 1.0) | `float`     | `1`      |

### Button

_Subcategory `bar:button:`_

| Property  | Description                                                                                             | Type                     | Default  |
| --------- | ------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| `fg`      | font color of buttons in bar                                                                            | `string`                 | `$fg0`   |
| `padding` | padding of button (single number, [top+bottom left+right], [top, left, bottom, right] just like in css) | `integer` or `integer[]` | `[0, 7]` |
| `opacity` | button opacity (0 - 1.0)                                                                                | `float`                  | `1`      |

#### Background

_Subcategory `bar:button:bg:`_

| Property  | Type     | Default |
| --------- | -------- | ------- |
| `default` | `string` | `$bg0`  |
| `hover`   | `string` | `$bg1`  |
| `active`  | `string` | `$bg2`  |

#### Border

_Subcategory `bar:button:border:`_

| Property | Description                | Type      | Default |
| -------- | -------------------------- | --------- | ------- |
| `width`  | width of bar button border | `integer` | `1`     |
| `color`  | color of bar button border | `string`  | `$bg2`  |
