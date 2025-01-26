import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainsSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First Name must be at least 3-characters long"]
        },
        lastName: {
            type: String,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "color must be at least 3-characters long"]
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate Number must be at least 3-characters long"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1 person"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    },

    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})

captainsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "24h" });
    return token;
}

captainsSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainsSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const CaptainModel = mongoose.model("captains", captainsSchema);
export default CaptainModel;
