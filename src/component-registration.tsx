import { RenderEngine } from "mobx-render-engine";
import { ContextfulAceEditor } from "./components/ace-editor";
import { ContextfulSSEVideo } from "./components/video";
import { ContextfulPlotlyGraph } from "./components/plotly-graph";
import { ContextfulRGL, ContextfulResponsiveRGL } from "./components/react-grid-layouts";



export function prepareRenderers(renderers : RenderEngine[]) {
    for (let renderer of renderers){
        renderer.registerComponent("ContextfulAceEditor", ContextfulAceEditor)
        renderer.registerComponent("ContextfulSSEVideo", ContextfulSSEVideo)
        renderer.registerComponent("ContextfulPlotlyGraph", ContextfulPlotlyGraph)
        renderer.registerComponent("ContextfulRGL", ContextfulRGL)
        renderer.registerComponent("ContextfulResponsiveRGL", ContextfulResponsiveRGL)
    }
}