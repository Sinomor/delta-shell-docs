---
outline: 2
---

# FAQ

## Can I set the maximum size of text in bar modules?

Yes, you can limit text length using the following syntax:

- `{key:size}` — Truncates the text and adds ... at the end.
- `{key:size!}` — Just truncates the text without adding dots.

::: info
This only works for specific modules and keys marked with an asterisk (\*) in the [bar config page](../config/bar).
:::

Example: `"window-format": "{indicator} {icon} {title:10}"`

## How do I change icons in the taskbar?

The taskbar-icons property is an object where the window class is the key and the icon name is the value.

### 1. Identify the Window Class

You need to find the correct application ID/Class:

- Niri users: Run niri msg windows in your terminal. The window class is listed as the app id.

### 2. Find or Add an Icon

- Standard Icons: Use an app like [Pins](https://flathub.org/en/apps/io.github.fabrialberio.pinapp) to find existing system icon names.
- Custom Icons: Place your custom .png or .svg files in:
  ~/.local/share/icons/hicolor/scalable/apps/

Example File Structure:

```text
apps/
├── dark-souls-remastered.png
├── umineko.png
└── windowkill.png
```

### 3. Configure the JSON

Add the mapping to your configuration:

```json
"taskbar-icons": {
    "windowkill": "windowkill",
    "darksoulsremastered.exe": "dark-souls-remastered",
    "onscripter-ru.exe": "umineko"
}
```
