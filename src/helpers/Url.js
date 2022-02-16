
 

export const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page='




export const fileUpload = async (file)=>{
    const cloud ='https://api.cloudinary.com/v1_1/duzh7meuo/upload'
    const formData = new FormData()
    formData.append('Uploadmovie');
    formData.append('file',file);

    const resp = await fetch(cloud,{
        method: 'POST',
        body: formData
    })
        const cloudRes = await resp.json();
}