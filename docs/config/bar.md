---
outline: 2
---

# Bar

_Category `bar:`_

| Property   | Description                                               | Type      | Default |
| ---------- | --------------------------------------------------------- | --------- | ------- |
| `size`     | size of a bar (height for horizontal, width for vertical) | `integer` | `52`    |
| `position` | position of a bar (`top`, `bottom`, `left`, `right`)      | `string`  | `top`   |

## Modules

_Subcategory `bar:modules:`_

| Property | Description                  | Type       | Default                                                    |
| -------- | ---------------------------- | ---------- | ---------------------------------------------------------- |
| `start`  | modules at start of the bar  | `string[]` | `["launcher", "workspaces"]`                               |
| `center` | modules at center of the bar | `string[]` | `["clock"]`                                                |
| `end`    | modules at end of the bar    | `string[]` | `["recordindicator", "tray", "keyboard", "quicksettings"]` |

Available modules: `launcher`, `workspaces`, `clock`, `tray`, `keyboard`, `recordindicator`, `weather`, `notificationslist`, `volume`, `network`, `bluetooth`, `battery`, `quicksettings`, `clipboard`, `powermenu`, `separator`, `cpu`, `ram`, `microphone`

## Launcher

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default           |
| ----------------- | ------------------------------------------------------------------------- | -------- | ----------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`          |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-launcher` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                   |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                   |

### Format replacements:

| String   | Replacement                 |
| -------- | --------------------------- |
| `{icon}` | icon, setted by delta shell |

## Battery

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default        |
| ----------------- | ------------------------------------------------------------------------- | -------- | -------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`       |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-power` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                |

### Format replacements:

| String      | Replacement                 |
| ----------- | --------------------------- |
| `{icon}`    | icon, setted by delta shell |
| `{percent}` | capacity in percentage      |

## Bluetooth

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default            |
| ----------------- | ------------------------------------------------------------------------- | -------- | ------------------ |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`           |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-bluetooth` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                    |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                    |

### Format replacements:

| String                   | Replacement                         |
| ------------------------ | ----------------------------------- |
| `{icon}`                 | icon, setted by delta shell         |
| `{status}`               | Status of the bluetooth device      |
| `{controller-address}`\* | Address of the displayed controller |
| `{controller-alias}`\*   | Alias of the displayed controller   |
| `{device-address}`\*     | Address of the displayed device     |
| `{device-alias}`\*       | Alias of the displayed device       |

In marked keys you can set maximum size (read [faq: Can I set maximum size of the text?](../help/faq))

## Clipboard

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default            |
| ----------------- | ------------------------------------------------------------------------- | -------- | ------------------ |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`           |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-clipboard` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                    |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                    |

### Format replacements:

| String   | Replacement                 |
| -------- | --------------------------- |
| `{icon}` | icon, setted by delta shell |

## Clock

_Subcategory `bar:modules:`_

| Property          | Description                                                                                                                                                     | Type     | Default           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------- |
| `format`          | The format, how information should be displayed. More information about this you can find at [Glib gocs](https://docs.gtk.org/glib/method.DateTime.format.html) | `string` | `%b %d  %H:%M`    |
| `on-click`        | Command to execute when clicked on the module                                                                                                                   | `string` | `toggle-calendar` |
| `on-click-right`  | Command to execute when you right clicked on the module                                                                                                         | `string` |                   |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel                                                                                       | `string` |                   |

## Workspaces

_Subcategory `bar:modules:`_

| Property           | Description                                                                                                | Type                     | Default              |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------- |
| `workspace-format` | The format of workspace, how information should be displayed                                               | `string`                 | `{id}`               |
| `window-format`    | The format of window, how information should be displayed                                                  | `string`                 | `{indicator} {icon}` |
| `window-icon-size` | window icon size                                                                                           | `integer`                | `20`                 |
| `taskbar-icons`    | Custom icons for windows in taskbar (read more in [faq: How to change icons in the taskbar?](../help/faq)) | `Record<string, string>` |                      |
| `hide-empty`       | Hide empty workspaces (without windows)                                                                    | `boolean`                | `false`              |
| `on-scroll-up`     | Command to execute when scrolling up on the module                                                         | `string`                 | `workspace-up`       |
| `on-scroll-down`   | Command to execute when scrolling down on the module                                                       | `string`                 | `workspace-down`     |

### Format replacements:

For workspace:

| String      | Replacement                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `{id}`      | Index of the workspace (start from 1)                                  |
| `{name}`    | Name of the workspace for named workspaces                             |
| `{count}`   | Count of windows on the workspace                                      |
| `{windows}` | List of window on the workspace (can be formated with `window-format`) |

For window:

| String        | Replacement                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `{icon}`      | The icon of the application (you can set custom with `taskbar-icons` with class of the window and icon name) |
| `{indicator}` | The indicator of the application                                                                             |
| `{name}`\*    | The name of the application                                                                                  |
| `{title}`\*   | The title of the application                                                                                 |

In marked keys you can set maximum size (read [faq: Can I set maximum size of the text?](../help/faq))

## Keyboard

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type      | Default           |
| ----------------- | ------------------------------------------------------------------------- | --------- | ----------------- |
| `format`          | The format, how information should be displayed                           | `string`  | `{lang}`          |
| `compact`         | Compact view of the keyboard layout name                                  | `boolean` | `true`            |
| `on-click`        | Command to execute when clicked on the module                             | `string`  | `switch-language` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string`  |                   |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string`  |                   |

### Format replacements:

| String   | Replacement                 |
| -------- | --------------------------- |
| `{icon}` | icon, setted by delta shell |
| `{lang}` | active keyboard layout      |

## Network

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default          |
| ----------------- | ------------------------------------------------------------------------- | -------- | ---------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`         |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-network` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                  |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                  |

### Format replacements:

| String        | Replacement                              |
| ------------- | ---------------------------------------- |
| `{icon}`      | icon, setted by delta shell              |
| `{ifname}`\*  | Name of the network interface            |
| `{essid}`\*   | Name (SSID) of the wireless network      |
| `{strength}`  | Signal strength of the wireless network  |
| `{frequency}` | Frequency of the wireless network in GHz |

In marked keys you can set maximum size (read [faq: Can I set maximum size of the text?](../help/faq))

## Volume

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default         |
| ----------------- | ------------------------------------------------------------------------- | -------- | --------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`        |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-volume` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                 |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                 |
| `on-scroll-up`    | Command to execute when scrolling up on the module                        | `string` | `volume-up`     |
| `on-scroll-down`  | Command to execute when scrolling down on the module                      | `string` | `volume-down`   |

### Format replacements:

| String      | Replacement                 |
| ----------- | --------------------------- |
| `{icon}`    | icon, setted by delta shell |
| `{percent}` | colume in percentage        |

## Microphone

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default           |
| ----------------- | ------------------------------------------------------------------------- | -------- | ----------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`          |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-volume`   |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                   |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                   |
| `on-scroll-up`    | Command to execute when scrolling up on the module                        | `string` | `microphone-up`   |
| `on-scroll-down`  | Command to execute when scrolling down on the module                      | `string` | `microphone-down` |

### Format replacements:

| String      | Replacement                 |
| ----------- | --------------------------- |
| `{icon}`    | icon, setted by delta shell |
| `{percent}` | colume in percentage        |

## Weather

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default                |
| ----------------- | ------------------------------------------------------------------------- | -------- | ---------------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon} {temp}{units}` |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-weather`       |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                        |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                        |

### Format replacements:

| String         | Replacement                 |
| -------------- | --------------------------- |
| `{icon}`       | icon of the current weather |
| `{temp}`       | current tempetarure         |
| `{temp-units}` | units of tempetarure        |
| `{wind-speed}` | current wind speed          |
| `{wind-units}` | units of wind speed         |

## Record Indicator

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default               |
| ----------------- | ------------------------------------------------------------------------- | -------- | --------------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`              |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `screenrecord-toggle` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                       |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                       |

### Format replacements:

| String       | Replacement                 |
| ------------ | --------------------------- |
| `{icon}`     | icon, setted by delta shell |
| `{progress}` | progress of recording       |

## Notifications List

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default         |
| ----------------- | ------------------------------------------------------------------------- | -------- | --------------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`        |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-notifs` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                 |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                 |

### Format replacements:

| String    | Replacement                 |
| --------- | --------------------------- |
| `{icon}`  | icon, setted by delta shell |
| `{count}` | count of the notifications  |

## Powermenu

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default            |
| ----------------- | ------------------------------------------------------------------------- | -------- | ------------------ |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`           |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-powermenu` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |                    |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |                    |

### Format replacements:

| String   | Replacement                 |
| -------- | --------------------------- |
| `{icon}` | icon, setted by delta shell |

## Quick settings

_Subcategory `bar:modules:`_

| Property          | Description                                                               | Type     | Default     |
| ----------------- | ------------------------------------------------------------------------- | -------- | ----------- |
| `format`          | The format, how information should be displayed                           | `string` | `{icon}`    |
| `on-click`        | Command to execute when clicked on the module                             | `string` | `toggle-qs` |
| `on-click-right`  | Command to execute when you right clicked on the module                   | `string` |             |
| `on-click-middle` | Command to execute when you middle clicked on the module using mousewheel | `string` |             |

### Format replacements:

| String   | Replacement                 |
| -------- | --------------------------- |
| `{icon}` | icon, setted by delta shell |

## Cpu

_Subcategory `bar:modules:`_

| Property | Description                                     | Type     | Default          |
| -------- | ----------------------------------------------- | -------- | ---------------- |
| `format` | The format, how information should be displayed | `string` | `{icon} {usage}` |

### Format replacements:

| String    | Replacement                 |
| --------- | --------------------------- |
| `{icon}`  | icon, setted by delta shell |
| `{usage}` | Current cpu usage (% view)  |

## Ram

_Subcategory `bar:modules:`_

| Property | Description                                     | Type     | Default          |
| -------- | ----------------------------------------------- | -------- | ---------------- |
| `format` | The format, how information should be displayed | `string` | `{icon} {usage}` |

## Tray

| Property  | Description                                  | Type      | Default |
| --------- | -------------------------------------------- | --------- | ------- |
| `compact` | Compact view of the tray (show arrow or not) | `boolean` | `true`  |

### Format replacements:

| String    | Replacement                   |
| --------- | ----------------------------- |
| `{icon}`  | icon, setted by delta shell   |
| `{usage}` | Amount of used memory in GiB. |
| `{total}` | Amount of total memory in GiB |
