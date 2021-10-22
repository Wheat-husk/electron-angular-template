module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'init',
        'merge',
        'feat',
        'fix',
        'docs',
        'style',
        'build',
        'refactor',
        'revert',
        'test',
        'perf',
        'ci',
        'chore',
        'delete',
      ],
    ],
  },
};
