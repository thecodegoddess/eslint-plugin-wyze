/* eslint-disable global-require */
module.exports = {
  rules: {
    'func-call-arg-spacing': require('./lib/rules/func-call-arg-spacing'),
    'func-params-spacing': require('./lib/rules/func-params-spacing'),
    'max-file-length': require('./lib/rules/max-file-length'),
    'newline-after-export': require('./lib/rules/newline-after-export'),
    'sort-destructuring-keys': require('./lib/rules/sort-destructuring-keys'),
    'sort-imports': require('./lib/rules/sort-imports'),
    'space-around-conditional': require('./lib/rules/space-around-conditional'),
  },
  configs: {
    recommended: {
      rules: {
        'wyze-update/func-call-arg-spacing': 'error',
        'wyze-update/func-params-spacing': 'error',
        'wyze-update/max-file-length': 'error',
        'wyze-update/newline-after-export': 'error',
        'wyze-update/sort-destructuring-keys': 'error',
        'wyze-update/sort-imports': 'error',
        'wyze-update/space-around-conditional': 'error',
      },
    },
  },
}
