# TSTL json.lua

Declarations for [log.lua](https://github.com/rxi/log.lua), A tiny logging module for Lua.


| Command | Description |
|-|-|
| `yarn add -D tstl-log-lua` | Install these declarations |
| `yarn add rxi/log.lua` | Install log.lua |


Upon installation these declarations can be linked to a _tsconfig.json_ file.

```json
{
    "compilerOptions": {
        "types": [
            "tstl-log-lua"
        ]
    }
}
```

And used within any _.ts_ file.

```ts
import * as log from "log";

log.usecolor = true;

log.info("Hello world!");

```

Make sure to append `";./node_modules/log.lua/?.lua"` to your `package.path` in a _conf.ts_ file (this is run first) to assist where Lua looks for modules.

```ts
package.path += ";./node_modules/log.lua/?.lua";
```

Also you need to add `"typescript-to-lua/language-extensions"` to _tsconfig.json_ file.
```json
{
    "compilerOptions": {
        "types": [
            "typescript-to-lua/language-extensions"
        ]
    }
}
```