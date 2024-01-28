const router = require('express').Router()

router.get('/v1', (_req, res) => {
  return res.json({ data: 'v1' })
})

module.exports = router
