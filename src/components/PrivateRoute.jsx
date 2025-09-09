import React, { use } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function PrivateRoute({isLoggedIn,children}) {

    if(isLoggedIn){
        return children;
    }else{
        return <Navigate to="/login" />          //       we can do this also to navigate to some page
    }
}

export default PrivateRoute