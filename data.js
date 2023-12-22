let songs = [
    { year: 2005, artist: 'Coldplay', title: 'Fix You' },
    { year: 1983, artist: 'Michael Jackson', title: 'Billie Jean' },
    { year: 1997, artist: 'Radiohead', title: 'Paranoid Android' },
    { year: 1971, artist: 'Led Zeppelin', title: 'Stairway to Heaven' },
    { year: 2010, artist: 'Adele', title: 'Rolling in the Deep' },
];

let searchTerm = '';

// publisher-subscriber
let subscriber = null;
export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}


// getter
export function getSongs() {
    const filteredSongs = songs.filter(s => s.title.toLowerCase().indexOf(searchTerm) > -1 || s.artist.toLowerCase().indexOf(searchTerm) > -1);
    return filteredSongs;
}

// setter
export function setFilter(newSearchTerm) {
    searchTerm = newSearchTerm.toLowerCase();
    subscriber();
}