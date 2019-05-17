import helper from '../helpers/helper'
import users from '../data/users';

const createUser = (newUser) => {
    return new Promise((resolve, reject) => {
         //const id = helper.getNewId(users)
         const id = users.length + 1;

        console.log(id);
        console.log(helper.getNewId(users))
        
        const { email,
            firstName,
            lastName} = newUser;
            const userArray = [id, email, firstName, lastName]
        let NewUser = [ ...userArray ];
        console.log(NewUser);
        users.push(...NewUser)
        console.log(helper.getNewId(users))
        resolve(newUser)
    })
};

/*const logUserIn = (user) => {
    return new Promise((resolve, reject) => {
        const checkUser = users.find(email => email.email === user.email);
        if (checkUser) {
        
    }
    });
    
};*/

module.exports = {
  createUser,
};
