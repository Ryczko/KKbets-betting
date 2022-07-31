import * as mongoose from 'mongoose';

interface IMessageShared {
  user: mongoose.Schema.Types.ObjectId;
  date: Date;
  message: string;
}

export type IMessageFrontend = IMessageShared;
export type IMessageBackend = IMessageShared;
