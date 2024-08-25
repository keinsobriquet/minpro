export interface CreateEvent {
    map(arg0: (item: any) => any): import("react").ReactNode
    eventname: string
    type: string
    price: number
    date: string
    venue: string
    quota: number
    category: string
    description: string
}