import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf.js";


class Athuservice {

client = new Client();
account;

constructor(){

     this.client
       .setEndpoint(conf. appwriteUrl)
       .setProject(conf.appwriteprojecturl)
       this.account = new Account(this.client);

}

   async createAccount ({email,password,name }){

    try{
         const userAccount =  await this.account.create(ID.unique(), email,password,name);
         if(userAccount){
              return this.login({email, password});
         }
         else {

            return 
         }
    }
    catch (error){
          throw error; 

    }
   }
async login ({email,password}){

    try {
  return await this.account.createEmailPasswordSession(email,password);

    }
    catch{
            throw error;
    }

}
    async getCurrentuser(){
        try{

        }
        catch{
            console.log("Appwrite service ::: getcurrentuser error ",error);

        }
        return null;
    }

    async logout(){
        try{
              await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite service :: logout :: error",error);
        }
    }
}

const authService = new Athuservice();

export default  authService