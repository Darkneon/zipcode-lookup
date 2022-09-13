import { ZipCode } from '@/generated/graphql';
import { HistoryItem } from '@/types/history';

export function zipCodeToHistoryItem({ code, location }: ZipCode): HistoryItem {
    if (!location) {
        return {
            key:  Date.now().toString(),
            zipCode: code,
            country: '', city: '', state: ''
        };
    }

    const { city, state, country } = location;
    return <HistoryItem>{
        key: code + Date.now().toString(),
        zipCode: code,
        country: country.name,
        city,
        state
    };
}