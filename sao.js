module.exports = {
    prompts: {
        projectName: {
            message: `Name:`,
            default: ':folderName:'
        },
        description: {
            message: `Description:`,
            default: 'description'
        },
        outputFileName: {
            message: `Webpack output file name:`,
            default: 'index'
        },
        libraryName: {
            message: `UMD library name:`,
            default: 'index'
        }
    },
    move: {
        gitignore: '.gitignore'
    },
    gitInit: true,
    installDependencies: true
};