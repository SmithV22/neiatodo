
const express = require('express')  ;
const router = express.Router() ;
const { getTodos, addTodo, editTodo, deleteTodo, todoDetails } = require('../controllers/todo.controller') ;


router.route('/').get(getTodos).post(addTodo) ;
router.route('/:id').put(editTodo).delete(deleteTodo).get(todoDetails) ;

module.exports = router ;
