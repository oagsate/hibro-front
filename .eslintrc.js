module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len':'off',
    "prettier/prettier": ["error", {
     "endOfLine":"auto"
   }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals:{
    appGlobals:false
  }
};
