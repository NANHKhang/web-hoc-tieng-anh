import { useState } from 'react'

function App() {
  const [topics] = useState([
    { id: 1, title: 'Từ vựng TOEIC Cơ bản', words: 50, level: 'Beginner' },
    { id: 2, title: 'Tiếng Anh Giao tiếp Công sở', words: 40, level: 'Intermediate' },
    { id: 3, title: 'Ngữ pháp Thì trong Tiếng Anh', words: 30, level: 'All Levels' },
  ])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eee', paddingBottom: '16px' }}>
        <h1 style={{ color: '#2563eb', margin: 0 }}>Learning English</h1>
        <div>
          <span style={{ marginRight: '16px', fontWeight: 'bold' }}>Trang chủ</span>
          <span style={{ marginRight: '16px' }}>Flashcard</span>
          <span style={{ marginRight: '16px' }}>Trắc nghiệm (Quiz)</span>
          <button style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px' }}>
            Đăng nhập
          </button>
        </div>
      </header>

      <section style={{ textAlign: 'center', padding: '40px 20px', background: '#eff6ff', borderRadius: '12px', marginTop: '24px' }}>
        <h2>Hệ Thống Học Tiếng Anh Trực Tuyến</h2>
        <p>Học từ vựng qua Flashcard có phát âm và luyện bài tập trắc nghiệm theo chủ đề.</p>
      </section>

      <h3 style={{ marginTop: '32px' }}>Chủ đề học tập nổi bật</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        {topics.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#1e40af' }}>{item.title}</h4>
            <p style={{ margin: '4px 0', color: '#555' }}>Số lượng: {item.words} từ vựng</p>
            <p style={{ margin: '4px 0 12px 0', color: '#555' }}>Cấp độ: {item.level}</p>
            <button style={{ padding: '6px 12px', background: '#dbeafe', color: '#1e40af', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Vào học ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App