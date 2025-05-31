interface VideoPage{
    params: Promise<{videoId: string}>
}

const page = async({params}: VideoPage)=>{
    const {videoId} = await params;
    return(
        <div>
            videoId page: {videoId};
        </div>
    )
}

export default page;