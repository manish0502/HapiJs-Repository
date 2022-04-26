module.exports = [
    {
        method: 'GET',
        path:'/',
        handler:(request , h) =>{
         return h.file('../static-files/welcome.html')
        }
    },
    {
        method: 'GET',
        path:'/dynamic',
        handler:(request , h) =>{
            const data={
                name:'manish kumar'
            }
         return h.view('index' ,data)
        }
    },
    { 
        method: 'GET',
        path: '/download', 
        handler: function (request , h) {
            return h.file('welcome.html',{
                mode:'inline',
                filename:'welcome.download.html'
            })

        } 
    },
    { 
        method: 'GET',
        path: '/users', 
        handler: function (request , h) {
            return "<h1>USER PAGE</h1>"

        } 
    },
    { 
        method: 'POST',
        path: '/login', 
        handler: function (request , h) {
            //console.log(request.payload.username)
           // console.log(request.payload.password);


            // if(request.payload.username ==="manish" && request.payload.password ==="password"){
            //     return h.file('../static-files/loggedIn.html')
            // }
            // else{
            //     return h.redirect('/');
            // }

            return h.view('index' ,{username: request.payload.username})

        } 
    },
    // WildCard route
    { 
        method: 'GET',
        path: '/{any*}', 
        handler: function (request , h) {
            return "Oh No , You must be lost"

        } 
    },

    // route to locate location
    { 
        method: 'GET',
        path: '/location', 
        handler: function (request , h) {
            const location = request.location 
            if(location){
                return h.response(location);
            }
            else {
                return `<h1>Your location is not enabled by default</h1>`
            }
        } 
    },
];