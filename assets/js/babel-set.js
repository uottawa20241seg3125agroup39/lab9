// Define a preset
Babel.registerPreset("env-plus", {
    presets: [[Babel.availablePresets["env"], { loose: true,modules: false }]],
    plugins: [
        [
            Babel.availablePlugins["proposal-decorators"],
            { version: "2023-01" },
        ],
    ],
});