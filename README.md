# TVP Apache2 License Checker

Automated license checker for validating project dependencies for compatible Apache2 licenses.

## Use with your project

- Run `npm install tvp-apache2-license-checker --save-dev`
- Run `tvp-apache2-license-checker` in the root of your project
- Modify your `package.json` to include `tvp-apache2-license-checker` as part of your *test* script

For example:
```js
...
  "scripts": {
    "test": "mocha && npm run check-licenses",
    "check-licenses": "tvp-apache2-license-checker"
  },
...
```

The license checker will fail with an *exit code* of `1` if there are any problems with the license, and will pass with an *exit code* of `0` if all checks are ok.

A temporary file `licenses.json` will be created containing a full license analysis based on output from the [`license-checker`](https://www.npmjs.com/package/license-checker) tool. 

## Development

- Check out the code
- Run `npm install`
- Run `npm test`

Modify `scripts/whitelist.js` to allow additional licenses or license combinations.

Modify `scripts/exceptions.js` to allow specific modules for a given reason.

## Example output
```
Acceptable project licenses (uses):
  (MIT AND CC-BY-3.0) (1)
  Apache-2.0 (3)
  BSD-2-Clause (1)
  BSD-3-Clause (1)
  ISC (15)
  MIT (23)
  Unlicense (1)
  WTFPL (1)

Acceptable project license exceptions:
  cosmos-deploy@3.1.2
    Reason: Not required, acceptable use for BBC internal deployments
  cycle@1.0.3
    Reason: Public Domain; see: https://github.com/dscape/cycle/
  map-stream@0.1.0
    Reason: MIT License; see: https://github.com/dominictarr/map-stream

All licenses ok Licensed (46) Exceptions (0) Problems (0)
```
