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

The `taskbar-icons` property is an object where the window class is the key and the icon name is the value.

You need to find the correct window class, for example in niri with the command `niri msg windows` window class is named as app id. Find icon name is a little bit difficult if you don't know how do that, i recommend use app something like [Pins](https://flathub.org/en/apps/io.github.fabrialberio.pinapp).

But if you need custom icon, for example for games windows, you need to put icon at `~/.local/share/icons/hicolor/scalable/apps/`.

In my case it's looks like:

```
apps/
├── dark-souls-remastered.png
├── umineko.png
└── windowkill.png
```

And my `taskbar-icons`:

```json
"taskbar-icons": {
    "windowkill": "windowkill",
    "darksoulsremastered.exe": "dark-souls-remastered",
    "onscripter-ru.exe": "umineko",
}
```
