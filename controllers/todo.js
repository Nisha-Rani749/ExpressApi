import {v4 as uuidv4} from'uuid';
let users = [];
export const getUsers=(req,res)=>{
    //console.log(users);
res.send(users);
}
 
 export const createUser=(req,res)=>{
    //console.log('POST ROUTE REACHED');
    const user=req.body;
    
    user.push({...user, id:uuidv4()});
    res.send(`user with emailid ${user.emailid} added to the database!`);
}
 export const getUser=(req,res)=>{
    const {id}=req.params;
    const founduser=user.find((user)=>user.id==id);
    res.send(founduser);

}

export const deleteUser=(req,res)=>{
    const {id}=req.params;

    user=user.filter((user)=>user.id!=id);
    res.send(`user with the id ${id} deleted from the database`);
}
export const updateUser=(req,res)=>{
    const {id}=req.params;
   const{emailid,name}=req.body;
   const usertobeupdated=user.find((user)=>user.id==id);
   if(emailid){
       user.emailid=emailid;
   }
    
   if(name){
    user.name=name;
}
res.send(`user with the id ${id} has been updated`);
 
}
