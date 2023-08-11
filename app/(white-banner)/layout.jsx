export default function PostLayout({ children }) {
  return (
    <div>
      <marquee
        style={{
          background: '#fff',
          color: 'purple'
        }}
      >
        Banner compartido entre Posts y About
      </marquee>
      {children}
    </div>
  )
}
