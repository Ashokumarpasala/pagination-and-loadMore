import React from 'react'

function Table() {
    const data = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
          },
          {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
          },
          {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
          }
    ]
  return (
    <div>
          <table class="table">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Name</th>
                    <th >User-Name</th>
                    <th >E-mail</th>
                </tr>
            </thead>
            <tbody>
                {
                 data.map((user) => (
                        <tr key={user.id}>
                            <td >{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                 ))
                }
            </tbody>
          </table>
    </div>
  )
}

export default Table
