import { GoogleGenAI } from "@google/genai";
import { PROFILE_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the interactive AI Architect for Sai Rahul Adepu's portfolio.
Your personality is: Sophisticated, Professional, High-Tech, and Concise.
You are embedded in a high-end portfolio website.

Here is Sai's Data context (Resume):
${JSON.stringify(PROFILE_DATA)}

Instructions:
1. Answer questions about Sai's experience, skills, and projects based strictly on the provided data.
2. If asked about contact info, provide the email or LinkedIn from the data.
3. Keep answers elegant and brief. Avoid long paragraphs. Use bullet points if necessary.
4. If asked something outside the context, politely state that your database is limited to professional inquiries.
`;

export const sendMessageToGemini = async (history: { role: string; content: string }[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }],
      })),
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. Please try again.";
  }
};
