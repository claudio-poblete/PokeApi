const { body, validationResult} = require('express-validator')

const validateServiceData = [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('category').notEmpty().withMessage('La categoría es obligatoria'),
  body('description').notEmpty().withMessage('La descripcion es obligatoria'),
  body('location').notEmpty().withMessage('La ubicación es obligatoria'),
]

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

module.exports = {
  validateServiceData,
  handleValidationErrors,
}