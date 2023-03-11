const App = () => {
  
  const course1 = {
    title: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      }
    ]
  }
  const exercisesNumber = course1.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <div>
      <Header title={course1.title}/>
      
      <Content parts={course1.parts}/>
      
      <Total number={exercisesNumber}>
        Congratulations!
      </Total>
    </div>
  )
}

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {
        parts.map(({title, exercises}) => {
          return (
            <ContentItem title={title} exercises={exercises}/>
          )
        })
      }
    </div>
  )
}

const ContentItem = ({title, exercises}) => {
  return (
    <p>Course "{title}" includes {exercises} exercises</p>
  )
}

const Total = ({number, children}) => {
  return (
    <div>
      <p>Total number of exercises {number}</p>
      <p>{children}</p>
    </div>
  )
}

export default App;
