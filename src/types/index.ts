export enum Role {
  USER = "user",
  ASSISTANT = "assistant",
}

export interface IMessage {
  role: Role;
  content: string;
  timestamp?: Date;
  _id?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatResponse {
  response: string;
}
