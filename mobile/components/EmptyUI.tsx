import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type EmptyUIProps = {
  title: string;
  subtitle?: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  iconColor?: string;
  iconSize?: number;
  buttonLabel?: string;
  onPressButton?: () => void;
};

function EmptyUI({
  title,
  subtitle,
  iconName = "chatbubbles-outline",
  iconColor = "#8B8B93",
  iconSize = 64,
  buttonLabel,
  onPressButton,
}: EmptyUIProps) {
  return (
    <View className="flex-1 items-center justify-center px-8 py-20">
      {/* Icon Container */}
      <View className="w-28 h-28 rounded-full bg-white/5 border border-white/10 items-center justify-center">
        {iconName && (
          <Ionicons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
        )}
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-foreground mt-8 text-center">
        {title}
      </Text>

      {/* Subtitle */}
      {subtitle ? (
        <Text className="text-muted-foreground text-base text-center mt-3 leading-6">
          {subtitle}
        </Text>
      ) : null}

      {/* Button */}
      {buttonLabel && onPressButton ? (
        <Pressable
          className="mt-8 bg-primary px-8 py-4 rounded-2xl active:scale-95"
          onPress={onPressButton}
        >
          <Text className="text-white font-semibold text-base">
            {buttonLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export default EmptyUI;