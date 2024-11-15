## [rJS](https://rapidjs.org) Plugin: SCSS

More maintainable stylesheets with [SCSS](https://sass-lang.com/).

### Install

``` console
npm i rapidjs-org/plugin--scss
```

<sub><code>__rjs.plugin.json</code></sub>
``` json
{
  "package": "@plugins.rapidjs.org/scss"
}
```

### Use

```
└─ /src …
   └─ /scss
      ├─ __rjs.plugin.json
      ├─ /components
      │  ├─ _button.scss
      │  ├─ _header.scss
      │  └─ _footer.scss
      └─ /pages
         ├─ index.html
         └─ rates.html
```

### Configure

By default, the plugin works relative to the root for both the plugin directory (input), and public directory (output). Alternative relative paths can be specified via `inPath` and `outPath`, respectively.  

<sub><code>__rjs.plugin.json</code></sub>
``` json
{
  "package": "@plugins.rapidjs.org/scss",
  "config": {
    "inPath": "assets/css/",
    "outPath": "pages/"
  }
}
```

> The SCSS to CSS transpilation bases on **[flecss](https://github.com/flecss/flecss)**. To opt-in with advanced **flecss** framework features, provide the respective library name to `config.flecssLibrary`. **flecss** variable overrides are then expected in `/__overrides.scss`.

##

<sub>&copy; Thassilo Martin Schiepanski</sub>