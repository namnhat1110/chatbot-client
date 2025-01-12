import { ChatAPI } from "@/api/chat.api";
import { axiosInstance } from "@/api/axios.config";

describe("ChatAPI", () => {
  describe("sendMessage", () => {
    it("should send a message and return the response", async () => {
      const mockResponse = { data: { response: "Hello" } };
      vi.spyOn(axiosInstance, "post").mockResolvedValue(mockResponse);

      const response = await ChatAPI.sendMessage("Hi");

      expect(response).toEqual(mockResponse.data);
      expect(axiosInstance.post).toHaveBeenCalledWith("/chat", {
        message: "Hi",
      });
    });
  });

  describe("getChatHistory", () => {
    it("should fetch chat history and return the response", async () => {
      const mockResponse = { data: [{ role: "user", content: "Hi" }] };
      vi.spyOn(axiosInstance, "post").mockResolvedValue(mockResponse);
      vi.spyOn(axiosInstance, "get").mockResolvedValue(mockResponse);

      const response = await ChatAPI.getChatHistory();

      expect(response).toEqual(mockResponse.data);
      expect(axiosInstance.get).toHaveBeenCalledWith("/history");
    });
  });
});
