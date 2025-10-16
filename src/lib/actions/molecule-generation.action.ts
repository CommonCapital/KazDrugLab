'use server';

import moleculeGenerationHistory from "../database/models/molecule.generation";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import mongoose from "mongoose";


export async function createMoleculeGenerationHistory(payload: MoleculeGenerationHistoryType, userId: string,) {
    try {
        await connectToDatabase();
        const newHistoryEntry = await moleculeGenerationHistory.create({
            ...payload,
            user: new mongoose.Types.ObjectId(userId)

        });

        return JSON.parse(JSON.stringify(newHistoryEntry));

    } catch (error) {
        console.error(error);
        handleError(error);
    }
};

export async function getMoleculeGenerationHistoryByUser(userId: string) {
    try {
        await connectToDatabase();
        const historyEntries = await moleculeGenerationHistory.find({
            user: userId
        }).sort({createdAt: -1});

        return JSON.parse(JSON.stringify(historyEntries));

    } catch (error) {
        console.error(error);
        handleError(error);
    }


}


export async function getMoleculeGenerationHistoryById(historyId: string) {
    try {
        await connectToDatabase();
        const historyEntry = await moleculeGenerationHistory.findById(historyId);
        if (!historyEntry) throw new Error("Histroy entry not found")
            return JSON.parse(JSON.stringify(historyEntry));
    } catch (error) {
        console.error("Error retrieving histroy entry by ID:", error)
        handleError(error)
    }
}


export async function deleteMoleculeGenerationHistory(entryId: string) {
    try {
        await connectToDatabase();
        const deletedEntry = await moleculeGenerationHistory.findByIdAndDelete(entryId);
        return JSON.parse(JSON.stringify(deletedEntry));

    } catch (error) {
        handleError(error)
    }
}