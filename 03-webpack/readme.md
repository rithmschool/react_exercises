## Webpack Exercise

### Part 1 

Answer the following questions:

- What is `webpack`? What is `babel`?

    `webpack` is a module bundle. It manages dependencies across different files and consolidates everything into a small number of minified output files suitable for production.

    `babel` is a transpiler. It is used to convert modern JavaScript syntax and features into JavaScript code that can be understood across different browsers.

- What is a `loader`? Give three examples of different kinds of loaders.

    A loader is a tool used to transform your code somehow during the bundling process for webpack. Examples of loaders include `babel`, `ts-loader` (for TypeScript), and `css-loader` (for CSS). For more on loaders, check out the [docs](https://webpack.js.org/concepts/loaders/).

- What is the difference between `path` and `publicPath` when used as keys in the `output` object?

    `path` refers to the absolute path of the output directory. `publicPath` refers to the address of the output files that the browser uses. For more, check out the [docs](https://webpack.github.io/docs/configuration.html#output-path).

- What is a babel `preset`?

    A preset tells babel how it should transpile based on the type of code you're writing. There are presets for ES2015, React, etc.

- What does `test:/\.jsx?$/` mean inside of `webpack.config.js`?

    `/\.jsx?$/` is a regular expression that will match either `.js` or `.jsx`. So this test checks for all `js` and `jsx` files.

- What is the `webpack-dev-server`?

    `webpack-dev-server` is a tool that we can use to start a development server for projects using `webpack`. `webpack-dev-server` checks for changes in source code and rebundles files automatically. 

- Research _tree shaking_ and _code splitting_. What are these two things and how do they help reduce bundle sizes?

    Webpack is able to remove unused JavaScript code from the final bundle, thereby making the file size smaller. This process is called _tree shaking_.

    Webpack also lets you create multiple bundles that can be loaded on-demand, rather than one single bundle. By splitting into smaller bundles you can improve the load time of your application. This process is called _code splitting_. 

    You can read more about tree shaking [here](https://webpack.js.org/guides/tree-shaking/), and more about code splitting [here](https://webpack.js.org/guides/code-splitting/).

- What does the `default` keyword do when exporting?

    It indicates that there is a single value you want to export from the file. On import, you can easily rename what has been exported, and you don't need to import using curly braces.

- What is object destructuring?

    Check the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)!

- How can you enable your `webpack.config.js` to do certain things in production versus development?

    In your config you can export a function that accepts an argument indication the environment. Then when you bundle with `webpack` you can pass along a value indicating the environment you'd like to build for.

### Part 2

Refactor your `Person` example from the JSX exercises to use Webpack and run the application using the `webpack-dev-server`.

