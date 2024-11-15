const { join } = require("path");

const flecss = require("flecss");


module.exports = (rJS, filesystem, config, isDev, $PATH) => {
    const configWithDefaults = {
        inPath: ".",
        outPath: ".",
        flecssLibrary: "standalone",
        
        ...config
    };
    
    const transpiler = flecss.createTranspiler({
        development: isDev,
        library: configWithDefaults.flecssLibrary,
        variables: (filesystem.get("__overrides.scss") ?? { contents: "" }).contents
    });

    const files = [];
    filesystem
    .get(configWithDefaults.inPath)
    .traverse((file) => {
        if(/^_/.test(file.name)) return;
        
        files.push(
            new rJS.File(
                join(configWithDefaults.outPath, `${file.name}.css`),
                transpiler.fromFile(join($PATH, file.relativePath)).css
            )
        );
    });

    return files;
};