import { Router } from 'express';
import { body } from 'express-validator';
import { createAccount, getUser, loginUser } from './handlers';
import { handleInputErrors } from './middleware/validation';
import { authenticate } from './middleware/auth';

const router = Router();

// Auth and Register Router
router.post(
  '/auth/register',
  body('handle').notEmpty().withMessage('El handle no puede ir vacío'),
  body('name').notEmpty().withMessage('El nombre no puede ir vacío'),
  body('email')
    .isEmail()
    .withMessage('E-mail no válido')
    .notEmpty()
    .withMessage('El E-mail no puede ir vacío'),
  body('password')
    .notEmpty()
    .withMessage('El password no puede ir vacío')
    .isLength({ min: 8 })
    .withMessage('Mínimo 8 caracteres'),
  handleInputErrors,
  createAccount
);

router.post(
  '/auth/login',
  body('email')
    .isEmail()
    .withMessage('E-mail no válido')
    .notEmpty()
    .withMessage('El E-mail no puede ir vacío'),
  body('password').notEmpty().withMessage('El password no puede ir vacío'),
  handleInputErrors,
  loginUser
);

router.get('/user', authenticate, getUser);

export default router;
