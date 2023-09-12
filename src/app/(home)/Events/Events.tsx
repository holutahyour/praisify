import EventCard from '@/components/EventCard'
import React from 'react'
import { BiCurrentLocation } from "react-icons/bi";

type Props = {}

export default function Events({ }: Props) {
  return (
    <>
      {categorized_events.map((x, $) => (
        <section key={$} className='py-8'>
          <p className='flex gap-3 text-2xl font-extrabold items-center capitalize'><BiCurrentLocation /> <span>{x.category}</span></p>
          <div className='flex py-6 gap-8 justify-center'>
            {x.events.map((event, $) => (
              <EventCard key={$} event={event} />
            ))}
          </div>
        </section>
      ))}
    </>

  )
}

export type EventType = {
  image_url: string,
  title: string,
  date: string,
  venue: string,
  fee: number,
  organizer: string,
  no_of_followers: number,
  promoted: boolean,
}

export type CategorizedEventType = {
  category: string,
  events: EventType[]
}

export const categorized_events : CategorizedEventType[] = [
  {
    category: 'Event This Weekend',
    events: [
      {
        image_url: '',
        title: 'Jesus the King',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 10.00,
        organizer: 'Re-Arrange Inc',
        no_of_followers: 675,
        promoted: true,
      },
      {
        image_url: '',
        title: 'Christ the lord',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 0.00,
        organizer: 'Man Fellowship',
        no_of_followers: 640,
        promoted: true,
      },
      {
        image_url: '',
        title: 'Throne of Grace of The great majesty who is the king',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 0.00,
        organizer: 'Christ our redeemer',
        no_of_followers: 640,
        promoted: true,
      },
      {
        image_url: '',
        title: 'Throne of the shepherd',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 0.00,
        organizer: 'Faithful servant',
        no_of_followers: 640,
        promoted: true,
      }
    ]
  },
  {
    category: 'Popular Event in Lagos',
    events: [
      {
        image_url: '',
        title: 'Jesus the King',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 0.00,
        organizer: 'Re-Arrange Inc',
        no_of_followers: 675,
        promoted: true,
      },
      {
        image_url: '',
        title: 'Christ the lord',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 0.00,
        organizer: 'Man Fellowship',
        no_of_followers: 640,
        promoted: true,
      },
      {
        image_url: '',
        title: 'Throne of Grace of The great majesty who is the king',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 0.00,
        organizer: 'Christ our redeemer',
        no_of_followers: 640,
        promoted: true,
      },
      {
        image_url: '',
        title: 'Throne of the shepherd',
        date: 'Mon, Sep 11, 2023 10:00 PM WAT',
        venue: 'Main Guest House',
        fee: 0.00,
        organizer: 'Faithful servant',
        no_of_followers: 640,
        promoted: true,
      }
    ]
  },
]