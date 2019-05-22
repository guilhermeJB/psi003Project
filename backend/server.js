var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var xlsx = require('xlsx');

var Issue = require('./models/issue');
var Professor = require('./models/professor');
var UC = require('./models/uC');


const app = express();
const router = express.Router();

//npm xlsx
/* var obj = xlsx.parse(__dirname + '/DI-2018_19.xlsx'); // parses a file

console.log(obj); */

var workbook = xlsx.readFile('DI-2018_19.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://psi003:psi003@localhost:27017/psi003?retryWrites=true&authSource=psi003',  {useNewUrlParser: true}, (err) => {
    if(err)
        console.log(err);
    else
        console.log('Connected.');
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/issues/:id').get((req, res) => {
    var name = re.params.id
    Issue.findOne({}, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);

    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added sucessfully'});
            console.log("success!");
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        })
});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load document'));
        else{
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    });
});



    var joao = new Professor({ nome: "Joao"});

    joao.save(function (err) {
        if (err) console.log("primeiro" + err);
      
        var uc = new UC({
            nome: "Aplicacoes Web",
            regente: joao._id });
      
        uc.save(function (err) {
          if (err) return console.log("segundo" + err); //mongo --username psi003 --password --authenticationDatabase psi003 appserver.alunos.di.fc.ul.pt/psi003
          // thats it!
        });
      });

     var query = Professor.find();
     query.select("_id nome");

     query.exec(function(err, data){
        if(err) return handleError(err);

        console.log(data);
        console.log("---------------------------------------------------------------------------------------------------------------");
        console.log(data[0]);
     });

      //console.log(myId);


      //console.log(UC.find({_id: myId}).regente.nome);



app.use('/', router);

app.listen(3003, () => console.log("Express server running on port 3003"));