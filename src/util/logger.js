import log4js from 'log4js';
import path from 'path';

log4js.configure({
    appenders: {
      appLogs: {
        type: 'file',
        filename: path.join(__dirname, 'logs/appLogs.log'),
        maxLogSize: 3000000,
        backups: 20,
        compress: true 
      } 
    },
    categories: { default: { appenders: ['appLogs'], level: 'debug' } }
  });
  
const logger = log4js.getLogger('appLogs');
  
export default logger;