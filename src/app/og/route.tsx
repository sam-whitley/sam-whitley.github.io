import { ImageResponse, NextRequest } from "next/server";
import { Space_Grotesk } from "next/font/google";
import { siteMetadata } from "@/data/siteMetadata";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const hasTitle = searchParams.has("title");
    const postTitle = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Blog";

    const groteskRegular = await fetch(
      new URL(
        "../../../public/_static/fonts/SpaceGrotesk-Regular.ttf",
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <h1>{postTitle}</h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Space Grotesk",
            data: groteskRegular,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
