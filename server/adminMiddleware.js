const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.admin) {
    const err = new Error('Not allowed!')
    err.status = 401
    return next(err)
  }
  next()
}

const isAdminOrUser = (req, res, next) => {
  if (!req.user || (!req.user.admin && +req.user.id !== +req.params.userId)) {
    const err = new Error('Not allowed!')
    err.status = 401
    return next(err)
  }
  next()
}

module.exports = {isAdmin, isAdminOrUser}
