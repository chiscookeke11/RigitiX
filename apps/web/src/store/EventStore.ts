import { create } from "zustand";
import { Events } from "@/data/EventsData";
import type { EventPurchaseDetails, PaypalFormDetails } from "@/types/types";

type TicketType = "regular" | "vip" | "vvip";



interface EventState {
  // core data
  eventId: number | null;
  event: (typeof Events)[number] | null;

  // ticket state
  totalTickets: number;

  // UI state
  currentStep: number;

  // form State
  formValues: EventPurchaseDetails;
  setFormValues: <K extends keyof EventPurchaseDetails>(
    key: K,
    value: EventPurchaseDetails[K]
  ) => void;

  paypalFormValues: PaypalFormDetails;
  setPaypalFormValues: <K extends keyof PaypalFormDetails>(key: K, value: PaypalFormDetails[K]) => void;

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

  totalTickets: 0,
  currentStep: 1,


  formValues: ({
    firstName: "",
    lastName: "",
    email: "",
    homeAddress: "",
    country: "",
    state: "",
    city: "",
    gender: "",
    paymentOptions: "",
    phoneNumber: "",
    selectedTicketsAmount: {
      regularTicketsAmount: 0,
      vipTicketsAmount: 0,
      vvipTicketsAmount: 0
    },
    totalPrice: 0,
    countryDialCode: ""
  }),




  setFormValues: (key, value) =>
    set((state) => ({
      formValues: {
        ...state.formValues,
        [key]: value,
      },
    })),



  paypalFormValues: ({
    cardholderName: "",
    cardNumber: "",
    csv: "",
    expiryDate: null
  }),

  setPaypalFormValues: (key, value) =>
    set((state) => ({
      paypalFormValues: {
        ...state.paypalFormValues,
        [key]: value
      }
    })),


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
    });
  },

  addTicket: (type) => {
    const { formValues, totalTickets } = get();

    const { selectedTicketsAmount } = formValues;

    const totalSelected =
      selectedTicketsAmount.regularTicketsAmount +
      selectedTicketsAmount.vipTicketsAmount +
      selectedTicketsAmount.vvipTicketsAmount;

    if (totalSelected >= totalTickets) return;

    set((state) => ({
      formValues: {
        ...state.formValues,
        selectedTicketsAmount: {
          ...state.formValues.selectedTicketsAmount,
          [`${type}TicketsAmount`]:
            state.formValues.selectedTicketsAmount[
            `${type}TicketsAmount` as keyof typeof selectedTicketsAmount
            ] + 1,
        },
      },
    }));
  },

  removeTicket: (type) => {
    const { selectedTicketsAmount } = get().formValues;

    const key = `${type}TicketsAmount` as keyof typeof selectedTicketsAmount;

    if (selectedTicketsAmount[key] === 0) return;

    set((state) => ({
      formValues: {
        ...state.formValues,
        selectedTicketsAmount: {
          ...state.formValues.selectedTicketsAmount,
          [key]: selectedTicketsAmount[key] - 1,
        },
      },
    }));
  },


  setCurrentStep: (step) => set({ currentStep: step }),

  resetTickets: () =>
    set((state) => ({
      formValues: {
        ...state.formValues,
        selectedTicketsAmount: {
          regularTicketsAmount: 0,
          vipTicketsAmount: 0,
          vvipTicketsAmount: 0,
        },
      },
    })),




}));
