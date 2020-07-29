// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { liked: false };
//     }

//     render() {
//         if (this.state.liked) {
//             return e(
//                 'button',
//                 { onClick: () => this.setState({ liked: false }) },
//                 'unlike'
//             );
//         }
//         else {

//             return e(
//                 'button',
//                 { onClick: () => this.setState({ liked: true }) },
//                 'Like'
//             );

//         }
//     }
// }

// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(LikeButton), domContainer);


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //debug
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(<NameForm />, document.getElementById('root'));