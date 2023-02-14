import { Work } from "~~/types/work";
import thumbnail from '~/assets/images/works/arr001/cover.jpg';
import { useWorkLink } from "~~/composables/utils/useWorkLink";
import dayjs from "dayjs";

const id = 'the-depth-of-meanings';

export const arr001: Work = {
  id,
  number: 'arr001',
  title: 'The Depth of Meanings',
  type: 'single',
  formats: ['streaming'],
  status: 'released',
  to: useWorkLink(id),
  thumbnail,
  description: [
    'We have recently released the song "The Depth of Meanings" on Bandcamp. This song was created using my home recording techniques, I mixed a collage of plucked guitars while swaying in a hammock at home, added synth elements created using my personal computer, and used cut-and-paste techniques to create a loose drum sound. The final result also includes a wacky vocal mix. The song is also available on Apple Music and Spotify.',
    '「意味の深度」という楽曲をBandcampで発表しました。僕なりのHome Tapingの実践として、自宅でハンモックに揺られながら爪弾いたギターのコラージュ、PCでパッチングしたシンセによる習作、叩けないドラムをどつんどつんと叩いた結果の切り貼り、つたないボーカルなどがミックスされています。Apple MusicやSpotifyでも配信中',
  ],
  streamings: [
    {
      type: 'spotify',
      to: 'https://open.spotify.com/album/1DAopqWeJHZFPIqQl8f6X7',
    },
    {
      type: 'itunes',
      to: 'https://geo.music.apple.com/album/the-depth-of-meanings-single/1296961757?uo=5&app=music',
    },
    {
      type: 'other',
      to: 'https://artists.landr.com/800739167278',
    }
  ],
  // isDrafted: true,
  releasedAt: dayjs('2017-10-16'),
  tracks: [
    'The Depth of Meanings',
  ],
}