const EMPTY = 'unknown';

type CityStateArgs = {
    city: string
    state?: string
}

export const formatCityState = ({ city, state }: CityStateArgs) => {
    city = city || EMPTY;
    state = state || EMPTY;
    return `${city}, ${state}`;
}