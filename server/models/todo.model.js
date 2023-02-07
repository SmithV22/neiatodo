
const mongoose = require('mongoose') ;
const TodoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter your todo name'],
            minLength: [2, 'Name must be longer than 2 characters'],
        },
        description: {
            type: String,
            minLength: [2, 'Name must be longer than 2 characters'],
        },
        important: {
            type: String,
            required: [true, 'Please say if this is important'],
            enum: {
                values: ['Yes', 'No']
            },
        },
    },
    {
        timestamps: true,
    }
) ;

module.exports = mongoose.model('Todo', TodoSchema) ;