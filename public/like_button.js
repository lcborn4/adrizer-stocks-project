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
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    //debug
    // alert('A name was submitted: ' + this.state.value);
    console.log('this.state.value', this.state.value)
    // componentDidMount() {
    // fetch(`http://localhost:3000/intraday/${this.state.value}`)
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.setState({ contacts: data })
    //   })
    //   .catch(console.log)
    // // }
    console.log('calling route')
    // const response =
      // await axios.get(`http://localhost:3000/intraday/${this.state.value}`)
    // console.log(response.data)


    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* {this.state.value} */}
      </div>
    );
  }
}
ReactDOM.render(<NameForm />, document.getElementById('root'));