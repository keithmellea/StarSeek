const HOSTS = "hosts/LOAD";

const host = (list) => ({
  type: HOSTS,
  list,
});


export const getHosts = () => async (dispatch) => {
  const response = await fetch("/api/hosts");

  if (response.ok) {
    const hosts = await response.json();
    dispatch(host(hosts));
  }
};

const initialState = {
  list: [],
};

const hostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOSTS: {
      const allHosts = [];
      action.list.forEach((host) => {
        allHosts[host.id] = host;
      });
      return {
        allHosts,
        ...state,
        list: action.list,
      };
    }
    default:
      return state;
  }
};

export default hostsReducer;