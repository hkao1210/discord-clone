"use client";
//This just means it's a client-side component, not a react-server component. Both are rendered on server-side.
//So yes, the component should be rendered on the client side, but initally it's still rendered on the server-side. Server sends a statci HTML preview of the component to the client, then the client takes over and makes the component fully interactive. This process is known as HYDRATION.

//Hydration is the process of attaching event listeners to the DOM, to make the static HTML interactive. Behind the scenes, hydration is done with the hydrateRoot
//function from react-dom. It's called on the client side, and it takes the static HTML and makes it interactive.
import { DeleteChannelModal } from "@/components/modals/delete-channel-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";
import { LeaveServerModal } from "@/components/modals/leave-server-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { EditChannelModal } from "@/components/modals/edit-channel-modal";
import { MessageFileModal } from "@/components/modals/message-file-modal";
import { DeleteMessageModal } from "@/components/modals/delete-message-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
            <InviteModal />
            <EditServerModal />
            <MembersModal />
            <CreateChannelModal />
            <LeaveServerModal />
            <DeleteServerModal />
            <DeleteChannelModal />
            <EditChannelModal />
            <MessageFileModal />
            <DeleteMessageModal/>
        </>
    )
};