import { styled, View } from "@tamagui/core";

const Container = styled(View, {
  width: 64,
  height: 32,
  borderRadius: "$xl",
  overflow: "hidden",
  animation: "lazy",
  variants: {
    active: {
      ":boolean": (active) => ({
        backgroundColor: active ? "$succes" : "$error",
      }),
    },
  } as const,
});

const Circle = styled(View, {
  width: 32,
  height: 32,
  borderRadius: 32,
  backgroundColor: "$onSurface",
  animation: "lazy",
  variants: {
    active: {
      ":boolean": (active) => ({
        transform: [{ translateX: active ? 32 : 0 }],
      }),
    },
  } as const,
});

export type SwitchProps = {
  active: boolean;
};

export const Switch = View.styleable<SwitchProps>(
  ({ active, onPress, ...stylableProps }, ref) => {
    return (
      <Container active={active} onPress={onPress} {...stylableProps} ref={ref}>
        <Circle onPress={onPress} active={active} />
      </Container>
    );
  }
);
