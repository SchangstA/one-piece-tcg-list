const   express                 = require('express'),
        Set                     = require('./dbFiles/set'),
        dbOperation             = require('./dbFiles/dbOperation'),
        cors                    = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async(req, res) => {
        console.log('Called');
        const result = await dbOperation.getSets(req.body.name);
        res.send(result.recordset);
});
app.post('/quit', function(req, res) {
        console.log('Called quit');
        res.send({result: 'Good Bye'})
})

let OP05 = new Set('OP05', 'Awakening of the New Era');

// dbOperation.createSet(OP05);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));