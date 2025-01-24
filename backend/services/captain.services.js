import CaptainModel from "../models/captains.model.js";

export const createCaptain = async({
    firstName, lastName, password, email,
    color, plate, capacity, vehicleType
}) => {
    if(!firstName || !email || !password || !color || !plate || !capacity || !vehicleType)
        throw new Error('Please fill all the fields');
    const captain = await CaptainModel.create({
        name: { firstName, lastName },
        email,
        password,
        vehicle: {
            plate,
            capacity,
            color,
            vehicleType
        }
    });
    return captain;
}