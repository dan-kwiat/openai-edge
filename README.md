# OpenAI Edge

A TypeScript module for querying OpenAI's API from an edge function environment
i.e. using standard Web APIs instead of native Node.js APIs. Edge functions
allow streaming data to the client whereas lambda functions do not.

## Installation

```shell
yarn add openai-edge
```

or

```shell
npm install openai-edge
```

## Examples

Using
[Next.js Edge API Routes](https://nextjs.org/docs/api-routes/edge-api-routes):

```typescript
import type { NextRequest } from "next/server"
import { Configuration, OpenAIApi } from "openai-edge"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const handler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: searchParams.get("prompt") ?? "Say this is a test",
      max_tokens: 7,
      temperature: 0,
      stream: true,
    })

    return new Response(completion.body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/event-stream;charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    })
  } catch (error: any) {
    console.error(error)

    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    })
  }
}

export const config = {
  runtime: "edge",
}

export default handler
```
