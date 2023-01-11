
// export const myMutation = (state) => {

// }
export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    console.log(entries)
    state.isLoading = false
}
export const updateEntry = (state, entry) => {
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    //console.log(idx)
    state.entries[idx] = entry
}
export const addEntries = (/*state*/) => {

}