export default {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: {ecmaVersion: 'latest', soursettings: {react: {version: '18.2'}}},
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', {allowContantExport: true}],
        'react/prop-types': 0
    }
}