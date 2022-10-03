import coursesObj from '../data/courses'
import CoursesList from './CoursesList'

const Courses = () => {
  return (
    <CoursesList courses={coursesObj}/>
  )
}

export default Courses
