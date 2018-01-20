module.exports = {
  extends: [
    'airbnb-base', 'plugin:jest/recommended'
  ],
  plugins: ['jest'],
  env: {
    'node': true,
    'jest/globals': true
  }
};
