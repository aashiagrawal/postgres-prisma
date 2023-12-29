import { OpenAI} from "openai";
import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY // This is also the default, can be omitted
  });

  export async function POST(request: Request) {
    try {
      // Parse the request body
      const body = await request.json();
      const { query } = body;
  
      if (!query) {
        return new Response(JSON.stringify({ error: "Query is required" }), { status: 400 });
      }
  
      // Create a completion request to OpenAI
      const queryPrompt = "Create a SQL query for the following requirements "
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        // model: "text-davinci-003",
        messages: [{ role: "system", content: query }],
      });
  
      // Send the response back
      return new Response(JSON.stringify(completion.choices[0]), { status: 200 });
    } catch (error) {
      console.error("Error retrieving response from OpenAI API", error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
  }

