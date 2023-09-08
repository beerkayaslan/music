"use client";

import SongCard from "@/app/components/SongCard"
import { useSelector } from "react-redux";

export default function Favourites() {

  const { favList } = useSelector(state => state.music);

  return (
    <main>
      <div className="song-card-list">
        {
          favList.length === 0 ?
          <div>Favorite Music Not Found</div>
            :
            <>
              {favList.length > 0 && favList.map((item, key) => <SongCard key={key} data={item} />)}
            </>
        }
      </div>
    </main>
  )
}
