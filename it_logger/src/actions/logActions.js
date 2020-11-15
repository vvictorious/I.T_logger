import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG } from './types'

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading()

//         const res = await fetch('/logs')
//         const data = await res.json()

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

//get logs from the server
export const getLogs = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/logs')
        const data = await res.json()
    
        dispatch({
            type: GET_LOGS,
            payload: data
        })        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.responsse.data
        })
    }
}

//add log
export const addLog = (log) => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        dispatch({
            type: ADD_LOG,
            payload: data
        })        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.responsse.data
        })
    }
}

//delete log from server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading()

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })
    
        dispatch({
            type: DELETE_LOG,
            payload: id
        })        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.responsse.data
        })
    }
}

//update log on server 
export const updateLog = log => async dispatch => {
    try {
        setLoading()

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.responsse.data
        })
    }
}

//set current log for update
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//clear current log for update
export const cleaarCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}