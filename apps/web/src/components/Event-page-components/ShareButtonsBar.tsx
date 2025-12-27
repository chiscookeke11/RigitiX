import {
    InstapaperShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import { Copy01Icon } from "hugeicons-react";
import { toast } from "react-toastify";


export default function ShareBtnBar() {
    const shareUrl = window.location.href

    // Function to copy current page direction
    const copyPageLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            toast.success("URL Copied")
        }
        catch (err) {
            toast.error("Failed to copy URL")
            console.error("Failed to copy URL", err)
        }
    }





    return (
        <div className=" w-fit flex items-center gap-3 ml-auto " >


            <InstapaperShareButton url={shareUrl} className=" bg-white! rounded-full h-10 w-10 flex items-center justify-center p-2.5 shadow " >
                <img src="/images/Social-media-icons/Insta.svg" />
            </InstapaperShareButton>

            <LinkedinShareButton url={shareUrl} className=" bg-white! rounded-full h-10 w-10 flex items-center justify-center p-2.5 shadow ">
                <img src="/images/Social-media-icons/LinkedIn.svg" />
            </LinkedinShareButton>


            <TwitterShareButton url={shareUrl} className=" bg-white! rounded-full h-10 w-10 flex items-center justify-center p-2.5 shadow ">
                <img src="/images/Social-media-icons/X.svg" />
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl} className=" bg-white! rounded-full h-10 w-10 flex items-center justify-center p-2.5 shadow ">
                <img src="/images/Social-media-icons/WhatsApp.png" />
            </WhatsappShareButton>

            <button
                onClick={copyPageLink}
                className="bg-(--bg-white-0) flex items-center justify-center gap-1 text-sm font-medium text-(--text-dark-gray) p-2.5 px-4 cursor-pointer rounded-[20px] w-fit shrink-0 hover:text-(--text-medium-gray) transition-all duration-300 ease-in-out shadow-[0_16px_32px_-12px_rgba(14,18,27,0.1)] ">
                <Copy01Icon size={20} />
                Copy Link
            </button>
        </div>
    )
}