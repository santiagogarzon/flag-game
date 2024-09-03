import { Portal } from "@gorhom/portal";

import React, { useEffect } from "react";
import { View } from "@tamagui/core";
import { Icon } from "app/ds/sub-atomic";
import { screenHeight, screenWidth } from "../Groups/GroupTab.styled";

import { useAtomValue } from "jotai";
import { heartPositionAtom } from "app/ds/organism/Header/Header";
import { Canvas, Circle, Mask, Rect } from "@shopify/react-native-skia";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "react-native";

export const failAnimationDuration = 2200;

export const FailAnimation = ({
  visible,
  onAnimationFinish,
}: {
  visible: boolean;
  onAnimationFinish: () => void;
}) => {
  const heartPosition = useAtomValue(heartPositionAtom);

  const animation = useSharedValue(0);
  const cx = heartPosition?.px + heartPosition?.width / 2;
  const cy =
    heartPosition?.py +
    heartPosition.height / 2 +
    (StatusBar.currentHeight || 0) / 2;

  useEffect(() => {
    if (visible) {
      animation.value = withSequence(
        withTiming(1, { duration: 600 }),
        withDelay(
          1000,
          withTiming(0, { duration: 600 }, () => {
            runOnJS(onAnimationFinish)();
          })
        )
      );
    } else {
      animation.value = 0;
    }
  }, [visible]);

  const animatedRadius = useDerivedValue(() =>
    interpolate(animation.value, [0, 1], [0, screenHeight * 1.2])
  );

  const heartStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animation.value,
      [0.8, 1],
      [0, 1],
      Extrapolation.CLAMP
    ),
    scale: interpolate(animation.value, [0.8, 1], [0, 1], Extrapolation.CLAMP),
    position: "absolute",
    alignSelf: "center",
  }));

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
          <Canvas style={{ width: screenWidth, height: screenHeight }}>
            {/* Definiendo una máscara */}
            <Mask
              mode="luminance"
              mask={
                <>
                  {/* Círculo que cambia de tamaño con la animación */}
                  <Circle cx={cx} cy={cy} r={animatedRadius} color="white" />
                  {/* Círculo estático */}
                  <Circle
                    cx={cx}
                    cy={cy}
                    r={heartPosition?.width / 2}
                    color="black"
                  />
                </>
              }
            >
              {/* Rectángulo que se recortará usando la máscara */}
              <Rect
                x={0}
                y={0}
                width={screenWidth}
                height={screenHeight}
                color="#FF4C62"
                opacity={0.9}
              />
            </Mask>
          </Canvas>
          <Animated.View style={heartStyle}>
            <Icon name="heart-broken" size={80} color="#FFFFFF" />
          </Animated.View>
        </View>
      )}
    </Portal>
  );
};
