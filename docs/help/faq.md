# FAQ

## Can I set maximum size of the text in bar modules?

Yes, you can do this with syntax like `{key:size}` or `{key:size!}`. In the first example the text is truncated and `...` added at the end, in the second just truncated. It's working only for some modules and keys (market with `*` in [bar config page](http://localhost:5173/delta-shell-docs/config/bar.html))

For example: `"window-format": "{indicator} {icon} {title:10}"`
