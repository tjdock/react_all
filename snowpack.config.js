/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    // public: '/',
    // src: '/dist',
    public: { url: '/', static: true, resolve: false },
    src: '/'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    ["@snowpack/plugin-sass", {
      compilerOptions: {
        style: "compressed",
        sourceMap: false,
      }
    }]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
    target: 'es2018', //'es2020' | 'es2019' | 'es2018' | 'es2017';
    // splitting: true,
    // preload: true,
    // treeshake: true,
    // manifest:true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
    //open: 'none',
    bundle: false,
  },
  buildOptions: {
    clean: true,
    out: 'build'
  },
  exclude: [
    '**/node_modules/**/*'
  ]
};
