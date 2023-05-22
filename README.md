# Vue Component Library

**For Vue 2**

This project skeleton was created as a starter with creating their own Vue component library using:

- [Vue](https://vuejs.org/) (v2)
- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)

## Development use

Package linking is a two-step process:

- Create a global symlink for a dependency with npm link. A symlink, short for symbolic link, is a shortcut that points to another directory or file on your system.
- Tell the application to use the global symlink with npm link some-dep.
```
cd ~/projects/some-dep
npm link  # Step 1.
cd ~/projects/my-app
npm link some-dep  # Step 2.
```
### Building

```
npm run build
```

## Publishing


### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

## Usage

Usage of the component will be:

```
<template>
  <div>
    <FwUserList></FwUserList>
  </div>
</template>

<script>
import { FwUserList } from 'fw-users'

export default {
  name: 'App',
  components: {
    FwUserList: FwUserList
  }
}
</script>

```

[Check out this Code Sandbox for a live example.](https://loading...)