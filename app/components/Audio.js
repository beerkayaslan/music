"use client";

import { createRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { setFavouriteSong } from '@/app/store/reducers/musicSlice';

export default function Audio() {

  const dispatch = useDispatch();
  const { currentSong, favList } = useSelector(state => state.music);

  const audioPlayerRef = createRef();

  useEffect(() => {
    if (currentSong) {
      if (!currentSong.play) {
        audioPlayerRef.current.audio.current.pause();
      } else {
        audioPlayerRef.current.audio.current.play();
      }
    }
  }, [currentSong])

  const handleFavouriteClick = () => {
    dispatch(setFavouriteSong(currentSong));
  }

  return currentSong && (
    <div className='audio select-none'>
      <div className='flex items-center gap-5 md:w-72 w-full h-24'>
        <img src={`/img/${currentSong.img}`} className='w-16 h-16 rounded' />
        <div>
          <p className='font-medium line-clamp-1'>{currentSong.name}</p>
          <span className='text-xs line-clamp-1'>{currentSong.auth}</span>
        </div>
        <div className='cursor-pointer heart-btn' onClick={handleFavouriteClick}>
          {
            favList.length > 0 ? (favList.some(item => item.id === currentSong.id) ? <FaHeart size={20} color='#b91c1c' /> : <FaRegHeart size={20} />) : <FaRegHeart size={20} />
          }
        </div>
      </div>
      <AudioPlayer
        ref={audioPlayerRef}
        volume={.2}
        src={`/song/${currentSong.path}`}
        className='!flex-1 !ml-0 md:!ml-4 !shadow-none outline-none !px-2 md:!px-8'
      />
    </div>
  )

}
