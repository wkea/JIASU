import React from "react";
import ReactTooltip from "react-tooltip";
import { useObserver } from "mobx-react-lite";

import { useStore } from "../hooks";

const MidiButton = ({ action, ...props }: any) => {
  const launchpadStore = useStore(({ launchpads }) => launchpads);

  return useObserver(() => (
    <>
      <div
        className="finish"
        data-tip={
          launchpadStore.available
            ? undefined
            : `请使用支持WebMidi的浏览器 (eg. Chrome) to ${action}.`
        }
      >
        <button {...props} className="font-sans" disabled={!launchpadStore.available}>
          升级固件
        </button>
      </div>
      <ReactTooltip className="tooltip" effect="solid" place="top" />
    </>
  ));
};

export default MidiButton;
