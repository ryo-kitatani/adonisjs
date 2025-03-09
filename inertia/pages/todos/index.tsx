import { Link } from "@inertiajs/react";
import Todo from "#models/todo";

interface Props {
  todos: Todo[]
}

export default function Index({ todos }: Props) {
  // CSSスタイル（インラインスタイルとして適用）
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 20,
      backgroundColor: '#f4f4f4'
    },
    heading: {
      textAlign: 'center' as const,
      color: '#333'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      background: '#f4f4f4',
      padding: 10,
      margin: 5,
      borderRadius: 5
    }
  }

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>
        Welcome to Todo App
      </h1>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            ・{todo.title} status: {!todo.completed ? 'Not Completed' : 'Completed'}
            <Link href={`/inertia/todos/${todo.id}`} style={{ marginLeft: 10 }}>詳細</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
