let currentUser: UserType;

const getCurrentUser = (): UserType => {
    return currentUser;
}

const setCurrentUser = (user: UserType) => {
    currentUser = user;
}

export {
    getCurrentUser,
    setCurrentUser
}
