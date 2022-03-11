const Task = require('../models/TaskModel');

exports.index = async function(req, res){
    const tasks = await Task.buscaTasks();
    res.render('form', { tasks });
    console.log(tasks);
}

exports.registraTarefa = async function(req, res){
    const task = new Task(req.body);
        
    await task.registraTask();

    res.redirect('back')
}

exports.deletaTarefa = async function(req, res){
    const task = new Task();

    await task.deletaTask(req.params.id);
    
    res.redirect('back');
}

exports.editaTarefaPage = async function(req, res){
    const task = new Task();

    const task_selecionada = await task.pegaDados(req.params.id)

    res.render('edit', {task: task_selecionada}) 
}   

exports.editaTarefa = async function(req, res) {    
    const task = new Task();

    await task.editaTask(req.params.id, req.body)

    res.redirect('/');
}