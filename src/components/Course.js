import PropTypes from 'prop-types'
import { Card, CardLeft, CardRight, BorderTop } from './Styles'

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
          <Card>
            <CardLeft>
            <span style={{"textTransform": "capitalize"}}>{course['course-type']}</span>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            </CardLeft>
            <CardRight>
              <BorderTop>Key Topics & Skills</BorderTop>
            {course.topics.map((topic) => {
              return (
                <BorderTop secondary>{topic}</BorderTop>
              )
            })}
            </CardRight>
          </Card>
      ))}
    </>
  )
}

Course.propTypes = {
  courses: PropTypes.array.isRequired,
}
export default Course
