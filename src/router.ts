import { Router } from 'express';

const router = Router();

//Routing
router.get('/', (req, res) => {
  res.send('Hola Mundo en Express 2.3');
});

router.get('/nosotros', (req, res) => {
  res.send('Nosotros');
});

router.get('/blog', (req, res) => {
  res.send('Blog');
});

export default router;
