import axios from 'axios';
import { useEffect, useState } from 'react'

const useMembers = (userType) => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async (userType) => {
      
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/members`,
          {
            params: {
                userType: userType
            },
          }
        );
        if (res.status === 200) setDataList(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    };

    useEffect(() => {
      fetchData(userType);
    }, [userType]);
    return {dataList,loading,fetchData}
  }
  


export default useMembers