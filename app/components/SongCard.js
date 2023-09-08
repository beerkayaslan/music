import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "@/app/store/reducers/musicSlice";
import Image from 'next/image'

export default function SongCard({ data: { name, img, path, auth, id } }) {
  const dispatch = useDispatch();

  const { currentSong } = useSelector(state => state.music);

  const handleClick = () => {
    dispatch(setCurrentSong({ name, img, path, auth, id, play: currentSong != undefined ? (currentSong.id === id ? !currentSong.play : true) : true }));
  }

  return (
    <div className={`song-card ${currentSong != undefined ? (currentSong.id === id ? "active" : "") : ""}`} onClick={handleClick}>
      <Image src={`/img/${img}`} width={260} height={260} alt="img"/>
      <p className="line-clamp-1">{name}</p>
      <span className="line-clamp-1">{auth}</span>
      <div className="play-icon">
      <BsPauseFill className="pause-icon-svg" color="white" size={30} />
        <BsPlayFill className="play-icon-svg" color="white" size={30} />
      </div>
    </div>
  )
}
