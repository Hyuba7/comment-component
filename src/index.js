import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';



const App = () => {
    return (
	<div className="ui container comments">
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src ={faker.image.avatar()}/>
					</a>
				<div className="content">
					<a href="/" className="author">
							田中
					</a>
						<div className="metadata">
							<span className="date">本日 PM 6:00</span>
						</div>
						<div className="text">コメント投稿のテスト</div>
				</div>
		</div>

		

	</div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
