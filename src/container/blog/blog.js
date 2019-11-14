import React  from 'react';
import axios from 'axios';
import Post from '../../components/post/post';
import Fullpost from '../../components/fullpost/fullpost'

class Blog extends React.Component {

    constructor() {
        super();
        this.state = { 
                isLoading: true,
                posts: [],
                postselected: ''
            };
    }


    fetchblog() {
        console.log("call fetchblog function");
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res => {
                const postsdata = res.data.slice(0 , 4)
                this.setState({
                    posts:postsdata,
                    isLoading: false,
                });
             })
        
    }

    componentDidMount() {
        this.fetchblog();
    }

    render() {

        const { isLoading} = this.state;
        return (
            <div className="container">
                <h3>Latest Blog</h3>
                <div className="mt-3">
                    <div className="row">
                        {!isLoading ? (
                            this.state.posts.map(post =>
                                <Post  key={post.id} title={post.title} body={post.body}  />
                            )
                           
                        ) : ( 
                            <h1>Loading...</h1>
                        )}
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Blog;