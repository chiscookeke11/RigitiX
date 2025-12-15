
export interface FeaturedEventsDataType {
    hostName: string,
    hostImage: string,
    eventName: string,
    eventDescription: string,
    eventTime: Date,
    eventLocation: string,
    timeCreated: Date,
    eventImage: string,
    tags: string[],
    number_of_likes: number,
    number_of_comments: number,
    status: "Free" | "Paid"
}


export interface TestimonialCardTypes {
    image: string;
    name: string;
    testimony: string;
}