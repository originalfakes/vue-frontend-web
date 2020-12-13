module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': [0, 'allow-null'], // 要求使用 === 和 !==
    "indent": ["error", 4, { "SwitchCase": 1}],
    "import/extensions": "off", // 取消對副檔名的驗證
    // "max-len" : ["error", {code : 400}],
    "comma-dangle": [2, 'always-multiline'],
    "eol-last": [2, 'always'],
    "no-trailing-spaces": 2,
    "quotes": [2, 'single'],
    "spaced-comment": 2, // 註解前有空白
    "no-var": 2,
    "prefer-template": 2,
    "arrow-spacing": 2,
  },
};
