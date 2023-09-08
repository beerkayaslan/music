import { NextResponse } from 'next/server';

const data = [
  {
    "id":1,
    "name": "Techno Sound",
    "auth": "LUM!X",
    "path": "song-1.mp3",
    "img": "song-1.jpg"
  },
  {
    "id":2,
    "name": "Hands Up",
    "auth": "Deorro, Dave Mak, Scheffwell",
    "path": "song-2.mp3",
    "img": "song-2.jpg"
  },
  {
    "id":3,
    "name": "Human",
    "auth": "Hardwell, Machine Made",
    "path": "song-3.mp3",
    "img": "song-3.jpg"
  },
  {
    "id":4,
    "name": "Metro",
    "auth": "Kevin de Vries, Mau P",
    "path": "song-4.mp3",
    "img": "song-4.jpg"
  },
  {
    "id":5,
    "name": "Diamonds On My Mind",
    "auth": "Eli Brown",
    "path": "song-5.mp3",
    "img": "song-5.jpg"
  },
  {
    "id":6,
    "name": "Go Stupid",
    "auth": "Quintino, Plastik Funk",
    "path": "song-6.mp3",
    "img": "song-6.jpg"
  },
  {
    "id":7,
    "name": "The Feeling - 2022 Remaster",
    "auth": "Massano",
    "path": "song-7.mp3",
    "img": "song-7.jpg"
  },
  {
    "id":8,
    "name": "Guns Out",
    "auth": "Blasterjaxx",
    "path": "song-8.mp3",
    "img": "song-8.jpg"
  },
  {
    "id":9,
    "name": "Tell Me Why - MEDUZA Remix",
    "auth": "Supermode, MEDUZA",
    "path": "song-9.mp3",
    "img": "song-9.jpg"
  },
  {
    "id":10,
    "name": "BANG!",
    "auth": "Lucas & Steve",
    "path": "song-10.mp3",
    "img": "song-10.jpg"
  },
  {
    "id":11,
    "name": "Motor",
    "auth": "Steve Aoki, Quintino",
    "path": "song-11.mp3",
    "img": "song-11.jpg"
  },
  {
    "id":12,
    "name": "Techno Party",
    "auth": "Tujamo, VINNE, Murotani",
    "path": "song-12.mp3",
    "img": "song-12.jpg"
  },
  {
    "id":13,
    "name": "Annihilate",
    "auth": "Will Sparks",
    "path": "song-13.mp3",
    "img": "song-13.jpg"
  },
  {
    "id":14,
    "name": "Drum Machine",
    "auth": "Alok, Pickle",
    "path": "song-14.mp3",
    "img": "song-14.jpg"
  },
  {
    "id":15,
    "name": "Cannonball - Will Sparks Remix",
    "auth": "Showtek, Justin Prime, Will Sparks",
    "path": "song-15.mp3",
    "img": "song-15.jpg"
  },
  {
    "id":16,
    "name": "Dark Water",
    "auth": "Will Sparks, JESSCA",
    "path": "song-16.mp3",
    "img": "song-16.jpg"
  },
  {
    "id":17,
    "name": "Dance With The Devil (The 6th Gate) - Reinier Zonneveld Remix",
    "auth": "Reinier Zonneveld, D-Devils",
    "path": "song-17.mp3",
    "img": "song-17.jpg"
  },
  {
    "id":18,
    "name": "The Lone Ranger",
    "auth": "NWYR, W&W",
    "path": "song-18.mp3",
    "img": "song-18.jpg"
  },
  {
    "id":19,
    "name": "Our Happiness",
    "auth": "AVAO, The Rocketman",
    "path": "song-19.mp3",
    "img": "song-19.jpg"
  },
  {
    "id":20,
    "name": "WANNA GO BANG",
    "auth": "HI-LO, Oliver Heldens, DJ Deeon",
    "path": "song-20.mp3",
    "img": "song-20.jpg"
  },
  {
    "id":21,
    "name": "No Time",
    "auth": "Quintino",
    "path": "song-21.mp3",
    "img": "song-21.jpg"
  },
  
]


export async function GET() {
  return NextResponse.json(data, { status: 200 })
}