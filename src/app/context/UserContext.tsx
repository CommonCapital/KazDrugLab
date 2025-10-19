import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from 'react';
import {useSession} from "next-auth/react"
import { getUserByEmail } from '@/lib/actions/user.action';



const userContext = createContext<any>(null);
export const UserProvider = ({children}: {children: ReactNode}) => {
    const {data: session} = useSession();
    
   const [user, setUser] = useState({
  
  firstName: "Nursan",
  lastName: "Omarov",
  photo: "/Default_User_image.png",
  jobTitle: "Drug Researcher",
  userBio: "Passionate about advancing drug research and improving patient outcomes through innovative solutions.",
});

useEffect(() => {
  const fetchUser = async () => {
    if (session?.user?.email) {
      const fetchedUser = await getUserByEmail(session.user.email);
      setUser({
        
        firstName: fetchedUser?.firstName || "Nursan",
        lastName: fetchedUser?.lastName || "Omarov",
        photo: fetchedUser?.photo || "/Default_User_image.png",
        jobTitle: fetchedUser?.jobTitle || "Drug Researcher",
        userBio: fetchedUser?.userBio || "Passionate about advancing drug research and improving patient outcomes through innovative solutions.",
      });
    }
  };
  fetchUser();
}, [session?.user?.email]);


    return (
        <userContext.Provider value={user}>{children}</userContext.Provider>
    )
};
export const useUser = () => useContext(userContext);