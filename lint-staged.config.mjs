export default {
  '*.{ts,tsx}': [
    'prettier --write',
    'jest --bail --findRelatedTests'
  ],
}
