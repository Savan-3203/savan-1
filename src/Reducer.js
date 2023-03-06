export const reducer = (state, { type, object }) => {
    switch (type) {
        case 'submit':
            state.push(object)
            return state;
        case 'delete':
           let index = state.findIndex(x=>x.id == object.id)
            state.splice(index, 1);
            return state;
        case 'edit':
           let index1 = state.findIndex(x=>x.id == object.id)
            state.splice(index1, 1,object);
            return state;
        default:
            return state;
    }
}