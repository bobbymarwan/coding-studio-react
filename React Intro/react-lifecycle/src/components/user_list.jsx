import { Component } from "react";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        //Fetch data dari API
        console.log('DID MOUNT');
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                this.setState({users: data.results});
            });
        
        this.interval = setInterval (() => {
            console.log('Data diperbarui');
        }, 5000);
    }

    componentWillUnmount() {
        console.log('WILL UNMOUNT');
        clearInterval(this.interval);
    }

    render() {
        return (
             <div>
                <h2>Data Pengguna</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.login.uuid}>
                            {user.name.first} {user.name.last}
                        </li>
                    ))}
                </ul>
             </div>
        );
    }
}

export default UserList;