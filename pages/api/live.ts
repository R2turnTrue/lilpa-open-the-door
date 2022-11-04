import type { NextApiRequest, NextApiResponse } from 'next'
import LiveResponse from '../../global/liveResponse'

interface TwitchTokenResponse {
    access_token: string,
    expires_in: number,
    token_type: string
}

interface TwitchSearchChannelResponse {
    data: TwitchSearchChannelData[]
}

interface TwitchSearchChannelData {
    is_live: boolean
}

interface TwitchVideoResponse {
    data: TwitchVideoData[]
}

interface TwitchVideoData {
    created_at: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LiveResponse>
) {
    try {
        const tokenRes = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,{
            method: 'POST'
        })
        const token = (await tokenRes.json()) as TwitchTokenResponse

        const channelRes = await fetch(`https://api.twitch.tv/helix/search/channels?query=lilpaaaaaa`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.access_token}`,
                'Client-Id': process.env.TWITCH_CLIENT_ID as string
            }
        })
        const channel = (await channelRes.json()) as TwitchSearchChannelResponse

        const videosRes = await fetch(`https://api.twitch.tv/helix/videos?user_id=169700336`,{ // channel id of lilpaaaaaa
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.access_token}`,
                'Client-Id': process.env.TWITCH_CLIENT_ID as string
            }
        })
        const videos = (await videosRes.json()) as TwitchVideoResponse

        res.status(200).json({
            isLive: channel.data[0].is_live,
            lastLive: videos.data[0].created_at,
            errorOccurred: false
        })
    } catch(ex: any) {
        res.status(500).json({
            isLive: false,
            lastLive: '0',
            errorOccurred: true
        })
    }
}
