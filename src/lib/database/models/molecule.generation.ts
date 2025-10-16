import {Schema, model, models} from 'mongoose';

const moleculeGenerationHistorySchema = new Schema({
    smiles: { type:String, required: true },
    numMolecules:  { type:Number, required: true },
    minSimilarity: {type: Number, required: true, },
    particles: { type: Number, required: true},
    iterations: {type: Number, required: true},
    generatedMolecules: [
        {
            structure: {type: String, required: true},
            score: {type: Number, required: true},
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: { type: Date, default: Date.now},

},
{timestamps: true},
);

const moleculeGenerationHistory = models.moleculeGenerationHistory || model("moleculeGenerationHistory", moleculeGenerationHistorySchema)


export default moleculeGenerationHistory;