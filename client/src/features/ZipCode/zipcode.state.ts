import { atom } from 'jotai';
import { CountryType } from '@/types/countries';
import { countriesById } from '@/data/countries';
import config from '@/data/config';

const defaultCountry = { id: config.defaultCountryId, label: countriesById[config.defaultCountryId] };
export const countryAtom = atom<CountryType>(defaultCountry);
export const zipCodeAtom = atom<string>('');