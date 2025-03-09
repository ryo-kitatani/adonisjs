import Todo from '#models/todo'

export class TodoService {
  async all() {
    return await Todo.all()
  }

  async find(id: number) {
    // 全todoからidが一致するものを検索
    return await Todo.find(id)
  }

  async create(title: string) {
    // 新しいtodoを作成
    return await Todo.create({ title, completed: false })
  }

  async delete(id: number) {
    // idが一致するtodoを削除
    const todo = await Todo.find(id)
    if (todo) {
      await todo.delete()
    }
  }
}
