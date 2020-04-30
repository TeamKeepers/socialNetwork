export const checkEmail = (email) => {

    let charArray = email.split("");

    const forbiddenEmails = [
        'yopmail.com',
        'mail.com'
    ]

    let checkedEmail = email.split("@");
    checkedEmail = checkedEmail[1];

    if(forbiddenEmails.includes(checkedEmail) || !charArray.includes("@"))
    {
        return false;
    } else {
        return true;
    }
}

export const checkPassword = (password) => {

    const pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})");

    if(password.match(pwdRegex))
    {
        return true;
    } else {
        return false;
    }

}

export const mirrorPassword = (pwd, mirrorPwd) => {
    if(pwd === mirrorPwd)
    {
        return true;
    } else {
        return false;
    } 
}