import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import log4js from 'log4js';
import path from 'path';

require('body-parser-xml')(bodyParser);

var app = express();

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

export const logger = log4js.getLogger('appLogs');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.xml({
  limit: '1MB',   // Reject payload bigger than 1 MB
  xmlParseOptions: {
    normalize: true,     // Trim whitespace inside text nodes
    normalizeTags: true, // Transform tags to lowercase
    explicitArray: false // Only put nodes in array if >1
  }
}));
 


export default app;
