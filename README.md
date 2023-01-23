# OpenAI Edge

A TypeScript module for querying OpenAI's API from an edge function environment
i.e. using `fetch` (a standard Web API) instead of `axios`.

Edge functions are very fast and, unlike lambda functions, allow streaming data
to the client.

## Installation

```shell
yarn add openai-edge
```

or

```shell
npm install openai-edge
```

## Methods

This module offers a subset of the methods available in the official Node
package. The syntax and types are essentially the same but the methods return
the standard Fetch `Promise<Response>`.

- `openai.createCompletion`
- `openai.createImage` (since `v0.2.0`)

## Examples

Here are some sample
[Next.js Edge API Routes](https://nextjs.org/docs/api-routes/edge-api-routes)
using `openai-edge`.

### 1. Streaming text completion with Davinci

Note that when using the `stream: true` option, OpenAI responds with
[server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events).
Here's an example
[react hook to consume SSEs](https://github.com/dan-kwiat/react-hooks#useserversentevents)
and here's a [full NextJS example](https://github.com/dan-kwiat/chat-gpt-clone).

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

### 2. Creating an Image with DALL·E

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
    const image = await openai.createImage({
      prompt: searchParams.get("prompt") ?? "A cute baby sea otter",
      n: 1,
      size: "512x512",
      response_format: "url",
    })

    const json = await image.json()
    const url = json?.data?.[0]?.url

    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: {
        "content-type": "application/json",
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
