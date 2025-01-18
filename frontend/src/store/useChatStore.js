import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore=create((set,get)=>({
    messges:[],
    users:[],
    selectedUser:null,
    isUserLoading:false,
    isMessagesLoading:false,
    
    getUsers:async()=>{
        set({isUserLoading:true});
        try {
            const res=await axiosInstance.get("/messages/users");
            set({users:res.data});
        } catch (error) {
            toast.error(error.response.data.messges);
            
        }
        finally{
            set({isUserLoading:false});
        }
    },
    getMessages:async()=>{
        set({isMessagesLoading:true});
        try {
            const res=await axiosInstance.get(`/messages/${userId}`);
            set({messges:res.data});
        } catch (error) {
            toast.error(error.response.data.messges);
            
        }
        finally{
            set({isMessagesLoading:false});
        }
    },
    sendMessage:async(messageData)=>{
        const {selectedUser,messges}=get();
        try {
            const res=await axiosInstance.post(`/messages/send/${selectedUser._id}`,messageData);
            set({messges:[...messges,res.data]});
        } catch (error) {
            toast.error(error.response.data.messages);
            
        }
    },
  
    setSelectedUser:(selectedUser)=>set({selectedUser})


}))