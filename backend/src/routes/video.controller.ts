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

export const updateVideo:RequestHandler = async (req, res) => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true }) // new true devuelve el editado nuevo y no antiguo
  if (!videoUpdated) return res.status(204).json()
  res.json({
    message: 'Video updated',
    data: videoUpdated
  })
}

export const deleteVideo:RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id)
  if (!videoFound) return res.status(204).json()
  return res.json('Video deleted')
}
