import { outFunc, tooltip } from "./tooltip";

export interface TooltipProps {
  label?: string,
  content?: string,
  id?: string
}

export const ColorTooltip = ({ label, content, id }: TooltipProps) => {

  return (
    <>
      {label ?
        <div className={"colors-internals"}>
          <span className={"span"}>{label}</span>
          <div className={"tooltip"}>
            <button className={"tooltipButton"}
                    onClick={() => tooltip(content, `tooltipId-${id}`)}
                    onMouseOut={() => outFunc(`tooltipId-${id}`)}>
              <span className={"tooltiptext"} id={`tooltipId-${id}`}>Copy to clipboard</span>
              {content}
            </button>
          </div>
        </div> :
        <div className={"tooltip"}>
          <button className={"tooltipButton"}
                  onClick={() => tooltip(content, `tooltipId-${id}`)}
                  onMouseOut={() => outFunc(`tooltipId-${id}`)}>
            <span className={"tooltiptext"} id={`tooltipId-${id}`}>Copy to clipboard</span>
            {content}
          </button>
        </div>
      }
    </>
  )
}
