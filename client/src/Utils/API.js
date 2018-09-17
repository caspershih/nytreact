import axios from "axios";

export default {
    getnytimes: function(query) {
        return axios.get("api/nytimes", { params: {q: query} });
    }
};
