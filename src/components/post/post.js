import React  from 'react';



class Post extends React.Component {
    constructor() {
        super()
        this.state = {name:''};
        

    }
    
    render() {
        return (
            <div className="col-6">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title" onClick={this.HandleBlogDetail} >{this.props.title}</h5>
                        <p>{this.props.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;