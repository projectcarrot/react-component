import { useState } from "react"
import '../components/Register.css'

function Register() {

  const genders = [
    { id: 1, label: "Male", value: "male" },
    { id: 2, label: "Female", value: "female" },
    { id: 3, label: "Other", value: "other" }
  ]

  const hobbiesList = [
    { id: 1, label: "Music", value: "Music" },
    { id: 2, label: "Movies", value: "Movies" },
    { id: 3, label: "Plastic Model", value: "Plastic Model" }
  ]

  const roles = [
    { id: 1, label: "General Staff", value: "general staff" },
    { id: 2, label: "Developer", value: "developer" },
    { id: 3, label: "System Analyst", value: "system analyst" }
  ]

  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [gender, setGender] = useState("")
  const [hobbies, setHobbies] = useState([])
  const [role, setRole] = useState("general staff")

  function onHobbyChange(e) {
    const value = e.target.value
    const checked = e.target.checked

    if (checked) {
      setHobbies(prev => [...prev, value])
    } else {
      setHobbies(prev => prev.filter(h => h !== value))
    }
  }

  return (
    <div className="form-wrapper">
      <div className="form-box">

        <label>Username</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />

        <label>Firstname</label>
        <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />

        <label>Lastname</label>
        <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />

        <label>Gender</label>
        <div className="options">
          {genders.map(g => (
            <label key={g.id}>
              <input
                type="radio"
                name="gender"
                value={g.value}
                onChange={e => setGender(e.target.value)}
              />
              {g.label}
            </label>
          ))}
        </div>

        <label>Hobbies</label>
        <div className="options">
          {hobbiesList.map(h => (
            <label key={h.id}>
              <input
                type="checkbox"
                value={h.value}
                onChange={onHobbyChange}
              />
              {h.label}
            </label>
          ))}
        </div>

        <label>Role</label>
        <select value={role} onChange={e => setRole(e.target.value)}>
          {roles.map(r => (
            <option key={r.id} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>

        <hr />

        <div className="result">
          <p>Username: <span>{username}</span></p>
          <p>Firstname: <span>{firstname}</span></p>
          <p>Lastname: <span>{lastname}</span></p>
          <p>Gender: <span>{gender}</span></p>
          <p>Hobbies: <span>{hobbies.join(", ")}</span></p>
          <p>Role: <span>{role}</span></p>
        </div>

      </div>
    </div>
  )
}

export default Register
