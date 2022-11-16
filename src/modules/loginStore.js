const LoginStatus = 'loginStore/LoginStatus';


export const loginStatus = () => ({type: LoginStatus});


const initalStatus = {
    logon: false,
    showProfile : false
};

const loginReducer = (state=initalStatus, action) => {
    switch(action.type){
        case LoginStatus:
            if(state.logon === false) {
                return {logon : true}
            } else {
                return {logon : false}
            }
        default :
            return state;    
    }
        
    
}

export default loginReducer;