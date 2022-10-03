import PropTypes from 'prop-types'
import React, { useState, useMemo, useEffect } from 'react'
import {  ContainerSelect, Wrapper, Heading, Title, WrapperInner,Button, Div } from './Styles'
import Course from './Course'
import Select from './Select'
import './App.css'
const coursesPerPage = 3
let coursesArray = []

const CoursesList = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState([])
  const [showingCourses, setShowingCourses] = useState(courses)
  const [loadMore, setLoadMore] = useState(coursesPerPage)

  //get the selected courses
  const getSelectedCourses = () => {
    if (!selectedCourse) {
      return courses
    }
    return courses.filter((course) => course['course-type'] === selectedCourse)
  }

  const handleCourseTypeChange = (event) => {
    setSelectedCourse(event.target.value)
  }

  const coursesType = Array.from(
    new Set(courses.map((type) => type['course-type'])),
  )

  const filteredCourse = useMemo(getSelectedCourses, [selectedCourse, courses])

  const coursesLoadPerPage = (start, end) => {
    const coursePerPage = courses.slice(start, end)
    coursesArray = [...coursesArray, ...coursePerPage]
    setShowingCourses(coursesArray)
  }

  useEffect(() => {
    coursesLoadPerPage(0, coursesPerPage)
  }, [])

  const handleShowMoreCourses = () => {
    coursesLoadPerPage(loadMore, loadMore + coursesPerPage)
    setLoadMore(loadMore + coursesPerPage)
  }

  return (
    <>
    
        <Wrapper>
        <Title>Courses</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Wrapper>
      <WrapperInner  style={{padding:'20px 0'}}>
        <Wrapper>
      <ContainerSelect style={{padding:'0 0 20px 20px'}}>
        <Heading secondary>course type</Heading>
        <Select  onChange={handleCourseTypeChange} options={coursesType} />
      </ContainerSelect>
        <div>
          {filteredCourse.length === 0 ? (
            <Div>
              <div style={{padding:'15px 0'}}>Showing {showingCourses.length} results</div>
              <Course courses={showingCourses} />
              <Button onClick={handleShowMoreCourses}>Load more</Button>
            </Div>
          ) : (
            <>
              <div style={{padding:'15px 0'}}>Showing {filteredCourse.length} results</div>
              <Course courses={filteredCourse} />
            </>
          )}
        </div>
      </Wrapper>
      </WrapperInner>
    </>
  )
}

CoursesList.prototype = {
  courses: PropTypes.array.isRequired,
}
export default CoursesList
