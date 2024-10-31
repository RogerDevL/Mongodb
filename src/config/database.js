const mongoose = require("mongoose");

const connectDB = async () => {
    // URL DE CONEXAO

    try {
        const mongoURI = "mongodb://localhost:27017/bancomongo";
         mongoose.connect(mongoURI);
         console.log("Mongo conectado!");
    } catch (error) {
        console.log("Erro ao conectar o mongo:", error);
        process.exit(1);
    }
}

module.exports = connectDB;