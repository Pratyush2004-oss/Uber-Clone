import UserModel from "../models/user.models.js";

export const createUser = async ({ firstName, lastName, email, password }) => {
    if (!firstName || !email || !password)
        throw new Error('Please fill all the fields');
    const user = await UserModel.create({ name: { firstName, lastName }, email, password });
    return user;
}