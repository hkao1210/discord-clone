"use client";//This just means it's a client-side component, not a react-server component. Both are rendered on server-side.
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useEffect, useState } from "react";
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
        </>
    )
};