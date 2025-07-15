import { Project } from 'ts-morph';
import path from 'path';
import fs from 'fs';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}

// Создаем index.ts в каждой папке компонента
componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);

    if (!indexFile) {
        const componentName = directory.getBaseName();
        const componentFilePath = `${directory.getPath()}/${componentName}.tsx`;

        // Проверяем, существует ли файл компонента с таким именем
        if (fs.existsSync(componentFilePath)) {
            const sourceCode = `export * from './${componentName}';`;
            const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
            file.save();
        }
    }
});

// Обновляем импорты
files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        let value = importDeclaration.getModuleSpecifierValue();

        // Очистка от всех повторяющихся "@/"" в начале
        while (value.startsWith('@/')) {
            value = value.slice(2);
        }

        const segments = value.split('/');
        const isSharedLayer = segments[0] === 'shared';
        const isUiSlice = segments[1] === 'ui';

        if (isAbsolute(value) && isSharedLayer && isUiSlice && segments.length === 2) {
            // Получаем все используемые идентификаторы из импортируемого выражения
            const namedImports = importDeclaration.getNamedImports();

            namedImports.forEach((namedImport) => {
                const name = namedImport.getName();

                // Обновляем модуль на '@/shared/ui/ComponentName'
                importDeclaration.setModuleSpecifier(`@/shared/ui/${name}`);
            });
        }
    });
});

project.save();
