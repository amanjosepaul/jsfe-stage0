"use client";

import React from "react";

// refactor this component to use newest react syntaxes
// such hooks, functional component etc

class UserList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      // Attempt to access error.message safely
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      return <p>Error: {errorMessage}</p>;
    }

    // Define the type for user explicitly if needed, or use any
    const userListItems = users.map((user: any) => (
      <li key={user.id}>{user.name}</li>
    ));

    return <ul>{userListItems}</ul>;
  }
}

export default function Q3Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Q3 - User List (Class Component)
      </h1>
      <UserList />
    </div>
  );
}
