export interface NavBarProps {
}

export interface ParentCardProps {
    cardType: CardType;
}

export enum CardType {
    SERVICE = 0,
    TICKET = 1,
    HOUR_LOG = 2
}