let songs = [
    { year: 2005, artist: 'Coldplay', title: 'Fix You' },
    { year: 1983, artist: 'Michael Jackson', title: 'Billie Jean' },
    { year: 1997, artist: 'Radiohead', title: 'Paranoid Android' },
    { year: 1971, artist: 'Led Zeppelin', title: 'Stairway to Heaven' },
    { year: 2010, artist: 'Adele', title: 'Rolling in the Deep' },
];

// publisher-subscriber
let subscriber = null;
export function subscribe(subscriberCallback) {
    subscriber = subscriberCallback;
}


// getter
export function getSongs() {
    return songs;
}

// setter
export function setFilter(searchTerm) {
    songs = songs.filter(s => s.title.indexOf(searchTerm) > -1 || s.artist.indexOf(searchTerm) > -1);
    subscriber();
}