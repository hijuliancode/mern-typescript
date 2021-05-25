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

export const getVideos:RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find()
    return res.json(videos)
  } catch (error) {
    console.log(error)
  }
}

export const getVideo:RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  if (!videoFound) return res.status(204).json()
  return res.json(videoFound)
}

export const updateVideo:RequestHandler = (req, res) => {
  res.json('updating videos')
}

export const deleteVideo:RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id)
  if (!videoFound) return res.status(404).json()
  return res.json('Video deleted')
}
