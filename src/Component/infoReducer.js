const infoReducer = (state = [],action) => {
    switch (action.type) {
        case 'ADD_INFO':
            return state.concat([action.data]);
        case 'DEL_INFO':
            return state.filter((info) => info.id !== action.id);
        case 'EDI_INFO':
            return state.map((info) => info.id === action.id? {...info,editing:!info.editing}:info );
        case 'UPD_INFO':
            return state.map((info) => {
                if(info.id === action.id) {
                    return{
                        ...info,
                        title: action.data.ntitle,
                        firstname: action.data.nfirstname,
                        lastname: action.data.nlastname,
                        birthday: action.data.nbirthday,
                        nation: action.data.nnation,
                        citizenid: action.data.ncitizenid,
                        gender: action.data.ngender,
                        mobileno: action.data.nmobileno,
                        passportno: action.data.npassportno,
                        expectedsalary: action.data.nexpectedsalary,
                        editing: !info.editing,
                    }
                }
                else{
                    return info;
                }
            })
        case 'CHK_ALL':
            return state.map((info) => {
                    return{
                        ...info,
                        checking: !info.checking
                    }  
                })
        case 'DEL_ALL':
            return state.filter((info) => info.id === action.id ) 
        default:
            return state;
    }
}

export default infoReducer;