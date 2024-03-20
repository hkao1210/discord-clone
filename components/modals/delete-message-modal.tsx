"use client";
import { useState } from "react";
import qs from "query-string";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";

import { useModal } from "@/hooks/use-modal-store";
import axios from "axios";

export const DeleteMessageModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const isModalOpen = isOpen && type === "deleteMessage";
    const { apiUrl, query } = data;

    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const url = qs.stringifyUrl({
                url: apiUrl || "",
                query,
            });
            console.log(`SENDING DELETE REQUEST TO : ${url}`)
            const response = await axios.delete(url);
            console.log(`response`, response);
            onClose();  
        } catch (error) {
            if ((error as any).response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log((error as any).response.data);
                console.log((error as any).response.status);
                console.log((error as any).response.headers);
            } else if ((error as any).request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log((error as any).request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', (error as any).message);
            }
            console.log(error.config);
        }finally {
            setIsLoading(false);
        }
    }
    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text center font bold">
                        Delete Message
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Are you sure you want to do this? <br />
                        This message will be permanently deleted. 
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="bg-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between w-full">

                        <Button disabled={isLoading} onClick={onClose} variant="ghost">
                            Cancel
                        </Button> {/**onClick/onClose not onClick() since onClick() invokes the function right away when it's rendered */}
                        <Button disabled={isLoading} onClick={onClick} variant="primary">
                            Confirm
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}