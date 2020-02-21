import React from 'react'
import SearchBar from './SearchBar'
import UserList from './UserList'
class App extends React.Component {

    // state = {users: [] }

    onUsernameSubmit = (username) => {
        //search users from db of all users tested out with 
        console.log(username)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onUsernameSubmit}/>
                <UserList 
                // users={this.state.users}
                />
            </div>
        )
    }
}

export default App;