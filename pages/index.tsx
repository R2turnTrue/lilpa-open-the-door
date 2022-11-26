import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Base from '../components/Base'
import LiveResponse from '../global/liveResponse'

export default function Home() {
  let [time, setTime] = useState(0)
  let [live, setLive] = useState(false)
  let [loaded, setLoaded] = useState(false)
  let [isError, setIsError] = useState(false)

  useEffect(() => {
    const updater = setInterval(async () => {
      const response = await fetch('/api/live')
      const json = (await response.json()) as LiveResponse
      if(json.isLive) {
        setLive(true)
      }
      if(json.lastLive) {
        const streamDate = new Date(json.lastLive)
        const currentDate = new Date()
        const subDate = currentDate.getTime() - streamDate.getTime()
        setTime((subDate - (subDate % 3600000)) / 3600000)
      }
      if(json.errorOccurred) {
        setIsError(true)
      }
      setLoaded(true)
    }, 2000)

    return () => clearInterval(updater)
  })

  if(isError) {
    return (
      <Base isLilpaLive={false} isLoading={false}>
        <h1>오류가 발생했습니다!</h1>
      </Base>
    )
  }

  if(!loaded) {
    return (
      <Base isLilpaLive={false} isLoading={true}>
      </Base>
    )
  }

  if(live) {
    return (
      <Base isLilpaLive={true} isLoading={false}>
        <h1>릴파넴 트위치 ON!</h1>
        <h2><a href='https://twitch.tv/lilpaaaaaa' style={{textDecoration: 'underline', color: 'white'}}>방송 보러가기</a></h2>
      </Base>
    )
  }

  return (
    <Base isLilpaLive={false} isLoading={false}>
      <h1>릴파넴 문여세요ㅛㅛㅛㅛㅛㅛㅛ</h1>
      <h2>릴파님이 방송을 키시지 않은지: {time === 0 ? '로드중..' : `${time}년째`}</h2>
    </Base>
  )
}
