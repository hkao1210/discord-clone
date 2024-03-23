import { useEffect, useRef, useState } from "react";
import {useRouter} from "next/navigation";
import {useModal} from "@/hooks/use-modal-store";
import qs from "query-string";
import axios from "axios";



interface UseImagePortalVMReturn {
    onClick: () => void;
    onClose: () => void;
    isModalOpen: boolean;
    isLoading: boolean;
    channel: any;}

const useDeleteChannelModalVM = (): UseImagePortalVMReturn => {

    const router = useRouter();
    const { isOpen, onClose, type, data } = useModal();
    const isModalOpen = isOpen && type === "deleteChannel";
    const { server, channel } = data;

    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const url = qs.stringifyUrl({
                url: `/api/channels/${channel?.id}`,
                query: {
                    serverId: server?.id,
                }
            });
            await axios.delete(url);
            onClose();
            router.refresh();
            router.push(`/servers/${server?.id}`)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {
       onClick,
       onClose,
       isModalOpen,
       isLoading,
       channel
    };
};

export default useDeleteChannelModalVM;
