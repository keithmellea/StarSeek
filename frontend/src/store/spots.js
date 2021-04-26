

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots')length

    if (response.ok) {
        const spots = await response.json();

    }
}

const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE:
          const newState = {};
        
    }
}