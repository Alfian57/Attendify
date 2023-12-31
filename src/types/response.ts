export type Link = {
    first: string
    last: string
    next?: string
    prev?: string
}

export type Meta = {
    current_page: number
    from: number
    last_page: number
    links: MetaLink[]
    path: string
    per_page: number
    to: number
    total: number
}

export type MetaLink = {
    active: boolean
    label: string
    url?: string
}

export type ErrorResponse = {
    message: string
    error: Record<string, string[]>
} 