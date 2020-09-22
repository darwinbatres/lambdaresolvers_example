## package.json

```json
{
  "name": "yourapp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@aws-amplify/ui-react": "^0.2.14",
    "@phuocng/react-pdf-viewer": "^1.7.0",
    "@react-pdf/renderer": "^1.6.11",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "aws-amplify": "^3.0.23",
    "moment": "^2.27.0",
    "numeral": "^2.0.6",
    "pdfjs-dist": "^2.4.456",
    "query-string": "^6.13.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-hook-form": "^5.7.2",
    "react-qr-reader": "^2.2.1",
    "react-rainbow-components": "^1.16.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1",
    "semantic-ui-calendar-react": "^0.15.3",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^1.2.1",
    "shortid": "^2.2.15",
    "sweetalert2": "^9.15.2",
    "uuid": "^8.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.1.0",
    "eslint-plugin-import": "^2.21.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react": "^7.20.0",
    "eslint-plugin-react-hooks": "^2.5.1",
    "husky": "^4.2.5",
    "lint-staged": "^10.2.10",
    "prettier": "^2.0.5"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "npm.lock": [
      "git rm --cached"
    ]
  }
}
```

## .eslintrc.js
```js
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "react/jsx-one-expression-per-line": [0, { allow: "none" }],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": ["off"],
    "react/prop-types": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
```

## .prettierrc
```
{}
```
