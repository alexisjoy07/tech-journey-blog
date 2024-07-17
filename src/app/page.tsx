import Link from 'next/link'
import Date from '@/components/Date'

import { getSortedPostsData } from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = '/images/snorlax.jpg';

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <div>
      <section>
        <p className={'prose'}>
          Heyy I&apos;m Alexis. Get off my site.
        </p>
        <div className={'my-4'}>
          <i>
            Click this ASAP{' '}
            <Link href={'https://www.tiktok.com/@neglectedchild42/video/7208181304616062251?is_from_webapp=1&sender_device=pc&web_id=7392689472905446954://github.com/ludu12/tech-journey-blog'}>
              <button className={'btn btn-primary'}>
                <span className={'text-primary-content'}>
                  TAP HERE
                </span>
              </button>
            </Link>
          </i>
        </div>
      </section>

      <div className={'my-4'}>
        <Image className={'rounded'} src={imageUrl} alt={'My Image'} width={500}
          height={500} />
      </div>

      <section className={'prose'}>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <div>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
