function randomPassword(number) {
    let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomPassword = "";
    for(let i = 0;i<= number;i++)
        {
            randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomPassword;
    }
console.log(randomPassword(10));