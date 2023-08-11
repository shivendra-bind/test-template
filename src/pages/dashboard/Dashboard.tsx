import React from 'react'

import { ScrollArea, ScrollBar } from '../../components/ScrollArea'
import { Separator } from '../../components/Separator'

import { AlbumArtwork } from './ArtWork'
import { useAlbums } from './useAlbums'

const Dashboard = () => {
  const { data } = useAlbums()
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {data?.map((album, i) => (
              <AlbumArtwork
                key={`album.name-${i}`}
                album={album}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  )
}

export default Dashboard
