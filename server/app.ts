import * as express from 'express';
import * as pug from 'pug';
import * as path from 'path';

const app = express();

app.set('view engine', 'pug');
app.set('views',__dirname + '/views');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('index', {message:"A"});
});

app.get('/tabela', (req,res) => {
    res.render('tabela',{times:{PLGR:1,NR49:1,ERB:3}});
});


export default app;