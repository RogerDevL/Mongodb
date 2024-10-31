const User = require("../models/User");

const UserController ={
    create: async (req, res) =>{
        try {
            const { nome, email, idade} = req.body;

            const user = await User.create({nome, email, idade});

            return res.status(200).json({msg:"User criado com sucesso.", user});

        } catch (error) {
            return res.status(500),json({msg:"Contate o Roger."})
        }
    },
    update: async (req, res) =>{
        try {
            const {id} = req.params;
            const{nome, email, idade} = req.body;
            const user = await User.findById(id);

            if(!user) {
                return res.status(404).json({msg:"User não encontrado."})
            }

            await user.findByIdAndUpdate(id, {
                nome, email, idade
            });

            return res.status(200).json({msg:"User atualizado com sucesso.", user});

        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
    delete: async (req, res) =>{
        try {
            const {id} = req.params;
            await User.findByIdAndDelete(id);
            return res.status(200).json({msg:"User deletado com sucesso!"})
        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
    getAll: async (req, res) =>{
        try {
            const user = await User.find();
            return res.status(200).json({user})
        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
    getOne: async (req, res) =>{
        try {
            const {id} = req.params;
            const user = await User.findById(id);
            if(!user) {
                return res.status(404).json({msg:"User não encontrado."})
            }
            return res.status(200).json({user});

        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    }
}

module.exports = UserController;