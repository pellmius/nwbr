import app from '../app';
import * as http from 'http';
const port = process.env.PORT || 3000;
app.set('port',port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
