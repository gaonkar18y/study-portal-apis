import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import bodyParserXml from 'body-parser-xml';

bodyParserXml(bodyParser);

import authRoutes from './routes/authRoutes';
import coursesRoutes from './routes/coursesRoutes';

var app = express();

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

app.use('/auth', authRoutes);
app.use('/courses', coursesRoutes);

export default app;
