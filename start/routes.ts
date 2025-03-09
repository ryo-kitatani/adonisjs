/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TodosController = () => import('#controllers/todos_controller')

router.on('/').render('pages/home')
router.get('todos', [TodosController, 'index']).as('todos.index')
router.get('todos/:id', [TodosController, 'show']).as('todos.show')
router.post('todos', [TodosController, 'create'])
router.delete('todos/:id', [TodosController, 'delete'])
router.on('/inertia').renderInertia('home')
router.get('inertia/todos', [TodosController, 'inertiaIndex'])
router.get('inertia/todos/:id', [TodosController, 'inertiaShow'])
