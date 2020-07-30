
import appServer from './controller';

process.on('exit', () => {
    console.log('on exit called.');
});

process.on('SIGTERM', () => {
    console.log('siganl terminate called');
    process.exit(0);
});

var server  = appServer.listen(8081,() => {
    console.log(server.address());
    var host = server.address().address;
    var port = server.address().port;
    console.log(`server is started at http://${host}:${port}`);
});