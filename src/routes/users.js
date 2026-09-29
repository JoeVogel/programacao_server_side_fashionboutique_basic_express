import { Router } from 'express';

const router = Router();

// GET /users
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' }
  ]);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id: Number(id),
    name: 'João'
  });
});

// POST /users
router.post('/', (req, res) => {
  const { name } = req.body;

  res.status(201).json({
    id: 3,
    name: name
  });
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  res.json({
    id: Number(id),
    name: name
  });
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Usuário ${id} removido com sucesso`
  });
});

export default router;