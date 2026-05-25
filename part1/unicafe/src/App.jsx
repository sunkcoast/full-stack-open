import { useState } from 'react'

/*
  Component Button
  Digunakan untuk membuat tombol reusable
  Props:
  - text     : tulisan tombol
  - onClick  : function saat tombol diklik
*/
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

/*
  Component StatisticLine
  Digunakan untuk menampilkan
  satu baris statistik di dalam table

  Contoh:
  good      3
*/
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

/*
  Component Statistics
  Digunakan untuk menampilkan
  seluruh data statistik feedback
*/
const Statistics = ({ good, neutral, bad }) => {

  // Menghitung total semua feedback
  const total = good + neutral + bad

  /*
    Menghitung rata-rata

    good    = +1
    neutral = 0
    bad     = -1

    Rumus:
    (good - bad) / total
  */
  const average = (good - bad) / total

  // Menghitung persentase feedback positif
  const positive = (good / total) * 100

  /*
    Conditional rendering

    Jika belum ada feedback,
    tampilkan pesan berikut
  */
  if (total === 0) {
    return <p>No feedback given</p>
  }

  // Jika ada feedback, tampilkan statistik
  return (
    <table>
      <tbody>

        {/* Menampilkan jumlah feedback good */}
        <StatisticLine text="good" value={good} />

        {/* Menampilkan jumlah feedback neutral */}
        <StatisticLine text="neutral" value={neutral} />

        {/* Menampilkan jumlah feedback bad */}
        <StatisticLine text="bad" value={bad} />

        {/* Menampilkan total feedback */}
        <StatisticLine text="all" value={total} />

        {/* Menampilkan nilai rata-rata */}
        <StatisticLine text="average" value={average} />

        {/* Menampilkan persentase positif */}
        <StatisticLine
          text="positive"
          value={`${positive} %`}
        />

      </tbody>
    </table>
  )
}

/*
  Root Component
  Component utama aplikasi
*/
const App = () => {

  /*
    State untuk menyimpan
    jumlah masing-masing feedback
  */

  const [good, setGood] = useState(0)

  const [neutral, setNeutral] = useState(0)

  const [bad, setBad] = useState(0)

  return (
    <div>

      {/* Judul */}
      <h1>give feedback</h1>

      {/* Tombol good */}
      <Button
        text="good"
        onClick={() => setGood(good + 1)}
      />

      {/* Tombol neutral */}
      <Button
        text="neutral"
        onClick={() => setNeutral(neutral + 1)}
      />

      {/* Tombol bad */}
      <Button
        text="bad"
        onClick={() => setBad(bad + 1)}
      />

      {/* Judul statistik */}
      <h1>statistics</h1>

      {/* Menampilkan component statistics */}
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />

    </div>
  )
}

export default App