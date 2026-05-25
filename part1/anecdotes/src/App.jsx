import { useState } from 'react'

const App = () => {

  /*
    Array berisi daftar anecdotes
  */
  const anecdotes = [
    'If it hurts, do it more often.',

    'Adding manpower to a late software project makes it later!',

    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',

    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',

    'Premature optimization is the root of all evil.',

    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',

    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',

    'The only way to go fast, is to go well.'
  ]

  /*
    State untuk menyimpan
    index anecdote yang sedang tampil
  */
  const [selected, setSelected] = useState(0)

  /*
    State untuk menyimpan jumlah vote

    fill(0) digunakan untuk membuat
    array berisi angka 0

    Contoh:
    [0,0,0,0,0,0,0,0]
  */
  const [votes, setVotes] = useState(
    new Array(anecdotes.length).fill(0)
  )

  /*
    Function untuk menampilkan
    anecdote random
  */
  const handleNextAnecdote = () => {

    /*
      Math.random()
      menghasilkan angka random 0 - 1

      Math.floor()
      membulatkan ke bawah

      Hasil akhir:
      angka random dari 0 sampai
      panjang array anecdotes
    */
    const randomIndex = Math.floor(
      Math.random() * anecdotes.length
    )

    // Mengubah anecdote yang tampil
    setSelected(randomIndex)
  }

  /*
    Function untuk menambah vote
    pada anecdote yang sedang tampil
  */
  const handleVote = () => {

    /*
      Copy array votes

      React state tidak boleh
      diubah langsung
    */
    const copy = [...votes]

    /*
      Menambah vote pada
      anecdote yang sedang aktif
    */
    copy[selected] += 1

    // Update state votes
    setVotes(copy)
  }

  /*
    Mencari jumlah vote terbesar
  */
  const maxVote = Math.max(...votes)

  /*
    Mencari index dari vote terbesar
  */
  const maxVoteIndex = votes.indexOf(maxVote)

  return (
    <div>

      {/* Judul */}
      <h1>Anecdote of the day</h1>

      {/* Menampilkan anecdote aktif */}
      <p>{anecdotes[selected]}</p>

      {/* Menampilkan jumlah vote */}
      <p>
        has {votes[selected]} votes
      </p>

      {/* Tombol vote */}
      <button onClick={handleVote}>
        vote
      </button>

      {/* Tombol next anecdote */}
      <button onClick={handleNextAnecdote}>
        next anecdote
      </button>

      {/* Judul anecdote terbaik */}
      <h1>Anecdote with most votes</h1>

      {/* Menampilkan anecdote dengan vote terbesar */}
      <p>{anecdotes[maxVoteIndex]}</p>

      {/* Menampilkan jumlah vote terbesar */}
      <p>
        has {votes[maxVoteIndex]} votes
      </p>

    </div>
  )
}

export default App