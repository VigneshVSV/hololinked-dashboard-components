// Internal & 3rd party functional libraries
import React from 'react'
import { observer } from "mobx-react-lite"
// Custom functional libraries
// Internal & 3rd party component libraries
import ReactPlayer from "react-player"
// import { Player as VideoReact } from 'video-react'
// Custom component libraries
import { RenderEngineComponentProps } from "mobx-render-engine"
import { GenericComponentProps } from "mobx-render-engine/state-container"


export const HLSVideo = observer(( {state, renderer, logger} : RenderEngineComponentProps ) => {

    const { url } = state.computedProps as GenericComponentProps
    return (
            <ReactPlayer
                url={url}
                playing={true}
                muted={true}
                light={true}
                onBuffer={() => console.log("starting buffering")}
                onError={(error : any, data : any) => console.log("encountered error", error, data)}
                style={{
                    border : '1px solid black'
                }}
            />
    )
})



// export const HLSVideoReact = observer(( {state, renderer, logger} : RenderEngineComponentProps ) => {

//     return (
//         <VideoReact />        
//     )
// })



export const ContextfulSSEVideo = observer(( {state, renderer, logger} : RenderEngineComponentProps ) => {

    // @ts-ignore
    const { img, boxProps } = state.computedImg 
    console.log("rendering image")
    return (
        <img src={img} width={boxProps.width? boxProps.width : 300} height={boxProps.height? boxProps.height : 300*9/16}/>
     )   
}) 