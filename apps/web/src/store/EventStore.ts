import { create } from "zustand";
import { Events } from "@/data/EventsData";

type TicketType = "regular" | "vip" | "vvip";

interface SelectedTicketAmount {
    regular: number;
    vip: number;
    vvip: number;
}

interface EventState {
    // core data
    eventId: number | null;
    event: (typeof Events)[number] | null;

    // ticket state
    selectedTicketAmount: SelectedTicketAmount;
    totalTickets: number;

    // UI state
    currentStep: number;

    // actions
    setEventById: (id: number) => void;
    addTicket: (type: TicketType) => void;
    removeTicket: (type: TicketType) => void;
    setCurrentStep: (step: number) => void;
    resetTickets: () => void;
}

export const useEventStore = create<EventState>((set, get) => ({
    eventId: null,
    event: null,

    selectedTicketAmount: {
        regular: 0,
        vip: 0,
        vvip: 0,
    },

    totalTickets: 0,
    currentStep: 1,

    setEventById: (id) => {
        const event = Events.find((e) => e.id === id) ?? null;

        const totalTickets =
            (event?.price?.Regular?.amountLeft ?? 0) +
            (event?.price?.VIP?.amountLeft ?? 0) +
            (event?.price?.VVIP?.amountLeft ?? 0);

        set({
            eventId: id,
            event,
            totalTickets,
            selectedTicketAmount: {
                regular: 0,
                vip: 0,
                vvip: 0,
            },
        });
    },

    addTicket: (type) => {
        const { selectedTicketAmount, totalTickets } = get();

        const totalSelected =
            selectedTicketAmount.regular +
            selectedTicketAmount.vip +
            selectedTicketAmount.vvip;

        if (totalSelected >= totalTickets) return;

        set({
            selectedTicketAmount: {
                ...selectedTicketAmount,
                [type]: selectedTicketAmount[type] + 1,
            },
        });
    },

    removeTicket: (type) => {
        const { selectedTicketAmount } = get();

        if (selectedTicketAmount[type] === 0) return;

        set({
            selectedTicketAmount: {
                ...selectedTicketAmount,
                [type]: selectedTicketAmount[type] - 1,
            },
        });
    },

    setCurrentStep: (step) => set({ currentStep: step }),

    resetTickets: () =>
        set({
            selectedTicketAmount: {
                regular: 0,
                vip: 0,
                vvip: 0,
            },
        }),
}));
