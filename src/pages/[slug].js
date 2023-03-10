import IconsBar from '@/Components/Icons/IconsBar'
import DictionaryData from '../Data/dictionary'
import { useEffect, useRef } from 'react'
import MD5 from 'crypto-js/md5'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  likeButtonLink,
  likeLink,
  saveLink,
  Telegram,
  telegramChannelName,
} from '@/Data/constants'

export const generatedData = DictionaryData.map((item) => ({
  ...item,
  md5: MD5(item?.description).toString(),
}))

const Details = ({ data }) => {
  const effectRan = useRef(false)
  const { asPath } = useRouter()
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  const URL = `${origin}${asPath}`

  useEffect(() => {
    if (effectRan.current === false) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://telegram.org/js/telegram-widget.js?21'
      script.setAttribute(
        'data-telegram-discussion',
        `${telegramChannelName}/${data?.telegramPost}`
      )
      script.setAttribute('data-comments-limit', '5')
      script.setAttribute('data-color', '071120')
      document.getElementById('comments-container').appendChild(script)
    }
    return () => (effectRan.current = true)
  }, [])
  return (
    <>
      <Head>
        <title>{data?.name} - OD1</title>
        <link rel='canonical' href={URL} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='Detay'>
        <h1 className='DetayHead'>{data?.name}</h1>
        <p className='DetayVersion'>{data?.wordVersion}</p>
      </div>

       <div className='Detay'>
        <p>{data?.description}</p>
      </div>

      <div className='DetayMd5'>
        <span>{data?.md5}</span>
      </div>

      <div> 
        {data?.version === '1.2' &&
        <a className='Detay' href={`${origin}${asPath}/posit`}>See &#47;posit </a>
        }
      </div>

      <div className='DetayIconBar'>
        <IconsBar
          likeLink={`${likeButtonLink}${data?.telegramPost}`}
          saveLink={`${Telegram}/${data?.telegramPost}`}
          whiteBackground
        />
      </div>
      <div style={{ marginTop: '2rem' }} id='comments-container'></div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: generatedData.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  return {
    props: {
      data: generatedData.filter(
        (item) => item.slug === context.params?.slug
      )?.[0],
    },
  }
}

export default Details
