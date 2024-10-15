import { styled, View } from "@tamagui/core";
import { CustomIcon, Icon, Text } from "app/ds/sub-atomic";

export const ButtonContainer = styled(View, {
  borderRadius: "$xl",
  paddingVertical: 16,
  paddingHorizontal: 32,
  gap: 12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000000",
  shadowOffset: { height: 4, width: 0 },
  shadowRadius: 16,
  shadowOpacity: 0.08,
  elevationAndroid: 8,
  minWidth: 180,
  pressStyle: {
    scale: 1.1,
  },
  disabledStyle: {
    opacity: 0.6,
  },
  animation: "bouncy",
  variants: {
    type: {
      primary: {
        backgroundColor: "$surface",
      },
      primaryOutlined: {
        backgroundColor: "$surface50",
        borderWidth: 2,
        borderColor: "$surface",
      },
      secondary: {
        backgroundColor: "$onSurface",
      },
    },
    fab: {
      true: {
        borderRadius: 56,
        width: 56,
        height: 56,
        paddingVertical: 0,
        paddingHorizontal: 0,
        minWidth: 0,
      },
    },
  } as const,
});

export type ButtonProps = {
  type?: "primary" | "secondary" | "primaryOutlined";
  fab?: boolean;
  text?: string;
  icon?: CustomIcon;
};

export const Button = View.styleable<ButtonProps>(
  ({ type = "primary", fab, text, icon, ...styledProps }, ref) => {
    const textColor = type === "secondary" ? "$surface" : "$onSurface";
    return (
      <ButtonContainer type={type} fab={fab} ref={ref} {...styledProps}>
        {!fab && (
          <Text type="button" color={textColor}>
            {text}
          </Text>
        )}
        {icon && <Icon name={icon} size={fab ? 24 : 18} color={textColor} />}
      </ButtonContainer>
    );
  }
);
