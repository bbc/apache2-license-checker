# Apache2 License Checker

Automated license checker for validating project dependencies for compatible Apache2 licenses.

## Use with your project

- Run `npm install @bbc/apache2-license-checker --save-dev`
- Modify your `package.json` to include `apache2-license-checker` as part of your *test* script

For example:
```js
...
  "scripts": {
    "test": "mocha && npm run check-licenses",
    "check-licenses": "apache2-license-checker"
  },
...
```

The license checker will fail with an *exit code* of `1` if there are any problems with the license, and will pass with an *exit code* of `0` if all checks are ok.

A temporary file `licenses.json` will be created containing a full license analysis based on output from the [`license-checker`](https://www.npmjs.com/package/license-checker) tool. You will probably want to `.gitignore` this file.

## Creating Exceptions

If the license checker throws errors, and you've verified the errors as acceptable risks, then you may want to create an exceptions file in your local project. For example:

### `license-exceptions.json`
```
{
  "exceptions": {
    "cosmos-deploy@*": {
      "reason": "Not required, acceptable use for BBC internal deployments"
    },
    "cycle@1.0.3": {
      "reason": "Public Domain; see: https://github.com/dscape/cycle/"
    },
    "map-stream@0.1.0": {
      "reason": "MIT License; see: https://github.com/dominictarr/map-stream"
    },
    "ua-parser-js@0.7.17": {
      "reason": "Public Domain; see https://github.com/faisalman/ua-parser-js"
    }
  }
}
```

## Development

To support

- Check out the code
- Run `npm install`
- Run `npm test`

Modify `scripts/whitelist.js` to allow additional licenses or license combinations.

Modify `scripts/exceptions.js` to allow specific modules for a given reason.

Please push to a branch and raise a pull request, or fork and do the same.

## Example output

In normal usage running `npm run check-licenses` produces an output similar to:

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

If there is a problem with the licenses, then expect an output similar to:

```
Acceptable project licenses (uses):
  Apache-2.0 (3)
  BSD-2-Clause (1)
  BSD-3-Clause (1)
  CC-BY-3.0 (1)
  CC0-1.0 (1)
  ISC (16)
  MIT (25)

Acceptable project license exceptions:
  spdx-exceptions@2.1.0
    Reason: Public Domain; see https://github.com/kemitchell/spdx-exceptions.json

Problems with the licenses for these dependencies:
  spdx-license-ids@3.0.0
    License:     CC0-1.0
    Repository:  https://github.com/shinnn/spdx-license-ids
    Publisher:   Shinnosuke Watanabe
    Url:         https://github.com/shinnn


Licenses not ok Licensed (46) Exceptions (1) Problems (1)
```
