import React from 'react'

const padding = {
    margin: '15px'
}


const newsLetter = () => {
    return (
        <div>
            <form>
                <label for="fname"></label>
                <input type='text' id='fname' placeholder="First name" style={padding}/>
                <label for="lname"></label>
                <input type='text' id='lname' placeholder="Last name" style={padding}/>
                <br/>
                <label for="email"></label>
                <input type='text' id='email' placeholder="Email" style={padding} />
                <br/>
                <br/>
                <input type="submit" style={padding}/>
            </form>
        </div>
    )
}

export default newsLetter