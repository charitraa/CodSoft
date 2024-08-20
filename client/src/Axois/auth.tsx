import axiosInstance from './Axois';


export const register = async (email:String, username:String, password:String) => {
  try {
    const response = await axiosInstance.post('/auth/users/', { email, username, password });
    return response.data;
  } catch (error:any) {
    console.error("Registration failed:", error.response.data);
    throw error;
  }
}

export const login = async (email:String, password:String) => {
    const response = await axiosInstance.post('/auth/jwt/create/', { email, password });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);

    const userResponse = await axiosInstance.get('/auth/users/me/');
    return userResponse.data;
};

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
};