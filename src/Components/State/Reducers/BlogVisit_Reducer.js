const BlogVisit_Reducer = (state = [], action) => {
    switch (action.type) {
        case "visitStatus":
            if (state.length !== 0) {
                return state.map((data) => {
                    if (data.id === action.payload) {
                        return {
                            ...data,
                            views: data.views + 1
                        }
                    } else {
                        return {
                            ...data,
                            id: action.payload,
                            views: 1
                        }
                    }
                })
            } else {
                return [
                    ...state,
                    {
                        id: action.payload,
                        views: 1
                    },
                ]
            }

        case "visitCount":
            if (state.length !== 0) {
                return state.map((data) => {
                    console.log("find ", data);

                    if (data.id === action.payload) {
                        return data
                    }
                })
            }
        default:
            return state;
    }
};

export default BlogVisit_Reducer;
