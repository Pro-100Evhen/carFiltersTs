module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier', // Вимикає стилістичні правила ESLint, що дублюються Prettier
   ],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react', 'react-hooks'],
   rules: {
      'no-unused-vars': 'warn', // Попередження про невикористані змінні
      'react/prop-types': 'off', // Вимкнення перевірки PropTypes (якщо використовуєш TypeScript)
      'react/react-in-jsx-scope': 'off', // Не потрібен у нових версіях React
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
};
