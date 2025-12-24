
import { GoogleGenAI } from "@google/genai";
import { PROFILE_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the interactive AI Architect for Sai Rahul Adepu's portfolio.
Your personality is: Sophisticated, Professional, High-Tech, and Concise.
You are embedded in a high-end portfolio website.

Here is Sai's Data context (Software & Automation Engineer focused on Python):
${JSON.stringify(PROFILE_DATA)}

Instructions:
1. Answer questions about Sai's experience, skills, projects, and thought leadership articles based strictly on the provided data.
2. Focus on his automation career, full-stack projects, and his visionary outlook on the next 10 years of technology.
3. Articles to highlight:
   - "The Next 10 Years of Future Technology": Outlook on Quantum and AI.
   - "Agentic AI Revolution": Industrial transformation.
   - "Python for Hardware": Multi-SoC orchestration.
4. If asked about contact info, provide the email (adepusairahul260920@gmail.com) or LinkedIn (linkedin.com/in/sai-rahul123).
5. Keep answers elegant and brief. Use bullet points for project or article details.
6. If asked something outside the context, politely state that your database is limited to professional and technological inquiries regarding Sai Rahul's career.
`;

export const sendMessageToGemini = async (history: { role: 'user' | 'model'; content: string }[], message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.content }],
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. Please try again.";
  }
};
