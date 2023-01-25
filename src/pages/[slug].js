import IconsBar from '@/Components/Icons/IconsBar'
import dictionaryData from '../Data/dictionary'
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

export const generatedData = dictionaryData.map((item) => ({
  ...item,
  md5: MD5(item?.description).toString(),
}))

const Details = ({ generatedData }) => {
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
        `${telegramChannelName}/${generatedData?.telegramPost}`
      )
      script.setAttribute('data-comments-limit', '5')
      document.getElementById('comments-container').appendChild(script)
    }
    return () => (effectRan.current = true)
  }, [])
  return (
    <>
      <Head>
        <title>{generatedData?.name} - #OpenDictionary</title>
        <link rel='canonical' href={URL} />
      </Head>
      <div className='Detay'>
        <h1 className='DetayHead'>{generatedData?.name}</h1>
        <p className='DetayVersion'>{generatedData?.wordVersion}</p>
      </div>

      <div>
        <p>{generatedData?.description}</p>
      </div>

      <div className='DetayMd5'>
        <span>{generatedData?.md5}</span>
      </div>

      <div className='DetayIconBar'>
        <IconsBar
          likeLink={`${likeButtonLink}${generatedData?.telegramPost}`}
          saveLink={`${Telegram}/${generatedData?.telegramPost}`}
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
