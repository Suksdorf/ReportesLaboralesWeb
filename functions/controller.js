const admin = require('firebase-admin');
//var serviceAccount = require("./reporteslaborales-eeff3-firebase-adminsdk-izbrj-4aa2fdb2cc.json");
admin.initializeApp(/*{credential: admin.credential.cert(serviceAccount)}*/);

const db = admin.firestore();

const ctrl = {};

ctrl.leerTodosReportes = async (req, res) =>{
    let lista = [];
    const snapshot =  await db.collection('reportes').get();

    (await snapshot).forEach(doc =>{
        lista.push(doc.data())
    })

    res.send(lista);
}

module.exports = ctrl;