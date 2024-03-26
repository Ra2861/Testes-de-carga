import { Response } from 'express'
import { Result, ValidationError } from 'express-validator'

export function validBodyAndParamsRequest(
  errors: Result<ValidationError>,
  res: Response,
): boolean {
  if (!errors.isEmpty()) {
    res.status(400).json({
      error: errors.array()[0],
    })
    return true // Indicates there are errors
  }
  return false // Indicates no errors
}
