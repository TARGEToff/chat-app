import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://pejryzqentklhwacybfx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTQ2OTEyMCwiZXhwIjoxOTQ3MDQ1MTIwfQ.DMCXTp02Iwiomfn_PJOGg7jfDxj7_fDC-gO4FZszo1k"
);

const signInWith = async(provider: string) => {
    const { user, session, error } = await supabase.auth.signIn({
        provider,
    }, {
        redirectTo: "http://localhost:3000/channel/general",
    });
}

const signout = async() => {
    const { error } = await supabase.auth.signOut();
}

const getMessages = async(setData: Function, channel: Channel) => {
    const { data, error } = await supabase
        .from(channel)
    setData(data);
}

const sendMessage = async(message: string, user: User, channel: Channel) => {
    const { data, error } = await supabase
        .from(channel)
        .insert([{ 
            author: user.user_metadata.full_name,
            authorAvatar: user.user_metadata.avatar_url,
            content: message,
            authorId: user.id 
        }]) 
}

export { supabase, signInWith, signout, getMessages, sendMessage }



