import { Link } from '@inertiajs/react'

interface Todo {
  id: number
  title: string
  completed: boolean
}

interface Props {
  todo: Todo
}

export default function Show({ todo }: Props) {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      padding: 20,
      backgroundColor: '#f4f4f4'
    },
    heading: {
      textAlign: 'center' as const,
      color: '#333'
    },
    card: {
      background: 'white',
      padding: 20,
      margin: '20px auto',
      maxWidth: 500,
      borderRadius: 8,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    backLink: {
      display: 'block',
      marginTop: 20,
      textAlign: 'center' as const
    }
  }

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>Todo 詳細</h1>

      <div style={styles.card}>
        <h2>{todo.title}</h2>
        <p>ステータス: {todo.completed ? '完了' : '未完了'}</p>
        {/* ここに他の詳細情報を追加できます */}
      </div>

      <Link href="/inertia/todos" style={styles.backLink}>一覧に戻る</Link>
    </div>
  )
}
