const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learn_mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {

    console.log("Conexão realizada com sucesso");
}).catch((err) => {

    console.log("Erro: Não foi possível realizar a conexão" + err);
});

const PagamentoSchema = mongoose.Schema({

    nome: {

        type: String,
        require: true
    },

    valor: {

        type: Number,
        require: true
    }
});

var Pagamento = mongoose.model('Pagamentos', PagamentoSchema)

new Pagamento({

    nome: "Energia",
    valor: 250
}).save().then(() => {

    console.log("Pagamento cadastrado com sucesso.")

}).catch((err) => {

    console.log("Erro: Não foi possível cadastrar o pagamento." + err)

})