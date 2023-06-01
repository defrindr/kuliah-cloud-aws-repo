const routes = [
    {
        method: '*',
        path: '/v1',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/v1',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
];

module.exports = routes;
