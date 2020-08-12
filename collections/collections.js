import { Mongo } from 'meteor/mongo';

export const Todo  = new Mongo.Collection("todo");
export const User  = new Mongo.Collection("user");