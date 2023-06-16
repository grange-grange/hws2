const initState = {
    themeId: 1,
}
type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ChangeThemeIdType): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => {
    return {type: 'SET_THEME_ID', id} as const
} // fix any
