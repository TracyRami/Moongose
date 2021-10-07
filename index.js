var mongoose = require("mongoose");

// Conexion a la base de datos
mongoose.connect("mongodb://localhost/tarea2");

// Mensaje de error con la base de  datos en caso de que exista
mongoose.connection.on("error",function(e){
    console.error(e);
});
//Mensaje de conexion exitosa a la base de datos
mongoose.connection.once("open",function(e){
    console.log('Conexion a la base de datos exitosa')

});

//Declaración de los schemas
var Entrada_Shema = mongoose.Schema({
    titulo:String,
    descripcion:String,
    detalle:String,
    estado:{
        type:Boolean,
        default:false,

    },
   
    
    fecha_creacion:{
        type:Date,
        default:Date.now

    },
    fecha_modificacion:{
        type:Date,
        default:Date.now
    },
});
//creacion del modelo
var model_entrada = mongoose.model("entradas",Entrada_Shema);
// Se inserta un objeto utilizando el modelo


model_entrada.create({titulo:"Ing.Software",descripcion: "Sotfware Libre",detalle:"Utn"},
function(err){
    if(err)return console.error(err);
}
);

//Declaración de los schemas
var Usuario_Shema = mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String,
    estado:{
        type:Boolean,
        default:false,

    },
    fecha_nacimiento:{
        type:Date,
        default:Date.now

    },
    
    fecha_creacion:{
        type:Date,
        default:Date.now

    },
    fecha_modificacion:{
        type:Date,
        default:Date.now
    },
});
//creacion del modelo
var model_usuario = mongoose.model("usuarios",Usuario_Shema);
// Se inserta un objeto utilizando el modelo


model_usuario.create({nombre:"Karen",apellidos:"Lopez",email: "kalopez@gmail.com"},
function(err){
    if(err)return console.error(err);
}
);



