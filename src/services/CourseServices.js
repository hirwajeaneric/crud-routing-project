import axios from "axios";

export class CourseServices {
    static serverURL = 'http://localhost:8080';

    static getCourses(){
        let dataURL = `${this.serverURL}/courses`;
        return axios.get(dataURL)
    }

    static addCourse(course){
        let dataURL = `${this.serverURL}/courses`;
        return axios.post(dataURL, course)
    }

    static getOneCourse(courseId){
        let dataURL = `${this.serverURL}/courses/${courseId}`;
        return axios.get(dataURL);
    }
}