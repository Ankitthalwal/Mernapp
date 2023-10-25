import { openUploadWidget } from "../../Utils/Cloudinaryservice";
import { cloudinary_upload_preset } from "../../config";
const CloudinaryUpload =({seturl,setName})=>{
    const uploadImagewidget =()=>{
        let myUploadwidget = openUploadWidget(
            {
            cloudName:"de5hp4l2u",
            uploadPreset:cloudinary_upload_preset,
           
            sources:["local"],
        
            },
            function (error,result){
                 if(!error && result.event  === "success"){
                    // console.log(result.info.secure_url)
                           seturl(result.info.secure_url);
                          setName(result.info.original_filename);
                 }
                 else{
                    if(error){
                        console.log(error);
                    }
                    
                   
                 }
            }
        );
        myUploadwidget.open();
  
    }
    return (
        <button className="bg-white text-black  rounded-full p-4 font-semibold" onClick={uploadImagewidget}>Select track</button>
    );
}
export default CloudinaryUpload;