import { useEffect, useState } from "react"

const useCourse = () => {
    const [course, setCourse] = useState([]);
    if (course) {
        console.log(course);
    }

    useEffect(() => {
        fetch('https://localhost:44389/api/course/all', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        })
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return [course, setCourse];
}

export default useCourse;