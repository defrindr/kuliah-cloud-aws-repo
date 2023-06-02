const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            let params = request.query
            let infos = [{id: '1', content: 'dummy'}];
            return h.response({message: 'Success get data', data: infos});
        },
    },
    {
        method: 'GET',
        path: '/{id}',
        handler: (request, h) => {
            let id = request.params.id;
            if(id === "") return h.response({message: 'param cant be empty'}).code(400);
            let infos = {id, content: 'dummy'};
            return h.response({message: 'Success get data', data: infos});
        },
    },
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            return h.response({'message': 'success create'}).code(201);
        },
    },
    {
        method: 'PUT',
        path: '/{id}',
        handler: (request, h) => {
            let id = request.params.id;
            if(id === "") return h.response({message: 'param cant be empty'}).code(400);
            return h.response({'message': 'success update #' +id}).code(200);
        },
    },
    {
        method: 'DELETE',
        path: '/{id}',
        handler: (request, h) => {
            let id = request.params.id;
            if(id === "") return h.response({message: 'param cant be empty'}).code(400);
            return h.response({'message': 'success delete #' +id}).code(200);
        },
    },
];

module.exports = routes;
