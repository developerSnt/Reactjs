import { Client,ID,Databases,Storage,Query } from "appwrite";
import conf from "../conf/conf";



export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client(conf.appwriteUrl );
        this.client(conf.appwriteprojecturl);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost ({title,slug,content,featureimage,status,userid}){
        try{
            return await this.databases.createDocument(
                conf.appwriteUrl,
                conf.  appwritecollectionId,
                slug,{
                    title,
                    featureimage,
                    content,
                    status,
                    userid,
                }
            )
        }
        catch (error){
            console.log("Appwrite service :::  createpost :: error",error);

        }
    }
       async updatePost(slug,{title,content,featureimage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwritedatabaseId ,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featureimage,
                    status,
                }
            )
        }
        catch (error){
            console.log("Appwrite service :::  updatepost :: error",error);
    
        }
       }
       async deletePost(slug){
        try{
                  await this.databases.deleteDocument(
                    conf.appwritedatabaseId ,
                conf.appwritecollectionId,
                slug
             
                  )
                  return true
        }
        catch (error){
            console.log("Appwrite service :::  Deletepost :: error",error);

        }
        return false
       }
       async getpost(slug){
        try{

            return await this.databases.getDocument(
                 
                    conf.appwritedatabaseId ,
                conf.appwritecollectionId,
               slug
            )
            return true
        }
        catch (error){
            console.log("Appwrite service :::  Deletepost :: error",error);

        }
        return false
       }
       
       async getallpost(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries,
            )
            return true
        }
        catch{
            console.log("Appwrite service :::  getAllpost :: error",error); 
        }

       }
       async uploedfile(file){
        try{
                return await this.bucket.createFile(
                    conf.apopwritebucketId ,
                    ID.unique(),
                    file
                )
                return true
        }
        
        catch{
            console.log("Appwrite service :::  Uploedfile :: error",error); 
        }
       }

       async deletefile(FILEID){
        try{
            await this.bucket.deleteFile(
                conf.apopwritebucketId ,
                FILEID
                
            )
            return true
        }
        catch{
            console.log("Appwrite service :::  Uploedfile :: error",error); 
        }

       }

       async filepreview (fileid){
         return this.bucket.getFilePreview(
            conf.apopwritebucketId,
            fileid
         )
       }
}
const service = new Service()
export default service