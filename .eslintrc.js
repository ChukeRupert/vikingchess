module.exports = {
    root: true,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  };
  