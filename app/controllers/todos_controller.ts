import { inject } from '@adonisjs/core'
import { TodoService } from '#services/todo_service'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class TodosController {
  constructor(private todoService: TodoService) {}

  async index({ view }: HttpContext) {
    const todos = await this.todoService.all()
    return view.render('pages/todos/index', { todos })
  }

  async inertiaIndex({ inertia }: HttpContext) {
    const todos = await this.todoService.all()

    // Inertiaレンダリングを使用
    return inertia.render('todos/index', { todos })
  }

  async show({ params, view }: HttpContext) {
    const todoId = Number(params.id)
    const todo = await this.todoService.find(todoId)

    if (!todo) {
      return 'Todo not found'
    }

    return view.render('pages/todos/show', { todo })
  }

  async inertiaShow({ params, inertia }: HttpContext) {
    const todoId = Number(params.id)
    const todo = await this.todoService.find(todoId)

    if (!todo) {
      return 'Todo not found' // もしくはInertiaエラーページにリダイレクト
    }

    return inertia.render('todos/show', { todo })
  }

  async create({ request, response }: HttpContext) {
    const title = request.input('title')
    await this.todoService.create(title)
    return response.redirect().toRoute('todos.index')
  }

  async delete({ params, response }: HttpContext) {
    const todoId = Number(params.id)
    await this.todoService.delete(todoId)

    return response.redirect().toRoute('todos.index')
  }
}
