export interface OffersApiType {
    getOffersList: () => Promise<OfferResponseType[]>
    createOffer: (payload: CreateOfferPayload) => Promise<CreatedOfferResponseType>
    deleteOffer: (id: number) => Promise<void>
}

export type CreateOfferPayload = {
    order_type: number
    user: number
    item: number
    entry_quantity: number
    price: string
}

export type CreatedOfferResponseType = {
    order_type: number
    user: number
    item: number
    entry_quantity: number
    price: string
    current_quantity: number
}

export type OfferResponseType = CreatedOfferResponseType & {
    id: number
    is_active: boolean
}