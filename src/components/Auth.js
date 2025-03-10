
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logout } from '../slices/authSlice';
import { auth, provider, signInWithPopup, signOut } from '../firebaseConfig';

const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser({ user: result.user, role: 'staff' }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default Auth;