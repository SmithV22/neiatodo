
const asyncHandler = require('express-async-handler') ;

const Todo = require('../models/todo.model') ;

const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find({})
    res.status(200).json(todos) ;
}) ;

const addTodo = asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Oops! Please fill out all necessary fields')
    }
    const todo = await Todo.create(req.body)
    res.status(200).json(todo)
}) ;

const editTodo = asyncHandler( async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const editedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    res.status(200).json(editedTodo) ;
}) ;

const todoDetails = asyncHandler( async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    res.status(200).json(todo)
})

const deleteTodo = asyncHandler( async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await todo.remove()
    res.status(200).json({ id: req.params.id })
})




module.exports = {
    getTodos, addTodo, editTodo, todoDetails, deleteTodo
} ;