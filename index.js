module.exports = {
  plugins: ["eslint-plugin-jest"],
  extends: ["@galdanm/eslint-config-base", "plugin:jest/all"],
  env: { es6: true, "jest/globals": true },
};
