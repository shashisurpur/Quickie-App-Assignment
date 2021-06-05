import Schema from '../models/schema.js';
  
import express from 'express';
import mongoose from 'mongoose';


const router = express.Router();

export const getPosts = async (req,res) => {
    try {
        const data = await Schema.find();

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

 export const createPost = async (req,res) => {
   const {id,companyName,symbol,marketCap,currentPrice } = req.body;

   const newPost = new Schema({id,companyName,symbol,marketCap,currentPrice});
    try {
       await newPost.save();
       res.status(201).json(newPost);
   } catch (error) {
    res.status(409).json({message: error.message});
   }
} 
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No post with id: ${id}`);

    await Schema.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}



export default router;