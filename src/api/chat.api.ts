import { AxiosError } from "axios";
import { ChatResponse, IMessage } from "@/types";
import { axiosInstance } from "@/api/axios.config";

export class ChatAPI {
  static async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const response = await axiosInstance.post<ChatResponse>("/chat", {
        message,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to send message"
        );
      }
      throw error;
    }
  }

  static async getChatHistory(): Promise<IMessage[]> {
    try {
      const response = await axiosInstance.get<IMessage[]>("/history");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch chat history"
        );
      }
      throw error;
    }
  }
}
