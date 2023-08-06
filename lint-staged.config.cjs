module.exports = {
  '**/*.ts?(x)': () => 'npm run typecheck',
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '*.{json,yaml}': ['prettier --write'],
}
