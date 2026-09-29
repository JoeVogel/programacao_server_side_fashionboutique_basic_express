import { Router } from 'express';

const router = Router();

let data = {
	'customers' : []
}

router.get('/', (req, res) => {
  res.json(data);
});

router.post('/', (req, res) => {
  let newCustomer = req.body
	newCustomer.id = data.customers.length

	data.customers.push(newCustomer)
	res.status(201).json({"new_customer_id": newCustomer.id})
});


// router.get('/:id', (req, res) => {
//     let idUsuario = req.params.id
//     //Retornar apenas o elemento da lista que tem o id solicitado
// })

// router.put('/:id', (req, res) => {
//     let idUsuario = req.params.id
//     //Alterar dados do elemento da lista com id
// })

// router.delete('/:id', (req, res) => {
//     let idUsuario = req.params.id
//     // Remover elemento da lista com id 
// })

export default router;
