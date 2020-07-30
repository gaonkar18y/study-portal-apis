import appServer from './controller';
import cluster from 'cluster';
import os from 'os';

let activeWorkers = {};

if (cluster.isMaster) {
    console.log('Creating forks');
    for ( let i=0; i<1; i++ ) {
        let newWorker = cluster.fork();
        activeWorkers[newWorker.id] = newWorker;
    }

    cluster.on('exit', (w)=>{
        console.log(`Worker ${w.id} exited`);
    });

    cluster.on('online',(w)=>{
        console.log(`Worker ${w.id}  is online`);
    });

    cluster.on('listening',(w) => {
        console.log(`Worker ${w.id}  is listening`);
    });

} else {
    setTimeout(()=>{
        var server  = appServer.listen(8080,() => {
            console.log(server.address());
            var host = server.address().address;
            var port = server.address().port;
            console.log(`server is started at http://${host}:${port}`);
        });
        server.timeout = 250000;
    }, 1000);
   
}
