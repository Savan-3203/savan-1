import axios from "axios";

export const reducer = (state, { data, obj }) => {
    switch (data) {
        case 'abc':
            axios.post(`https://student-api.mycodelibraries.com/api/student/add`, obj).then((abc) => {
                state = abc.data.data
                window.location.reload();

            })
            return state;
        case 'delete':
            axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${obj}`).then((abc) => {
                state = abc.data.data
            })
            return state;
        case 'edit':
            axios.delete(`https://student-api.mycodelibraries.com/api/student/update`).then((abc) => {
                state = abc.data.data
            })
            return state;
        default:
            return state;
    }
}