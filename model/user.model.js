import mongoose from "mongoose";

const UserSchema = ({
    name:{type:String},
    age:{type:Number},
    city:{type:String},
    country:{type:String}
})

export const UserModel =mongoose.model("users",UserSchema)

