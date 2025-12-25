import type { PaymentOptions } from "@/types/types";




export const paymentOptions: PaymentOptions[] = [
    {
        heading: "Credit Card",
        description: "Visa, Mastercard, Verve",
        image: "/images/payment-options-logos/credit-card.png",
        color: "#F2F1FE",
    },
    {
        heading: "Paypal",
        description: "One-click paypal payment",
        image: "/images/payment-options-logos/paypal.png",
        color: "#F3FAFC",
    },
    {
        heading: "Cryptocurrency",
        description: "Bitcoin, Ethereum, and more",
        image: "/images/payment-options-logos/crypto.png",
        color: "#FFF7EB",
    },
]