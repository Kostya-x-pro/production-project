import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    const newConfig = { ...config };

    newConfig.resolve = newConfig.resolve || {};
    newConfig.resolve.modules = newConfig.resolve.modules || [];
    newConfig.resolve.extensions = newConfig.resolve.extensions || [];

    newConfig.resolve.modules.push(paths.src);
    newConfig.resolve.extensions.push('.ts', '.tsx');
    newConfig.module = newConfig.module || { rules: [] };
    newConfig.module.rules = newConfig.module.rules || [];
    newConfig.module.rules.push(buildCssLoaders(true));

    newConfig.module.rules = newConfig.module.rules
        .filter((rule): rule is RuleSetRule => typeof rule === 'object' && rule !== null)
        .map((rule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

    newConfig.module.rules.push(buildSvgLoader());

    return newConfig;
};
