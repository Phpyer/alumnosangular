interface AudioPlayer{
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details{
  author:string;
  year:number;
}

const audioPlayer:AudioPlayer= {
  audioVolume: 90,
  songDuration: 36,
  song: "Mes",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}

const song  = 'New Song';
const {song:anotherSong, songDuration:Duration,details} = audioPlayer;
const {author} = details



// console.log('Song',anotherSong)
// console.log('Song Duration',Duration)
// console.log('Author',author);

const dbz:string[] = ['Goku','Vegueta','Trunks'];
console.log('Personsaje 3:',dbz[3] || 'No hay personaje');
export {};