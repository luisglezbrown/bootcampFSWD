/* MongoDBEjercicio 2 –Chat
        Vamos a crear un chat con mongo desde la Shell.
        1.Crear una colección para usuarios con la siguiente estructura: 
        username, email, password, birthdate, lastLogin, status
        (1 objeto con dos campos: online y available) y contacts.
*/

db.users.insertMany([
    {   
        username: "Luis",
        email: "luis@chat.com",
        password: "123456",
        birthdate: new Date(1983, 12, 24),
        lastLogin: new Date(2021, 05, 11, 10, 13),
        status: {
            online: true,
            available: true,
        },
        contacts: []
    },{   
        username: "Maria",
        email: "luis@chat.com",
        password: "123456",
        birthdate: new Date(1980, 10, 14),
        lastLogin: new Date(2021, 05, 11, 9, 54),
        status: {
            online: true,
            available: false,
        },
        contacts: []
    },{   
        username: "Loli",
        email: "loli@chat.com",
        password: "123456",
        birthdate: new Date(1983, 2, 14),
        lastLogin: new Date(2021, 05, 9, 23, 14),
        status: {
            online: false,
            available: false,
        },
        contacts: []
    },{   
        username: "Javier",
        email: "javier@chat.com",
        password: "123456",
        birthdate: new Date(1983, 5, 25),
        lastLogin: new Date(2021, 05, 10, 12, 59),
        status: {
            online: true,
            available: true,
        },
        contacts: []
    }
]);

// Actualizamos los de los usuarios
db.users.update(
    {_id : users[0]._id}, 
    {$set : {
        contacts : [users[1]._id, users[2]._id, users[3]._id]
    }}
);

db.users.update(
    {_id : users[1]._id}, 
    {$set : {
        contacts : [users[0]._id, users[2]._id]
    }}
);

db.users.update(
    {_id : users[2]._id}, 
    {$set : {
        contacts : [users[0]._id, users[1]._id]
    }}
);

db.users.update(
    {_id : users[3]._id}, 
    {$set : {
        contacts : [users[0]._id]
    }}
);


/*  2.Crear una colección chats con los siguientes campos: 
members(array de IDs) y messages(objetos con los campos from, 
bodyy createAt)*/

db.chats.insertMany([
    {
        members: [users[0]._id, users[2]._id, users[3]._id],
        messages: [
            {
                from: users[0]._id,
                body: "hola a todos, alguien ahí?",
                createAt: new Date(2021, 05, 11, 10, 13)
            }, {
                from: users[3]._id,
                body: "hola Luis, yo estoy conectado! Qué tal?",
                createAt: new Date(2021, 05, 11, 10, 14)
            }, {
                from: users[0]._id,
                body: "Bien, buscaba a Loli pero parece que no está online",
                createAt: new Date(2021, 05, 11, 10, 15)
            }, {
                from: users[3]._id,
                body: "Eso parece",
                createAt: new Date(2021, 05, 11, 10, 16)
            }, {
                from: users[2]._id,
                body: "Ehhhh, que estoy aquí",
                createAt: new Date(2021, 05, 11, 10, 18)
            }
        ]
    }, {
        members: [users[1]._id, users[2]._id],
        messages: [
            {
                from: users[1]._id,
                body: "hola Loli",
                createAt: new Date(2021, 05, 10, 5, 15)
            }, {
                from: users[2]._id,
                body: "hola Maria",
                createAt: new Date(2021, 05, 10, 5, 19)
            }, {
                from: users[1]._id,
                body: "Que tal?",
                createAt: new Date(2021, 05, 10, 5, 20)
            }, {
                from: users[2]._id,
                body: "Bien, liada con el ejercicio",
                createAt: new Date(2021, 05, 10, 5, 38)
            }
        ]
    }
]);


/* 4.Consultar todos los usuarios conectados y disponibles. */
db.users.find({"status.online" : true, "status.available" : true}).pretty();


/* 5.Cambiar todos los usuarios a conectados y actualizar la fecha del lastLogin. */
db.users.update({}, {$set: {"status.online": true, lastLogin: new Date()}}, {upsert: false, multi: true});

/* 6.Consultar los mensajes del chat en el que están los 3 usuarios. */
db.chats.find({}, {"messages.body": true}).limit(1).pretty();
db.chats.find({members: {$size: 3}}, {"messages.body": true}).pretty();

db.users.find({contacts: users[3]._id}).pretty();

/* MongoDBEjercicio 2 –Chat
Vamos a crear un chat con mongo desde la Shell.
1.Crear una colección para usuarios con la siguiente estructura: 
username, email, password, birthdate, lastLogin, status
(1 objeto con dos campos: online y available) y contacts.

2.Crear una colección chats con los siguientes campos: 
members(array de IDs) y messages(objetos con los campos from, 
bodyy createAt)

3.Crear 4 usuarios y 2 chats de ejemplo. 
Un chat sólo será entre 2 usuarios y el otro entre 3.

4.Consultar todos los usuarios conectados y disponibles.

5.Cambiar todos los usuarios a conectados y actualizar la fecha del lastLogin.
6.Consultar los mensajes del chat en el que están los 3 usuarios. */