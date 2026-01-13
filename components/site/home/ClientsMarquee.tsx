'use client'
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { Client1,  Client2, Client3, Client4, Client5  } from '@/app/assest/images';
import Image from 'next/image';


const TrustedClientLogo =[
  {name: "Client1",
    img : Client1
  },
  {name: "Client2",
    img : Client2
  },  
  {name: "Client3",
    img : Client3
  },
  {name: "Client4",
    img : Client4
  },
  {name: "Client5",
    img : Client5
  },
]
export const ClientMarquee = () => {
  return (
    <div className='flex max-w-5xl items-center justify-center mx-auto py-4'>
      <Marquee>
      <MarqueeContent>
        {TrustedClientLogo.map((client) => (
          <MarqueeItem key={client.name} className="h-8 w-48 ">
            <Image src={client.img.src} alt={client.name} width={150} height={150} className="hover:opacity-80 overflow-hidden transition-all"/>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
    </div>
  )
}