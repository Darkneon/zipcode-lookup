import axios from 'axios';

export class ZipCodeService {
    async search(countryCode: string, zipCode: string) {
        console.log(`Calling /${countryCode}/${zipCode}`);

        try {
            const response = await axios.get(`https://api.zippopotam.us/${countryCode}/${zipCode}`);
            const { data } = response;

            return {
                code: zipCode,
                location: {
                    country: {
                        code: countryCode,
                        name: data.country
                    },
                    city: data.places.map(x => x["place name"]).join(','),
                    state: data.places.map(x => x.state).join(',')
                },
            }
        } catch (e) {
            console.log(e.response);
            if (e.response.status === 404) {
                throw new Error(`Zip Code ${zipCode} not found`);
            } else {
                throw new Error(e);
            }
        }
    }
}

