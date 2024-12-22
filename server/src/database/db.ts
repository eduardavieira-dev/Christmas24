import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDatabase = async (): Promise<void> => {
    console.log('Wait connecting to the database');
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}`);
        console.log('MongoDB Atlas Connected');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw new Error('Failed to connect to the database');
    }
};
