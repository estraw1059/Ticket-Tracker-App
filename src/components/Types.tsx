export interface NavBarProps {
}

export interface ParentCardProps {
    cardType: CardType;
    component: React.ReactNode;
    title: string;
}

export enum CardType {
    SERVICE = 0,
    TICKET = 1,
    HOUR_LOG = 2
}