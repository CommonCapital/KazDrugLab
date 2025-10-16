import {Schema, model, models} from 'mongoose';
import { create } from 'node:domain';

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const groupSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
     type: String,
     ref: 'User',
     required: true,   
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [messageSchema],
});

const Group = models?.Group || model("Group", groupSchema);
export default Group;