"use client";

import SongCard from "@/app/components/SongCard"
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/app/store/reducers/musicSlice";
import { useEffect } from "react";

export default function SongList() {

    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.music);

    useEffect(() => {
        if (data.length === 0) {
            dispatch(fetchData());
        }
    }, []);

    return (
        <div className="song-card-list">
            {
                data.length === 0 ?
                    new Array(28).fill().map((key,id) => <div key={id} className='animate-pulse' >
                        <div className="h-40 bg-slate-100 rounded"></div>
                        <div className="h-6 mt-3 bg-slate-100 rounded"></div>
                        <div className="h-4 mt-3 bg-slate-100 rounded"></div>
                    </div>)
                    :
                    <>
                        {data.length > 0 && data.map((item, key) => <SongCard key={key} data={item} />)}
                    </>
            }
        </div>
    )
}
