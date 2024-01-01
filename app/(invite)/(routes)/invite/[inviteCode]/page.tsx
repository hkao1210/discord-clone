import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface InviteCodePageProps {
    params: {
        inviteCode: string;
    };
}

const InviteCodePage = async ({
    params }: InviteCodePageProps) => {
    const profile = await currentProfile();
    if (!profile) {
        return redirectToSignIn();
    }
    if (!params.inviteCode) {
        return redirect("/");
    }

    const existingServer = await db.server.findFirst({
        where: {
            inviteCode: params.inviteCode,
            members: {
                some: {
                    profileId: profile.id //http://localhost:3000/invite/37729b25-8b91-4738-8f25-454d3efb2707"
                }
            }
        }
    });
    if (existingServer) {
        return redirect(`/servers/${existingServer.id}`);
    }
    const server = await db.server.update({
        where: {
            inviteCode: params.inviteCode,
        },
        data: {
            members: {
                create: [{
                    profileId: profile.id,

                }]
            }
        }
    })
    if (server) {
        return redirect(`/servers/${server.id}`);

    }
    return null;
}

export default InviteCodePage;