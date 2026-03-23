import { StreamChat } from "stream-chat";
import * as Sentry from "@sentry/react-native";

const API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY! as string
const SECRET_KEY = process.env.STREAM_SECRET_KEY! as string

export async function POST(request: Request) {
  const client = StreamChat.getInstance(API_KEY, SECRET_KEY);
  const body = await request.json();
 
  const {userId, name, image} = body;

  if (!userId) {
    return Response.json({ error: "Missing userId in request body" }, { status: 400 });
  }

  try {
    await client.upsertUser({
      id: userId,
      name: name || "Guest",
      image: image,
    });
    return Response.json({ message: "User synced successfully", userId }, { status: 200 });
  } catch (error) {
    console.error("Error syncing user with Stream Chat", { error, userId });
    Sentry.captureException(error, {extra: { userId, name, image}});
    return Response.json({ error: "Failed to sync user with Stream Chat" }, { status: 500 });
  }
}