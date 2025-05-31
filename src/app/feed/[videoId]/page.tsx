interface VideoPage{
    params: {videoId: string}
}

const page = ({params}: VideoPage)=>{
    return(
        <div>
            videoId page: {params.videoId}
        </div>
    )
}

export default page;