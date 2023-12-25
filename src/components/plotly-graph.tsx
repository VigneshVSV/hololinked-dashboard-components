// Internal & 3rd party functional libraries
import { observer } from "mobx-react-lite";
import React from "react";
// Custom functional libraries
// Internal & 3rd party component libraries
import Plot from "react-plotly.js";
// Custom component libraries
import { RenderEnginePlotlyProps } from "mobx-render-engine";



export const ContextfulPlotlyGraph = observer( ( { state, renderer, logger } : RenderEnginePlotlyProps ) => {

    const id = state.id
    const { data, layout, frames, config, style } = state.computedPlot
    const revision = state.revision

    logger.logMounting("ContextfulPlotlyGraph", id)

    return (
        <Plot 
            divId={id}
            data={data}
            layout={layout}
            frames={frames}
            config={config}
            revision={revision}
            style={style}
        />
    )
})