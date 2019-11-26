import {EggAppConfig, PowerPartial} from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};
    config.sequelize = {
        dialect: 'postgres',
        host: '118.190.84.62',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'assistant',
        timezone: '+08:00',
        define: {
            underscored: false,
        },
    };
    config.redis = {
        client: {
            port: 6378,          // Redis port
            host: '127.0.0.1',   // Redis host
            password: '123456',
            db: 0,
        },
    };
    config.QX_CO = require('./qx_co');
    return config;
};
