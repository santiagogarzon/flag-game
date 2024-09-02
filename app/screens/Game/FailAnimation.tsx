import { Portal } from "@gorhom/portal";

import React, { useEffect, useState } from "react";
import { View } from "@tamagui/core";
import { Icon } from "app/ds/sub-atomic";
import { Circle, Defs, Mask, Rect, Svg } from "react-native-svg";
import { screenHeight, screenWidth } from "../Groups/GroupTab.styled";
import { motifySvg } from "moti/svg";
import { useAtomValue } from "jotai";
import { heartPositionAtom } from "app/ds/organism/Header/Header";

const StyledCircle = motifySvg(Circle)();

export const failAnimationDuration = 1800;

export const FailAnimation = ({ visible }: { visible: boolean }) => {
  const heartPosition = useAtomValue(heartPositionAtom);
  const [displayAnimation, setDisplayAnimation] = useState(false);

  useEffect(() => {
    setDisplayAnimation(true);
    setTimeout(() => setDisplayAnimation(false), 800);
  }, [visible]);

  return (
    <Portal>
      {visible && (
        <View
          flex={1}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          justifyContent="center"
          collapsable={false}
          disabled
        >
          <Svg width={screenWidth} height={screenHeight}>
            <Defs>
              <Mask id="mask">
                <StyledCircle
                  cx={heartPosition?.px + heartPosition?.width / 2}
                  cy={heartPosition?.py + heartPosition?.height / 2}
                  fill="white"
                  animate={{
                    r: displayAnimation ? screenHeight * 1.2 : 0,
                  }}
                  transition={{
                    type: "timing",
                    duration: 300,
                  }}
                />
                <Circle
                  cx={heartPosition?.px + heartPosition?.width / 2}
                  cy={heartPosition?.py + heartPosition?.height / 2}
                  r={heartPosition?.width / 2 + 4}
                  fill="black"
                />
              </Mask>
            </Defs>
            <Rect
              width={screenWidth}
              height={screenHeight}
              fill="#FF4C62"
              opacity={0.9}
              mask="url(#mask)"
            />
          </Svg>
          <View
            position="absolute"
            opacity={displayAnimation ? 1 : 0}
            scale={displayAnimation ? 1 : 0.5}
            animation="bouncy"
            alignSelf="center"
          >
            <Icon name="heart-broken" size={80} color="#FFFFFF" />
          </View>
        </View>
      )}
    </Portal>
  );
};
