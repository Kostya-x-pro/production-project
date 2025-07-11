import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
    return (layers.some((layer) => value.startsWith(layer)));
}

files.forEach((sourseFile) => {
    const importDelcarations = sourseFile.getImportDeclarations();
    importDelcarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
