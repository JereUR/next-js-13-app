import Image from 'next/image'

const fetchComments = async (id) => {
  //await new Promise((resolve) => setTimeout(resolve, 1000))Para visualizar loader

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

export default async function Comments({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ fontSize: '12px', background: '#444', padding: '10px 40px' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
            alt={comment.name}
            width="30"
            height="30"
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
