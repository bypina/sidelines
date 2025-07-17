import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
});

export const generateCommentary = async (event, context = {}) => {
  try {
    const prompt = `
    You are an exciting sports commentator. Generate engaging commentary for this soccer event:
    Event: ${event}
    Context: ${JSON.stringify(context)}
    
    Make it exciting and energetic, like a professional sports commentator would say it.
    Keep it under 100 words.
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 150,
      temperature: 0.8,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating commentary:', error);
    throw error;
  }
};

export default openai; 