# Weather

_Category `weather:`_

| Property  | Description       | Type      | Default |
| --------- | ----------------- | --------- | ------- |
| `enabled` | enable of weather | `boolean` | `true`  |

# Location

_Subcategory `weather:location:`_

| Property | Description                                                        | Type                                    | Default |
| -------- | ------------------------------------------------------------------ | --------------------------------------- | ------- |
| `auto`   | auto-detection of location                                         | `boolean`                               | `false` |
| `coords` | directly the coordination of location (`latitude` and `longitude`) | `{latitude: string; longitude: string}` |         |
| `city`   | name of the city                                                   | `string`                                | `Minsk` |

::: tip
location options priority: auto > coords > city
:::
