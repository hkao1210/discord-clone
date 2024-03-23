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
import { useRouter } from "next/navigation";
import useDeleteChannelModalVM from "@/components/modals/DeleteChannelModal/deleteChannelModalVM";

export const DeleteChannelModal = () => {

    const vm = useDeleteChannelModalVM();


    return (
        <Dialog open={vm.isModalOpen} onOpenChange={vm.onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text center font bold">
                        Delete Channel
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Are you sure you want to do this? <br /> <span className="font-semibold text-indigo-500"> #{vm.channel?.name}</span> will be permanently deleted.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="bg-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between w-full">

                        <Button disabled={vm.isLoading} onClick={vm.onClose} variant="ghost">
                            Cancel
                        </Button> {/**onClick/onClose not onClick() since onClick() invokes the function right away when it's rendered */}
                        <Button disabled={vm.isLoading} onClick={vm.onClick} variant="primary">
                            Confirm
                        </Button>

                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
