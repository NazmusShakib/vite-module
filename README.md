# Vue Component Library

**For Vue 2**

This project skeleton was created as a starter with creating their own Vue component library using:

- [Vue](https://vuejs.org/) (v2)
- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)

### Building

```
cd ~/projects/component-library-dir
npm install
npm run build
```

## For local publishing in development

Package linking is a two-step process:

- Create a global symlink for a dependency with npm link. A symlink, short for symbolic link, is a shortcut that points to another directory or file on your system.
- Tell the application to use the global symlink with npm link some-dep.
```
cd ~/projects/component-library-dir
npm link  # Step 1
cd ~/projects/main-app-dir
npm link fw-users  # Step 2 fw-users is our package name
```

### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

## Usage
Available components are - `FwUserForm`, `FwUserShow`, `FwUserList`

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

## Back to Normal

When we don’t want to use the local version anymore, delete the symlink. But careful, npm unlink is an alias for npm uninstall, it does not mirror the behavior of npm link.

```
cd ~/projects/main-app-dir
npm uninstall --no-save fw-users -f && npm install -f
```

Clean up the global link, though its presence won’t interfere with our main application.
```
cd ~/projects/component-library-dir
npm uninstall fw-users # Delete global symlink
```

[Check out this Code Sandbox for a live example.](https://loading...)
