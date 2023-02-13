import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CustomModal from '../../Controls/custommodal.control';
import ExpandCollapse from '../../Controls/expandables.control';
import TitleSetting from '../../Settings/title.setting';
import LegendSetting from '../../Settings/legend.setting';
import TooltipSetting from '../../Settings/tooltip.setting';

export default function PieSetting({
    modalVisible,
    setModalVisible,
    setTitleConfig,
    titleConfig,
    toolTipConfig,
    legendConfig,
    seriesConfig,
    setToolTipConfig,
    setLegendCofig,
    setSeriesConfig
}) {
    const isExpanded = {
        title: false,
        legend: false,
        tooltip: false
    }

    const [isExpandedList, setIsExpande] = useState(isExpanded)
    let [currentTitleConfig, setCurrentTitle] = useState(titleConfig);
    let [currentLegendConfig, setCurrentLegendConfig] = useState(legendConfig)
    let [currentToolTipConfig, setCurrentToolTipConfig] = useState(toolTipConfig)
    let [currentSeriesConfig, setCurrentSeriesConfig] = useState(seriesConfig)
    let [saveClicked, setSavedClick] = useState(false)
    const handleOnSave = () => {
        setTitleConfig(currentTitleConfig)
        setLegendCofig(currentLegendConfig)
        setIsExpande(isExpanded)
        setModalVisible(false)
    }
    const handleOnCancel = () => {
        setModalVisible(false)
    }
    const TitleConfiguration = () => {
        return (
            <View style={{ width: "100%" }}>
                <ExpandCollapse
                    title={"Title"}
                    isExpanded={isExpandedList["title"]}
                    children={() => {
                        return (
                            <TitleSetting
                                Title={currentTitleConfig}
                                setValue={(obj) => {
                                    setCurrentTitle(obj);
                                }}
                            />
                        );
                    }}
                    setExpanded={() => {
                        isExpanded["title"] = !isExpandedList["title"]
                        setIsExpande(isExpanded)
                    }} />
            </View>
        )
    }
    const LegendConfiguration = () => {
        return (
            <View style={{ width: "100%" }}>
                <ExpandCollapse
                    title={"Legend"}
                    isExpanded={isExpandedList["legend"]}
                    children={() => {
                        return (
                            <LegendSetting
                                Legend={currentLegendConfig}
                                setValue={(obj) => {
                                    setCurrentLegendConfig({ ...obj });
                                }}

                            />
                        );
                    }}
                    setExpanded={() => {
                        isExpanded["legend"] = !isExpandedList["legend"]
                        setIsExpande(isExpanded)
                    }}
                />
            </View>
        )
    }
    const ToolTipConfiguration = () => {
        return (
            <View style={{ width: "100%" }}>
                <ExpandCollapse
                    title={"Tooltip"}
                    isExpanded={isExpandedList["tooltip"]}
                    children={() => {
                        return (
                            <TooltipSetting
                                ToolTip={currentTitleConfig}
                                setValue={(obj) => {
                                    setCurrentTitle(obj);
                                }}
                            />
                        );
                    }}
                    setExpanded={() => {
                        isExpanded["tooltip"] = !isExpandedList["tooltip"]
                        setIsExpande(isExpanded)
                    }}
                />
            </View>
        )
    }

    const setting = () => {
        return (
            <View style={{ width: "100%", height: "90%" }}>
                <TitleConfiguration />
                <LegendConfiguration />
                <ToolTipConfiguration />
            </View>
        )
    }


    if (!modalVisible)
        return
    return (
        <CustomModal
            Content={() => setting()}
            modalVisible={modalVisible}
            setModalVisible={(val) => { setModalVisible(val) }}
            handleOnCancel={() => { handleOnCancel() }}
            handleOnSave={() => { handleOnSave() }}
            Label={"Pie Setting"}
        />
    );
};


