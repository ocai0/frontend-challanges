type IPoster = {
    url: string;
    title: string;
    subtitle: string;
    releaseDate: Date;
};
type Date = [number, number, number] | number;

const BASE_PATH = './assets/imgs';
const PREFIX = 'Episode';

const posters: IPoster[] = [
    {
        title: `${PREFIX} I`,
        subtitle: 'The Phantom Menace',
        releaseDate: 1999,
        url: `${BASE_PATH}/star-wars-i.jpg`
    },
    {
        title: `${PREFIX} II`,
        subtitle: 'The Clone Wars',
        releaseDate: 2002,
        url: `${BASE_PATH}/star-wars-ii.jpg`
    },
    {
        title: `${PREFIX} III`,
        subtitle: 'The Revenge of The Sith',
        releaseDate: 2005,
        url: `${BASE_PATH}/star-wars-iii.jpg`
    },
    {
        title: `${PREFIX} IV`,
        subtitle: 'A New Hope',
        releaseDate: 1977,
        url: `${BASE_PATH}/star-wars-iv.jpg`
    },
    {
        title: `${PREFIX} V`,
        subtitle: 'The Empire Strikes Back',
        releaseDate: 1980,
        url: `${BASE_PATH}/star-wars-v.jpg`
    },
    {
        title: `${PREFIX} VI`,
        subtitle: 'Return of the Jedi',
        releaseDate: 1983,
        url: `${BASE_PATH}/star-wars-vi.jpg`
    },
]

export { posters };
export type { IPoster };
