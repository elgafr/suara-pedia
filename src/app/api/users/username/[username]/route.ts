import { validateRequest } from "@/auth";

export async function GET(req: Request, { params: { username } }: { params: { username: string } }
) {
    try {

        const { user: loggedInUser } = await validateRequest();

        if(!loggedInUser) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}