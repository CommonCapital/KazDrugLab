'use server';
import mongoose from "mongoose";
import Group from "../database/models/group.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { Trykker } from "next/font/google";


export async function createGroup(
    groupName: string,
    creatorId: string,
    memberIds: string[] = [],
) {
    try {
        await connectToDatabase();
        const members = Array.from(
            new Set([
                creatorId,
                ...memberIds.map((id) => new mongoose.Types.ObjectId(
                    id
                ))
            ]),
        );

        const newGroup = await Group.create({
            name: groupName,
            createdBy: creatorId,
            members: members,
        });


        return JSON.parse(JSON.stringify(newGroup));

    } catch (error) {
       console.error(error);
       handleError(error); 
    }
}

export async function addMemberToGroup(groupId: string, userId: string) {
    try {
        await connectToDatabase();
        const group = await Group.findById(groupId);
        if (!group) throw new Error("Group not found");
        if (!group.members.includes(userId)) {
            group.membbers.push(userId);
            await group.save();

        }

        return JSON.parse(JSON.stringify(group))
    } catch (error) {
        handleError(error)
    }
}

export async function addMessageToGroup(
    groupId: string,
    userId: string,
    text: string,
) {
    try {
        await connectToDatabase();
        const group = await Group.findById(groupId);
        if (!group) throw new Error("Group not found")
            const message = {
        sender: userId,
        text: text
                            };


    group.messages.push(message);
    await group.save();
    return JSON.parse(JSON.stringify(group));
                            


    } catch (error) {
        handleError(error)
    }
}

export async function getGroupById(groupId: string) {
    try {
        await connectToDatabase();
        const group = await Group.findById(groupId).populate(
            'members',
            'firstName lastName photo ',
        );
        if (!group) throw new Error("Group not found");

        return JSON.parse(JSON.stringify(group))

    } catch (error) {
        handleError(error)
    }
};

export async function getAllGroups() {
    try {
        await connectToDatabase();
        const group = await Group.find().populate(
            'members',
            'firstName lastName photo',
        );
        return JSON.parse(JSON.stringify(group))
    } catch (error) {
        handleError(error);
    }
}
export async function getGroupMessages(groupId: string) {
    try {
        await connectToDatabase();
        const group = await Group.findById(groupId).populate(
            'messages.sender',
            'firstName lastName photo',
        );
        if (!group) throw new Error("Group not found");

        return JSON.parse(JSON.stringify(group.messages));
    } catch (error) {
        handleError(error)
    }
};
