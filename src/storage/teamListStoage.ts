let teamList: teamType[]

const getTeamList = (): teamType[] => {
    return teamList
}

const setTeamList = (teams: teamType[]) => {
    teamList = teams;
}

export {
    getTeamList,
    setTeamList
}
