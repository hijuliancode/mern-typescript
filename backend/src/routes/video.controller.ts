import { RequestHandler } from 'express'

export const createVideo:RequestHandler = (req, res) => {
  res.json('create video')
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
  res.json('getting videos')
}
