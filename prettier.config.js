module.exports = {
  singleQuote: true,
  semi: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'none',
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 120,
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: ['prettier-plugin-tailwindcss'],
}