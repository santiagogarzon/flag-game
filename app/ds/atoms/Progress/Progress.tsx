import { styled, View } from "@tamagui/core";
import { Icon, Text } from "app/ds/sub-atomic";

type ProgressProps = {
  value: number;
  max: number;
};

export const Container = styled(View, {
  flexDirection: "row",
  gap: 8,
  alignSelf: "stretch",
  alignItems: "center",
});

export const Bar = styled(View, {
  backgroundColor: "$surface",
  borderRadius: "$lg",
  height: 16,
  flex: 1,
});

export const ProgressFill = styled(View, {
  backgroundColor: "$onSurface",
  height: 16,
  borderRadius: "$lg",
  flex: 1,
});

export const Progress = View.styleable<ProgressProps>(
  ({ value, max, ...styledProps }, ref) => {
    const percentage = `${Math.round((Math.min(value, max) / max) * 100)}%`;
    return (
      <Container ref={ref} {...styledProps}>
        <Bar>
          <ProgressFill width={percentage} />
        </Bar>
        <View paddingRight={4} justifyContent="flex-end" alignItems="center">
          <Text position="absolute" type="h4" right={4}>
            {percentage}
          </Text>
          <Text type="h4" opacity={0}>
            999%
          </Text>
        </View>
      </Container>
    );
  }
);
