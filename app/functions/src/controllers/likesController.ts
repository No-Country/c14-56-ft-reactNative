let create = (req: any, res: any, next: any) => {
  res.status(201).json({
    message: 'Post created!',
  })
}

export default { create }
