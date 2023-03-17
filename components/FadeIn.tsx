import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";
import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

type FadeInViewProps = PropsWithChildren<{
  style: ViewStyle;
  animationEnd: () => void;
}>;

const FadeInView = (props: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      props.animationEnd();
    });
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
