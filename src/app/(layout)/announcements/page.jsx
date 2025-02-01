import React from 'react'
import Announcement from '@/components/Annoucement'

const page = () => {
    const announce = [
        {
          id: 1,
          date: '25th Feb 2025',
          title: "Announcement",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam.", 
        },
        {
          id: 2,
          date: '25th Feb 2025',
          title: "Announcement",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam.", 
        },
        {
          id: 3,
          date: '25th Feb 2025',
          title: "Announcement",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam.", 
        },
        {
          id: 4,
          date: '25th Feb 2025',
          title: "Announcement",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam.", 
        },
        {
          id: 5,
          date: '25th Feb 2025',
          title: "Announcement",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam.", 
        },
      ]
      return (
        <>
          
          <Announcement data={announce}/>
        </>
      );
}

export default page