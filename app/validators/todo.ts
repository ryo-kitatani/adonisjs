import vine from '@vinejs/vine'

/**
 * Todo用のバリデータークラス
 */
export default class TodoValidator {
  /**
   * 作成用バリデーションスキーマ
   */
  public static createSchema = vine.object({
    title: vine.string().trim().minLength(3).maxLength(255),
    description: vine.string().trim().optional(),
    is_completed: vine.boolean().optional(),
  })

  /**
   * 更新用バリデーションスキーマ
   */
  public static updateSchema = vine.object({
    title: vine.string().trim().minLength(3).maxLength(255).optional(),
    description: vine.string().trim().optional(),
    is_completed: vine.boolean().optional(),
  })

  /**
   * カスタムエラーメッセージ
   */
  public static messages = {
    'title.required': 'タスク名は必須です',
    'title.minLength': 'タスク名は最低3文字必要です',
    'title.maxLength': 'タスク名は255文字以内にしてください',
  }
}
