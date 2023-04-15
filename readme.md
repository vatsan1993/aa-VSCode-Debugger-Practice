# Debugging launch config.

"launch": {
"version": "0.2.0",
"configurations": [
{
"type": "node",
"request": "launch",
"name": "Launch",
"console": "integratedTerminal",
"program": "${file}"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Mocha Tests",
            "program": "${workspaceFolder}/node_modules/mocha/bin/\_mocha",
"args": [
"-u",
"bdd",
"--timeout",
"999999",
"--colors",
"${workspaceFolder}/test"
],
"internalConsoleOptions": "openOnSessionStart",
"skipFiles": [
"<node_internals>/**"
]
}
]
}
