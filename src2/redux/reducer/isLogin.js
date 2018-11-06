
class account {
    constructor(username, address, phoneNumber, statusLogin) {
        this.username = username;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.statusLogin = statusLogin;
    }
}

const accountNow = new account('username', '', '', false);

const loginStateReducer = (state = accountNow, action) => {
    if (action.type === 'ISLOGINED') {
        const accountNew = new account(action.username, action.address, action.phoneNumber, true);
        return accountNew;
    }
    if (action.type === 'ISLOGOFF') {
        const accountNew = new account('username', '', '', false);
        return accountNew;
    }
    return state;
};

export default loginStateReducer;
