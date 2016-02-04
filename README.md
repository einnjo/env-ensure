# env-ensure
Simple environment variable checker.

```
$ npm install --save env-ensure
```

All you need to do is declare the required environment variables in your package.json file under the `env-ensure` key.

```json
{
  "name": "lambda",
  "version": "1.0.0",
  "env-ensure": [
    "NPM_TOKEN",
    "AWS_SECRET_ACCESS_KEY",
    "ANOTHER_REQUIRED_VARIABLE"
  ]
}
```

Then run the `env-ensure` command from the directory containing your package.json. `env-ensure` will read the declared variables from the file and ensure that all of them are present in the environment.

```
$ env-ensure
[env-ensure] Check passed.
```

`env-ensure` will report any missing variables.

```
$ env-ensure
[env-ensure] Check failed. Environment is missing the following variables:
 [ 'AWS_ACCESS_KEY_ID',
  'AWS_SECRET_ACCESS_KEY',
  'ANOTHER_REQUIRED_VARIABLE' ]
```

A variable is defined if its value as read from the environment is not undefined or an empty string.
