const mongoose = require('mongoose');
//falafellas
const TaskSchema = new mongoose.Schema({
    titulo: String,
    descricao: String
});

const TaskModel = mongoose.model('Task', TaskSchema);

class Task {
    constructor(body) {
        this.body = body;
    }

    async registraTask() {
        await TaskModel.create({
            titulo: this.body.nome,
            descricao: this.body.descricao
        }).then((dados_enviados) => {console.log(dados_enviados)}).catch(e=>console.log(e));
    }

    async deletaTask(id) {
        const apgado = await TaskModel.findByIdAndRemove(id);

        console.log(`DELETADO: ${apgado}`);
    }

    async pegaDados(id) {
        const dadosTarefa = TaskModel.findById(id)
        console.log(`Tarefa que será editado: ${dadosTarefa}`);
    
        return dadosTarefa;
    }

    async editaTask(id, body){
        await TaskModel.findByIdAndUpdate(id, {
            titulo: body.titulo,
            descricao: body.descricao,
        }, { new: true });
    }
}

// Métodos Estaticos
Task.buscaTasks = async function() {
    const tasks = await TaskModel.find()
    return tasks;
}

module.exports = Task;
