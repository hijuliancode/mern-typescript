import { RequestHandler } from 'express'
import Video from './Video'

export const createVideo:RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({url: req.body.url})
  if (videoFound)
    return res.status(301).json({ message: 'The URL already exists' })

  const newVideo = new Video(req.body)
  const savedVideo = await newVideo.save()
  res.json({
    message: 'Video saved',
    data: savedVideo
  })
}

export const getVideos:RequestHandler = (req, res) => {
  res.json('getting videos')
}

export const getVideo:RequestHandler = (req, res) => {
  res.json('getting video')
}

export const updateVideo:RequestHandler = (req, res) => {
  res.json('updating videos')
}

export const deleteVideo:RequestHandler = (req, res) => {
  res.json('deleting video')
}
