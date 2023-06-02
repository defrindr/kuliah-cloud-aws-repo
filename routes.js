const note = require('./model/note.js');
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: async (request, h) => {
            let infos = await note.findAll();
            return h.response({message: 'Success get data', data: infos});
        },
    },
    {
        method: 'GET',
        path: '/{id}',
        handler: async(request, h) => {
            let id = request.params.id;
            if(id === "") return h.response({message: 'param cant be empty'}).code(400);
            let infos = await note.findOne({where: {id}});
            if(!infos)  return h.response({message: 'Data #'+id+' not found'}).code(404);
            return h.response({message: 'Success get data', data: infos});
        },
    },
    {
        method: 'POST',
        path: '/',
        handler: async (request, h) => {
            try {
                let newNote = new note(request.payload);
                await newNote.save();
                return h.response({'message': 'success create'}).code(201);
            } catch(e) {
                console.log(e);
                return h.response({'message': 'Error handle request'}).code(500);
            }
        },
    },
    {
        method: 'PUT',
        path: '/{id}',
        handler: async(request, h) => {
            try {
                let id = request.params.id;
                if(id === "") return h.response({message: 'param cant be empty'}).code(400);
                let infos = await note.findOne({where: {id}});
                if(!infos)  return h.response({message: 'Data #'+id+' not found'}).code(404);
                let result = await note.update(request.payload, {where: {id}});
                console.log(result);
                return h.response({'message': 'success update #' + id}).code(201);
            } catch(e) {
                console.log(e);
                return h.response({'message': 'Error handle request'}).code(500);
            }
        },
    },
    {
        method: 'DELETE',
        path: '/{id}',
        handler: async(request, h) => {
            try {
                let id = request.params.id;
                if(id === "") return h.response({message: 'param cant be empty'}).code(400);
                let infos = await note.findOne({where: {id}});
                if(!infos)  return h.response({message: 'Data #'+id+' not found'}).code(404);
                let result = await note.destroy({where: {id}});
                console.log(result);
                return h.response({'message': 'success delete #' + id}).code(201);
            } catch(e) {
                console.log(e);
                return h.response({'message': 'Error handle request'}).code(500);
            }
        },
    },
];

module.exports = routes;
