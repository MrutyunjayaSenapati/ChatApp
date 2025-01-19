import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore=create((set,get)=>({
    messages:[],
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
            const res=await axiosInstance.get
            (`/messages/${userId}`);
            console.log(res);
            if(res?.data){
            set({messages:res.data});
            }
            else{
                toast.error("No messages found");
            }
        } catch (error) {
            toast.error(error.response?.data?.messages||"Failed to fetch messages.");
            
        }
        finally{
            set({isMessagesLoading:false});
        }
    },
   sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    if (!selectedUser) {
        toast.error("No user selected");
        return;
    }

    try {
        const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
        set({ messages: [...messages, res.data] });
    } catch (error) {
        toast.error(error.response?.data?.messages || "Failed to send message");
    }
},

  
    setSelectedUser:(selectedUser)=>set({selectedUser})


}))