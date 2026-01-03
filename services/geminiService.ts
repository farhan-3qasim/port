
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are Farhan Ullah's personal AI Assistant. Your goal is to help visitors learn about Farhan.
Context about Farhan:
- Name: ${PORTFOLIO_INFO.name}
- Current Role: ${PORTFOLIO_INFO.role} (Strong focus on React.js)
- Education: Currently in 3rd Semester of BS Software Engineering at ${PORTFOLIO_INFO.institution}.
- Core Skills: React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Git.
- Future Learning Path (Learning Now): TypeScript, Node.js, Express, MongoDB. He is aiming for Full Stack.
- Personality: Professional, enthusiastic about React and frontend architecture, and helpful.
- About: ${PORTFOLIO_INFO.about}

Rules:
1. Answer questions concisely and professionally.
2. If asked about contact info, mention his email (${PORTFOLIO_INFO.socials.email}) or LinkedIn (Farhan Ullah).
3. Mention his GitHub (https://github.com/farhan-3qasim) for checking his React code.
4. If someone asks for TypeScript or Node.js work, explain that he is currently mastering these for his journey to Full Stack development.
5. Keep responses in Markdown format.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently taking a break. Please try again later or contact Farhan directly!";
  }
};
