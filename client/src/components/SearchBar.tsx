import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';
import './SearchBar.css'

export default function SearchBar() {
    const playerRef = useRef<Player>(null)

    function playSearchAnimation(): void {
        playerRef.current?.play();
    }

    function stopSearchAnimation(): void {
        playerRef.current?.stop();
    }

    return (
        <form role="search" className='flex justify-center pb-4'>
            <input
                className='search-bar h-10 w-3/6 px-2 rounded-lg mr-2'
                onFocus={ playSearchAnimation } />
            <Player
                ref={ playerRef }
                className='cursor-pointer'
                speed={ 2.2 }
                src="/search.json"
                style={ { height: '40px', width: '40px' } }
            >
            </Player>
        </form>
    )
}