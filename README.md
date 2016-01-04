# ember-cli-gzip

An ember-cli add-on to gzip assets.  

**Note:** If you use the ember-deploy addon, just use their gzip plugin: https://www.npmjs.com/package/ember-cli-deploy-gzip  
**Note:** ember-cli already gzips your assets on its development server.  

This is more of a low-level addon for custom deployments.

## Install
```
npm install --save-dev ember-cli-gzip
```

By simply including this add on, js and css assets will automatically be gzipped on production builds.

## Options

For more control, you can define options in your app's Brocfile.js:

```js
var app = new EmberApp({
  gzip: {
    // options
  }
});
```

- **enabled** : (Default `true` in production environment)
- **extensions** : Array of file extentions that should be compressed. (Default `['js', 'css']`)
- **keepUncompressed**: Whether the uncompressed versions of the files should be kept. (Default `false`)
- **appendSuffix**: Whether to append the .gz suffix. (Default `true`)

## Refereneces
- [broccoli-gzip](https://github.com/salsify/broccoli-gzip)
