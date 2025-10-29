# Installation

## Arch Linux

```bash
yay -S delta-shell-git
```

## From Source

### Dependencies

#### Required

- `aylurs-gtk-shell`
- `libastal-hyprland`
- `libastal-niri`
- `libastal-apps`
- `libastal-battery`
- `libastal-bluetooth`
- `libastal-mpris`
- `libastal-network`
- `libastal-notifd`
- `libastal-powerprofiles`
- `libastal-tray`
- `libastal-wireplumber`
- `dart-sass`

::: warning
Delta Shell will not run without the required dependencies
:::

#### Optional

- `cliphist` and `wl-clipboard` for clipboard
- `gpu-screen-recorder` to record screen from control center
- `geoclue` to autoload the location for weather
- `tuned-ppd` or `power-profiles-daemon` to switch between power profiles
- `brightnessctl` for control screen brightness
- `bluez` for connect to bluetooth devices

### Arch Linux

To install the dependencies on Arch, you can use the following command:

```bash
yay -S libastal-niri-git aylurs-gtk-shell-git libastal-meta brightnessctl dart-sass bluez tuned-ppd cliphist gpu-screen-recorder wl-clipboard geoclue
```

### Installing Delta Shell

To install Delta Shell, you can run the following commands:

```bash
git clone https://github.com/Sinomor/delta-shell.git
cd delta-shell
meson setup build
meson install -C build
```

## Without Building

To install Delta Shell without building, you can run the following commands:

```bash
git clone https://github.com/Sinomor/delta-shell.git
cd delta-shell
./run-dev.sh
```

::: tip
So for starting you need use `run-dev.sh` script
:::

## Running Delta Shell

Once you have installed Delta Shell, you can run it by running the following command:

```bash
delta-shell run
```

Also more information you can get with

```bash
delta-shell -h
```
