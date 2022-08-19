import axios from "axios";

export class CourseServices {
    static serverURL = 'http://localhost:9000';

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

    static updateCourse(course, courseId) {
        let dataURL = `${this.serverURL}/courses/${courseId}`;
        return axios.put(dataURL, course);
    }

    static deleteCourse(courseId) {
        let dataURL = `${this.serverURL}/courses/${courseId}`;
        return axios.delete(dataURL);
    }
}