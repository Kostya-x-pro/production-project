import type {
    Configuration as
    DevServerConfiguration,
} from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // для настройки корневого роутинга
        hot: true,
    };
}
