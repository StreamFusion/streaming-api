import express, {Application} from 'express';
import {UserRouter} from "./router/user.router";

class Server {

    public app: Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
    }

    start(callback: () => void) {
        this.app.use(express.json());
        this.app.use('/api/u', new UserRouter().router);
        this.app.listen(this.port, callback);
    }

    public get(endpoint: string, callback: (req: any, res: any) => void) {
        this.app.get(endpoint, callback);
    }
}


const server = new Server(3000);

server.start(() => {
    console.log('Server running on port 3000');
});


server.get('/', (_req, res) => {
    res.json({message: 'Hello World'});
});

server.get('/ping', (_req, res) => {
    res.json({
        message: 'pong!',
        timestamp: new Date().toISOString(),
        status: 200,
        result: 'Ok'
    });
});
