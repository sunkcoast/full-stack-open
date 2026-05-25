const Header = (props) => {
  // props.course sekarang adalah objek besar, jadi kita ambil properti .name
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  // props.course memiliki properti .parts yang merupakan sebuah array
  return (
    <div>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

const App = () => {
  // Struktur data final: Satu objek tunggal yang memuat semua informasi proyek
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      {/* Kita cukup mengoper satu objek 'course' ini ke semua komponen */}
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App