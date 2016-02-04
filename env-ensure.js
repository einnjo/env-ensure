'use strict';

var path = require('path');

var packageJson;
try {
    packageJson = require(path.join(process.cwd(), 'package.json'));
} catch (e) {
    console.error('[env-ensure] Error when trying to read package.json\n', e.stack);
    process.exit(1);
}

var environmentVariables = packageJson['env-ensure'];

if (!environmentVariables) {
    console.error('[env-ensure] Check failed. No "env-ensure" key in package.json.');
    process.exit(1);
}

var missingVariables = [];
environmentVariables.forEach(function (variable) {
    var variableEnv = process.env[variable];
    if (variableEnv === undefined || ((typeof variableEnv === 'string') && variableEnv.trim() === '')) {
        missingVariables.push(variable);
    }
});

if (missingVariables.length) {
    console.error('[env-ensure] Check failed. Environment is missing the following variables:\n', missingVariables);
    process.exit(1);
}

console.log('[env-ensure] Check passed.');
