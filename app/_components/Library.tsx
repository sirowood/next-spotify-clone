/*
  Since this component works as a child compoent of Sidebar, which is a child of PageContainer, which is a client component,
  there is no point to declare this component is a client component again
  -> delete the 'use client'
  Since the songs(logged in user uploaded) only be used in this component,
  I feel it is more reasonable to fetch the songs only inside this component, so no need to pass the songs all the way down.
  -> fetch songs here
*/

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'react-hot-toast';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

import MediaItem from '@/components/MediaItem';

import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useOnPlay from '@/hooks/useOnPlay';
import useUploadModal from '@/hooks/useUoloadModal';
import useSubscribeModal from '@/hooks/useSubscribeModal';

import { Song } from '@/types';

const Library = () => {
  const [userSongs, setUserSongs] = useState<Song[]>([]);

  const supabaseClient = createClientComponentClient();
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();
  const onPlay = useOnPlay(userSongs);

  useEffect(() => {
    const fetchUserSongs = async () => {
      if (!user) {
        setUserSongs([]);
        return;
      }

      const { data, error } = await supabaseClient
        .from('songs')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        toast.error(error.message);
        return;
      }

      setUserSongs(data as Song[]);
    };

    fetchUserSongs();
  }, [supabaseClient, user]);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist
            className="text-neutral-400"
            size={26}
          />
          <p className="text-neutral-400 font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {userSongs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
