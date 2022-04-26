module.exports = [
    {
        method: 'GET',
        path:'/',
        handler:(request , h) =>{
        return "<h1>Hello World!!</h1>"
        }
    },
    { 
        method: 'GET',
        path: '/users/{id}', 
        handler: function (request , h) {
            return "hey"
        } 
    }
];